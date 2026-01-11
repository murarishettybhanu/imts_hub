/**
 * Get the correct image path for GitHub Pages
 * Prepends the base path when in production on GitHub Pages
 */
export const getImagePath = (imagePath: string): string => {
  if (import.meta.env.MODE === 'production' && import.meta.env.VITE_GITHUB_PAGES) {
    return `/imts_hub${imagePath}`;
  }
  return imagePath;
};
