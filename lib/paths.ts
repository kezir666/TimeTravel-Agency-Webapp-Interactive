/**
 * Helper to get asset paths with basePath prefix
 * Used for GitHub Pages deployment where assets need a basePath
 */

const NEXT_PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/TimeTravel-Agency-Webapp-Interactive'

export function getAssetPath(path: string): string {
  if (path.startsWith('http')) {
    return path
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  return `${NEXT_PUBLIC_BASE_PATH}/${cleanPath}`
}
