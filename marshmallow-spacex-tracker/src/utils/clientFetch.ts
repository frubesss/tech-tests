export async function clientFetch(endpoint: string) {
  try {
    const response = await fetch(endpoint)
    const responseJson = await response.json()
    if (response.ok) {
      return {
        status: response.status,
        data: responseJson,
        headers: response.headers,
        url: response.url,
      }
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message)
  }
}
