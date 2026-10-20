// Helper functions for data ingestion

const TARGET_WIDTHS: number[] = [400, 800, 1600];
// Use .webp for better performance
const EXT: string = ".webp";

/**
 * Generates target widths for an image with the given
 * width (in px).
 * Default target widths are defined by `TARGET_WIDTHS`.
 * @param originalWidth
 *    The original width of the image, in pixels (px)
 * @returns 
 *    An array of target widths that are no larger than
 *    the original
 */
function widthsFor(originalWidth: number): number[] {
  let widths: number[] = [];

  for (const t of TARGET_WIDTHS) {
    // Don't allow widths within 150px of each other
    if (originalWidth > t && Math.abs(originalWidth - t) > 150) {
      widths.push(t);
    }
  }

  // Add originalWidth if less than highest target width
  if (
    widths.length < 3 && 
    Math.abs(widths[widths.length - 1] - originalWidth) > 150) {
      widths.push(originalWidth);
    }
  return widths;
}

/**
 * Returns the R2 key for an image of a given size.
 * Sizes are based on default target widths, which are
 * defined by `TARGET_WIDTHS`.
 * @param path 
 *    The image path (i.e. 'image-of-a-cat')
 * @param width 
 *    The target width, in pixels (px)
 * @returns 
 *    An R2 key for a sized image (i.e. 'cat_400.webp')
 */
function keyFor(path: string, width: number): string {
  return path + "_" + width + EXT;
}

/**
 * Helper function to generate srcset strings so the
 * browser can choose from multiple image sizes when
 * rendering an image.
 * @param path 
 *    The image path (i.e. 'image-of-a-cat')
 * @param originalWidth 
 *    The original width of the image, in pixels (px)
 * @returns 
 *    The srcset string to choose an image size from
 *    (i.e. "/img/cat_400.webp 400w, /img/cat_700.webp 700w").
 */
export function srcSetFor(path: string, originalWidth: number): string {
  return widthsFor(originalWidth).map((width) => (
    `/img/${keyFor(path, width)} ${width}w`
  )).join(', ').slice(0, -1);
}