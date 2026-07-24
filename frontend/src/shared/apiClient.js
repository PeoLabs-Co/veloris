const API_URL = import.meta.env.VITE_API_URL;

/**
 * Central communication hub for making API requests.
 * @param {string} endpoint - The API endpoint to call (e.g. '/api/products').
 * @param {RequestInit} [options={}] - Optional fetch options.
 * @returns {Promise<any>} The parsed JSON response.
 */
export async function apiClient(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let errorMessage = `HTTP error! Status: ${response.status}`;
    try {
      const errorData = await response.json();
      if (errorData && (errorData.message || errorData.error)) {
        errorMessage = errorData.message || errorData.error;
      }
    } catch {
      try {
        const errorText = await response.text();
        if (errorText) {
          errorMessage = errorText;
        }
      } catch {
        // Fallback to default errorMessage
      }
    }
    throw new Error(errorMessage);
  }

  return await response.json();
}
