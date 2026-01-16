/**
 * Get the correct image path for GitHub Pages
 * Prepends the base path when in production
 */
export const getImagePath = (imagePath: string): string => {
  if (import.meta.env.PROD) {
    return `/imts_hub${imagePath}`;
  }
  return imagePath;
};
