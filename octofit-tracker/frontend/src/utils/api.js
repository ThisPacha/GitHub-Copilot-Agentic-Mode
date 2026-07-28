export function getApiUrl(resource) {
  const envName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  const currentHost = window.location.hostname;
  const host = envName
    ? `${envName}-8000.app.github.dev`
    : currentHost.includes('app.github.dev') || currentHost.includes('github.dev')
      ? currentHost.replace(/-5173\./, '-8000.').replace(/-5174\./, '-8000.')
      : 'localhost:8000';
  const protocol = envName || currentHost.includes('app.github.dev') || currentHost.includes('github.dev') ? 'https' : 'http';
  return `${protocol}://${host}/api/${resource}/`;
}
