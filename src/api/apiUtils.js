export async function handleResponse(response) {
  if (response.ok) return response.json();

  //Error while requesting api
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
}

export function handleError(error) {
  console.error("API call has failed " + error);
  throw error;
}
