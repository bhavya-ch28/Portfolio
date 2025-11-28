/**
 * Get the correct asset path based on the current base URL
 * This handles both local development and production builds with different base paths
 */
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get the base URL from Vite's import.meta.env.BASE_URL
  // This will be '/Portfolio/' for GitHub Pages build
  const base = import.meta.env.BASE_URL;
  
  // Simply concatenate base and clean path
  return `${base}${cleanPath}`;
}

/**
 * Debug function to check what paths are being generated
 */
export function debugAssetPath(path) {
  const result = getAssetPath(path);
  console.log(`Asset path for "${path}":`, result);
  console.log('BASE_URL:', import.meta.env.BASE_URL);
  return result;
}