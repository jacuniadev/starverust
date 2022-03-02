import vendors from "../../../../shared/BrowserVendors";

class Antialiasing {
    constructor(window, canvasContext) {
        if (canvasContext.imageSmoothingEnabled) canvasContext.imageSmoothingEnabled = false;

        for (const vendor of vendors) {
            const vendorArgument = vendor + "ImageSmoothingEnabled";

            if (canvasContext[vendorArgument]) canvasContext[vendorArgument] = false;
        }
    }
}

Antialiasing.REQUIRED_CANVAS_CONTEXT = true;

export default Antialiasing;