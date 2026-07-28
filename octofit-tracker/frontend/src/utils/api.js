export function getApiUrl(resource) {
  return `/api/${resource}/`;
}

export async function fetchApi(resource, options = {}) {
  const response = await fetch(getApiUrl(resource), options);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response;
}
