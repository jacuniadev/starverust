function fillPath(context, fill, stroke, width) {
    if (!context) return;

    if (fill) {
        context.fillStyle = fill;
        context.fill();
    }

    if (stroke) {
        context.lineWidth = width;
        context.strokeStyle = stroke;
        context.stroke();
    }
}

function drawRoundRectanglePath(context, a, b, d, c, e) {
    if (!context) return;

    if (d < 2 * e) e = d / 2;
    if (c < 2 * e) e = c / 2;

    if (0 > e) e = 0;

    context.beginPath();
    context.moveTo(a + e, b);
    context.arcTo(a + d, b, a + d, b + c, e);
    context.arcTo(a + d, b + c, a, b + c, e);
    context.arcTo(a, b + c, a, b, e);
    context.arcTo(a, b, a + d, b, e);
    context.closePath();
}

export function createRoundRectangleWithText(text = "", scale = 1) {
    const canvas = document.createElement("canvas"),
        context = canvas.getContext("2d");

    const padding = 8 * scale,
        gap = 6 * scale,
        height = Math.floor(scale * 26),
        fontSize = Math.floor(scale * 20);

    context.font = `${fontSize}px Baloo Paaji, Verdana, sans-serif`;

    const measure = context.measureText(text),
        textMeasureWidth = measure.width + padding * 2;

    canvas.width = textMeasureWidth;
    canvas.height = height;

    // Draw background
    drawRoundRectanglePath(context, 0, 0, textMeasureWidth, height, gap);
    context.globalAlpha = 0.5;
    fillPath(context, "#000");
    context.globalAlpha = 1;

    // Draw text
    context.font = `${fontSize}px Baloo Paaji, Verdana, sans-serif`;
    context.textBaseline = "middle";
    context.fillStyle = "white";
    context.fillText(text, padding, height / 1.65);

    return canvas;
}