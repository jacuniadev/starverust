import vendors from "../../../../shared/BrowserVendors";

export default class {
    constructor(window) {
        for (const vendor of vendors) {
            const requestVendor = vendor + "RequestAnimationFrame",
                cancelRequestVendor = vendor + "CancelRequestAnimationFrame",
                cancelVendor = vendor + "CancelAnimationFrame";

            if (window[requestVendor] && window[cancelRequestVendor] && window[cancelVendor]) {
                if (!("requestAnimationFrame" in window))
                    window["requestAnimationFrame"] = window[requestVendor];
                    
                if (!("cancelAnimationFrame" in window))
                    window["cancelAnimationFrame"] = window[cancelVendor] || window[cancelRequestVendor];

                break;
            }
        }
    }
}