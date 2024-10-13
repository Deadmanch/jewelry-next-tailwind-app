export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface IRequestParams<B = unknown> {
  url: string
  method?: HttpMethod
  headers?: Record<string, string>
  query?: Record<string, string>
  body?: B
  token?: string
}

export const request = async <T, B = unknown>({
  url,
  method = 'GET',
  headers = { 'Content-Type': 'application/json' },
  query,
  body,
  token
}: IRequestParams<B>): Promise<T> => {
  try {
    if (query) {
      const queryString = new URLSearchParams(query).toString()
      url = `${url}?${queryString}`
    }
    const fetchHeaders = {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }

    const res = await fetch(url, {
      method,
      headers: fetchHeaders,
      body: body ? JSON.stringify(body) : undefined
    })

    if (!res.ok) {
      console.error(`Failed to ${method} data from ${url}:`, res.statusText)
      throw new Error(res.statusText)
    }

    return await res.json()
  } catch (error) {
    console.error(`Failed to ${method} data from ${url}:`, error)
    throw error
  }
}
