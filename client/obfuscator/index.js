const path = require("path");
const acorn = require("acorn");
const terser = require("terser");
const fs = require("fs");
const escodegen = require("escodegen");

const reserved = require("uglify-js/tools/domprops.json").filter(name => ![].includes(name));

let p = path.join(__dirname, "../build/js/game.js");

async function obfuscate() {
    let code = fs.readFileSync(p).toString();
    let minified = await terser.minify(code, {
        mangle: {
            properties: {
                reserved: reserved,
                builtins: true,
                keep_quoted: true,
            }
        },
        compress: {
            computed_props: false,
            dead_code: true,
            reduce_funcs: false,
            passes: 5,
            ecma: 2016,
        }
    });
    code = minified.code;

    const ast = acorn.parse(code);

    const walker = {};
    (function clone(exports) {
        'use strict';

        var Syntax,
            VisitorOption,
            VisitorKeys,
            BREAK,
            SKIP,
            REMOVE;

        function deepCopy(obj) {
            var ret = {}, key, val;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    val = obj[key];
                    if (typeof val === 'object' && val !== null) {
                        ret[key] = deepCopy(val);
                    } else {
                        ret[key] = val;
                    }
                }
            }
            return ret;
        }

        // based on LLVM libc++ upper_bound / lower_bound
        // MIT License

        function upperBound(array, func) {
            var diff, len, i, current;

            len = array.length;
            i = 0;

            while (len) {
                diff = len >>> 1;
                current = i + diff;
                if (func(array[current])) {
                    len = diff;
                } else {
                    i = current + 1;
                    len -= diff + 1;
                }
            }
            return i;
        }

        Syntax = {
            AssignmentExpression: 'AssignmentExpression',
            AssignmentPattern: 'AssignmentPattern',
            ArrayExpression: 'ArrayExpression',
            ArrayPattern: 'ArrayPattern',
            ArrowFunctionExpression: 'ArrowFunctionExpression',
            AwaitExpression: 'AwaitExpression', // CAUTION: It's deferred to ES7.
            BlockStatement: 'BlockStatement',
            BinaryExpression: 'BinaryExpression',
            BreakStatement: 'BreakStatement',
            CallExpression: 'CallExpression',
            CatchClause: 'CatchClause',
            ChainExpression: 'ChainExpression',
            ClassBody: 'ClassBody',
            ClassDeclaration: 'ClassDeclaration',
            ClassExpression: 'ClassExpression',
            ComprehensionBlock: 'ComprehensionBlock',  // CAUTION: It's deferred to ES7.
            ComprehensionExpression: 'ComprehensionExpression',  // CAUTION: It's deferred to ES7.
            ConditionalExpression: 'ConditionalExpression',
            ContinueStatement: 'ContinueStatement',
            DebuggerStatement: 'DebuggerStatement',
            DirectiveStatement: 'DirectiveStatement',
            DoWhileStatement: 'DoWhileStatement',
            EmptyStatement: 'EmptyStatement',
            ExportAllDeclaration: 'ExportAllDeclaration',
            ExportDefaultDeclaration: 'ExportDefaultDeclaration',
            ExportNamedDeclaration: 'ExportNamedDeclaration',
            ExportSpecifier: 'ExportSpecifier',
            ExpressionStatement: 'ExpressionStatement',
            ForStatement: 'ForStatement',
            ForInStatement: 'ForInStatement',
            ForOfStatement: 'ForOfStatement',
            FunctionDeclaration: 'FunctionDeclaration',
            FunctionExpression: 'FunctionExpression',
            GeneratorExpression: 'GeneratorExpression',  // CAUTION: It's deferred to ES7.
            Identifier: 'Identifier',
            IfStatement: 'IfStatement',
            ImportExpression: 'ImportExpression',
            ImportDeclaration: 'ImportDeclaration',
            ImportDefaultSpecifier: 'ImportDefaultSpecifier',
            ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
            ImportSpecifier: 'ImportSpecifier',
            Literal: 'Literal',
            LabeledStatement: 'LabeledStatement',
            LogicalExpression: 'LogicalExpression',
            MemberExpression: 'MemberExpression',
            MetaProperty: 'MetaProperty',
            MethodDefinition: 'MethodDefinition',
            ModuleSpecifier: 'ModuleSpecifier',
            NewExpression: 'NewExpression',
            ObjectExpression: 'ObjectExpression',
            ObjectPattern: 'ObjectPattern',
            Program: 'Program',
            Property: 'Property',
            RestElement: 'RestElement',
            ReturnStatement: 'ReturnStatement',
            SequenceExpression: 'SequenceExpression',
            SpreadElement: 'SpreadElement',
            Super: 'Super',
            SwitchStatement: 'SwitchStatement',
            SwitchCase: 'SwitchCase',
            TaggedTemplateExpression: 'TaggedTemplateExpression',
            TemplateElement: 'TemplateElement',
            TemplateLiteral: 'TemplateLiteral',
            ThisExpression: 'ThisExpression',
            ThrowStatement: 'ThrowStatement',
            TryStatement: 'TryStatement',
            UnaryExpression: 'UnaryExpression',
            UpdateExpression: 'UpdateExpression',
            VariableDeclaration: 'VariableDeclaration',
            VariableDeclarator: 'VariableDeclarator',
            WhileStatement: 'WhileStatement',
            WithStatement: 'WithStatement',
            YieldExpression: 'YieldExpression'
        };

        VisitorKeys = {
            AssignmentExpression: ['left', 'right'],
            AssignmentPattern: ['left', 'right'],
            ArrayExpression: ['elements'],
            ArrayPattern: ['elements'],
            ArrowFunctionExpression: ['params', 'body'],
            AwaitExpression: ['argument'], // CAUTION: It's deferred to ES7.
            BlockStatement: ['body'],
            BinaryExpression: ['left', 'right'],
            BreakStatement: ['label'],
            CallExpression: ['callee', 'arguments'],
            CatchClause: ['param', 'body'],
            ChainExpression: ['expression'],
            ClassBody: ['body'],
            ClassDeclaration: ['id', 'superClass', 'body'],
            ClassExpression: ['id', 'superClass', 'body'],
            ComprehensionBlock: ['left', 'right'],  // CAUTION: It's deferred to ES7.
            ComprehensionExpression: ['blocks', 'filter', 'body'],  // CAUTION: It's deferred to ES7.
            ConditionalExpression: ['test', 'consequent', 'alternate'],
            ContinueStatement: ['label'],
            DebuggerStatement: [],
            DirectiveStatement: [],
            DoWhileStatement: ['body', 'test'],
            EmptyStatement: [],
            ExportAllDeclaration: ['source'],
            ExportDefaultDeclaration: ['declaration'],
            ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
            ExportSpecifier: ['exported', 'local'],
            ExpressionStatement: ['expression'],
            ForStatement: ['init', 'test', 'update', 'body'],
            ForInStatement: ['left', 'right', 'body'],
            ForOfStatement: ['left', 'right', 'body'],
            FunctionDeclaration: ['id', 'params', 'body'],
            FunctionExpression: ['id', 'params', 'body'],
            GeneratorExpression: ['blocks', 'filter', 'body'],  // CAUTION: It's deferred to ES7.
            Identifier: [],
            IfStatement: ['test', 'consequent', 'alternate'],
            ImportExpression: ['source'],
            ImportDeclaration: ['specifiers', 'source'],
            ImportDefaultSpecifier: ['local'],
            ImportNamespaceSpecifier: ['local'],
            ImportSpecifier: ['imported', 'local'],
            Literal: [],
            LabeledStatement: ['label', 'body'],
            LogicalExpression: ['left', 'right'],
            MemberExpression: ['object', 'property'],
            MetaProperty: ['meta', 'property'],
            MethodDefinition: ['key', 'value'],
            ModuleSpecifier: [],
            NewExpression: ['callee', 'arguments'],
            ObjectExpression: ['properties'],
            ObjectPattern: ['properties'],
            Program: ['body'],
            Property: ['key', 'value'],
            RestElement: ['argument'],
            ReturnStatement: ['argument'],
            SequenceExpression: ['expressions'],
            SpreadElement: ['argument'],
            Super: [],
            SwitchStatement: ['discriminant', 'cases'],
            SwitchCase: ['test', 'consequent'],
            TaggedTemplateExpression: ['tag', 'quasi'],
            TemplateElement: [],
            TemplateLiteral: ['quasis', 'expressions'],
            ThisExpression: [],
            ThrowStatement: ['argument'],
            TryStatement: ['block', 'handler', 'finalizer'],
            UnaryExpression: ['argument'],
            UpdateExpression: ['argument'],
            VariableDeclaration: ['declarations'],
            VariableDeclarator: ['id', 'init'],
            WhileStatement: ['test', 'body'],
            WithStatement: ['object', 'body'],
            YieldExpression: ['argument']
        };

        // unique id
        BREAK = {};
        SKIP = {};
        REMOVE = {};

        VisitorOption = {
            Break: BREAK,
            Skip: SKIP,
            Remove: REMOVE
        };

        function Reference(parent, key) {
            this.parent = parent;
            this.key = key;
        }

        Reference.prototype.replace = function replace(node) {
            this.parent[this.key] = node;
        };

        Reference.prototype.remove = function remove() {
            if (Array.isArray(this.parent)) {
                this.parent.splice(this.key, 1);
                return true;
            } else {
                this.replace(null);
                return false;
            }
        };

        function Element(node, path, wrap, ref) {
            this.node = node;
            this.path = path;
            this.wrap = wrap;
            this.ref = ref;
        }

        function Controller() { }

        // API:
        // return property path array from root to current node
        Controller.prototype.path = function path() {
            var i, iz, j, jz, result, element;

            function addToPath(result, path) {
                if (Array.isArray(path)) {
                    for (j = 0, jz = path.length; j < jz; ++j) {
                        result.push(path[j]);
                    }
                } else {
                    result.push(path);
                }
            }

            // root node
            if (!this.__current.path) {
                return null;
            }

            // first node is sentinel, second node is root element
            result = [];
            for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
                element = this.__leavelist[i];
                addToPath(result, element.path);
            }
            addToPath(result, this.__current.path);
            return result;
        };

        // API:
        // return type of current node
        Controller.prototype.type = function () {
            var node = this.current();
            return node.type || this.__current.wrap;
        };

        // API:
        // return array of parent elements
        Controller.prototype.parents = function parents() {
            var i, iz, result;

            // first node is sentinel
            result = [];
            for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
                result.push(this.__leavelist[i].node);
            }

            return result;
        };

        // API:
        // return current node
        Controller.prototype.current = function current() {
            return this.__current.node;
        };

        Controller.prototype.__execute = function __execute(callback, element) {
            var previous, result;

            result = undefined;

            previous = this.__current;
            this.__current = element;
            this.__state = null;
            if (callback) {
                result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
            }
            this.__current = previous;

            return result;
        };

        // API:
        // notify control skip / break
        Controller.prototype.notify = function notify(flag) {
            this.__state = flag;
        };

        // API:
        // skip child nodes of current node
        Controller.prototype.skip = function () {
            this.notify(SKIP);
        };

        // API:
        // break traversals
        Controller.prototype['break'] = function () {
            this.notify(BREAK);
        };

        // API:
        // remove node
        Controller.prototype.remove = function () {
            this.notify(REMOVE);
        };

        Controller.prototype.__initialize = function (root, visitor) {
            this.visitor = visitor;
            this.root = root;
            this.__worklist = [];
            this.__leavelist = [];
            this.__current = null;
            this.__state = null;
            this.__fallback = null;
            if (visitor.fallback === 'iteration') {
                this.__fallback = Object.keys;
            } else if (typeof visitor.fallback === 'function') {
                this.__fallback = visitor.fallback;
            }

            this.__keys = VisitorKeys;
            if (visitor.keys) {
                this.__keys = Object.assign(Object.create(this.__keys), visitor.keys);
            }
        };

        function isNode(node) {
            if (node == null) {
                return false;
            }
            return typeof node === 'object' && typeof node.type === 'string';
        }

        function isProperty(nodeType, key) {
            // console.log(key);

            return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
        }

        function candidateExistsInLeaveList(leavelist, candidate) {
            for (var i = leavelist.length - 1; i >= 0; --i) {
                if (leavelist[i].node === candidate) {
                    return true;
                }
            }
            return false;
        }

        Controller.prototype.traverse = function traverse(root, visitor) {
            var worklist,
                leavelist,
                element,
                node,
                nodeType,
                ret,
                key,
                current,
                current2,
                candidates,
                candidate,
                sentinel;

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            worklist.push(new Element(root, null, null, null));
            leavelist.push(new Element(null, null, null, null));

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    ret = this.__execute(visitor.leave, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }
                    continue;
                }

                if (element.node) {

                    ret = this.__execute(visitor.enter, element);

                    if (this.__state === BREAK || ret === BREAK) {
                        return;
                    }

                    worklist.push(sentinel);
                    leavelist.push(element);

                    if (this.__state === SKIP || ret === SKIP) {
                        continue;
                    }

                    node = element.node;
                    nodeType = node.type || element.wrap;
                    candidates = this.__keys[nodeType];
                    if (!candidates) {
                        if (this.__fallback) {
                            candidates = this.__fallback(node);
                        } else {
                            throw new Error('Unknown node type ' + nodeType + '.');
                        }
                    }

                    current = candidates.length;
                    while ((current -= 1) >= 0) {
                        key = candidates[current];
                        candidate = node[key];
                        if (!candidate) {
                            continue;
                        }

                        if (Array.isArray(candidate)) {
                            current2 = candidate.length;
                            while ((current2 -= 1) >= 0) {
                                if (!candidate[current2]) {
                                    continue;
                                }

                                if (candidateExistsInLeaveList(leavelist, candidate[current2])) {
                                    continue;
                                }

                                if (isProperty(nodeType, candidates[current])) {
                                    element = new Element(candidate[current2], [key, current2], 'Property', null);
                                } else if (isNode(candidate[current2])) {
                                    element = new Element(candidate[current2], [key, current2], null, null);
                                } else {
                                    continue;
                                }
                                worklist.push(element);
                            }
                        } else if (isNode(candidate)) {
                            if (candidateExistsInLeaveList(leavelist, candidate)) {
                                continue;
                            }

                            worklist.push(new Element(candidate, key, null, null));
                        }
                    }
                }
            }
        };

        Controller.prototype.replace = function replace(root, visitor) {
            var worklist,
                leavelist,
                node,
                nodeType,
                target,
                element,
                current,
                current2,
                candidates,
                candidate,
                sentinel,
                outer,
                key;

            function removeElem(element) {
                var i,
                    key,
                    nextElem,
                    parent;

                if (element.ref.remove()) {
                    // When the reference is an element of an array.
                    key = element.ref.key;
                    parent = element.ref.parent;

                    // If removed from array, then decrease following items' keys.
                    i = worklist.length;
                    while (i--) {
                        nextElem = worklist[i];
                        if (nextElem.ref && nextElem.ref.parent === parent) {
                            if (nextElem.ref.key < key) {
                                break;
                            }
                            --nextElem.ref.key;
                        }
                    }
                }
            }

            this.__initialize(root, visitor);

            sentinel = {};

            // reference
            worklist = this.__worklist;
            leavelist = this.__leavelist;

            // initialize
            outer = {
                root: root
            };
            element = new Element(root, null, null, new Reference(outer, 'root'));
            worklist.push(element);
            leavelist.push(element);

            while (worklist.length) {
                element = worklist.pop();

                if (element === sentinel) {
                    element = leavelist.pop();

                    target = this.__execute(visitor.leave, element);

                    // node may be replaced with null,
                    // so distinguish between undefined and null in this place
                    if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                        // replace
                        element.ref.replace(target);
                    }

                    if (this.__state === REMOVE || target === REMOVE) {
                        removeElem(element);
                    }

                    if (this.__state === BREAK || target === BREAK) {
                        return outer.root;
                    }
                    continue;
                }

                target = this.__execute(visitor.enter, element);

                // node may be replaced with null,
                // so distinguish between undefined and null in this place
                if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
                    // replace
                    element.ref.replace(target);
                    element.node = target;
                }

                if (this.__state === REMOVE || target === REMOVE) {
                    removeElem(element);
                    element.node = null;
                }

                if (this.__state === BREAK || target === BREAK) {
                    return outer.root;
                }

                // node may be null
                node = element.node;
                if (!node) {
                    continue;
                }

                worklist.push(sentinel);
                leavelist.push(element);

                if (this.__state === SKIP || target === SKIP) {
                    continue;
                }

                nodeType = node.type || element.wrap;
                candidates = this.__keys[nodeType];
                if (!candidates) {
                    if (this.__fallback) {
                        candidates = this.__fallback(node);
                    } else {
                        throw new Error('Unknown node type ' + nodeType + '.');
                    }
                }

                current = candidates.length;
                while ((current -= 1) >= 0) {
                    key = candidates[current];
                    candidate = node[key];
                    if (!candidate) {
                        continue;
                    }

                    if (Array.isArray(candidate)) {
                        current2 = candidate.length;
                        while ((current2 -= 1) >= 0) {
                            if (!candidate[current2]) {
                                continue;
                            }
                            if (isProperty(nodeType, candidates[current])) {
                                element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
                            } else if (isNode(candidate[current2])) {
                                element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
                            } else {
                                continue;
                            }
                            worklist.push(element);
                        }
                    } else if (isNode(candidate)) {
                        worklist.push(new Element(candidate, key, null, new Reference(node, key)));
                    }
                }
            }

            return outer.root;
        };

        function traverse(root, visitor) {
            var controller = new Controller();
            return controller.traverse(root, visitor);
        }

        function replace(root, visitor) {
            var controller = new Controller();
            return controller.replace(root, visitor);
        }

        function extendCommentRange(comment, tokens) {
            var target;

            target = upperBound(tokens, function search(token) {
                return token.range[0] > comment.range[0];
            });

            comment.extendedRange = [comment.range[0], comment.range[1]];

            if (target !== tokens.length) {
                comment.extendedRange[1] = tokens[target].range[0];
            }

            target -= 1;
            if (target >= 0) {
                comment.extendedRange[0] = tokens[target].range[1];
            }

            return comment;
        }

        function attachComments(tree, providedComments, tokens) {
            // At first, we should calculate extended comment ranges.
            var comments = [], comment, len, i, cursor;

            if (!tree.range) {
                throw new Error('attachComments needs range information');
            }

            // tokens array is empty, we attach comments to tree as 'leadingComments'
            if (!tokens.length) {
                if (providedComments.length) {
                    for (i = 0, len = providedComments.length; i < len; i += 1) {
                        comment = deepCopy(providedComments[i]);
                        comment.extendedRange = [0, tree.range[0]];
                        comments.push(comment);
                    }
                    tree.leadingComments = comments;
                }
                return tree;
            }

            for (i = 0, len = providedComments.length; i < len; i += 1) {
                comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
            }

            // This is based on John Freeman's implementation.
            cursor = 0;
            traverse(tree, {
                enter: function (node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (comment.extendedRange[1] > node.range[0]) {
                            break;
                        }

                        if (comment.extendedRange[1] === node.range[0]) {
                            if (!node.leadingComments) {
                                node.leadingComments = [];
                            }
                            node.leadingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            cursor = 0;
            traverse(tree, {
                leave: function (node) {
                    var comment;

                    while (cursor < comments.length) {
                        comment = comments[cursor];
                        if (node.range[1] < comment.extendedRange[0]) {
                            break;
                        }

                        if (node.range[1] === comment.extendedRange[0]) {
                            if (!node.trailingComments) {
                                node.trailingComments = [];
                            }
                            node.trailingComments.push(comment);
                            comments.splice(cursor, 1);
                        } else {
                            cursor += 1;
                        }
                    }

                    // already out of owned node
                    if (cursor === comments.length) {
                        return VisitorOption.Break;
                    }

                    if (comments[cursor].extendedRange[0] > node.range[1]) {
                        return VisitorOption.Skip;
                    }
                }
            });

            return tree;
        }

        exports.Syntax = Syntax;
        exports.traverse = traverse;
        exports.replace = replace;
        exports.attachComments = attachComments;
        exports.VisitorKeys = VisitorKeys;
        exports.VisitorOption = VisitorOption;
        exports.Controller = Controller;
        exports.cloneEnvironment = function () { return clone({}); };

        return exports;
    }(walker));

    function doSomething() {

        function callback(node) {
           //console.log(node);
        }

        walker.traverse(ast, {
            enter: callback
        });
    }

    doSomething();

    code = escodegen.generate(ast, {
        format: escodegen.FORMAT_MINIFY
    });

    fs.writeFileSync(path.join(__dirname, "../build/js/game.js"), code);
}

obfuscate();