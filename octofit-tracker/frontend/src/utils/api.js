export function getApiUrl(resource) {
  const envName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  const host = envName ? `${envName}-8000.app.github.dev` : 'localhost:8000';
  const protocol = envName ? 'https' : 'http';
  return `${protocol}://${host}/api/${resource}/`;
}
