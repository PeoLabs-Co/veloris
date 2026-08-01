const API_URL = import.meta.env.VITE_API_URL;

/**
 * Central communication hub for making API requests.
 * @param {string} endpoint - The API endpoint to call (e.g. '/api/products').
 * @param {RequestInit} [options={}] - Optional fetch options.
 * @returns {Promise<any>} The parsed JSON response.
 */
export async function apiClient(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  // 1. Auth Interceptor
  const token = localStorage.getItem("adminToken");
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // 2. Global Network Catch
  try {
    const response = await fetch(url, { ...options, headers });

    // Handle standard HTTP errors (400, 500)
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
  } catch (error) {
    // Catch absolute network failures (Server down, CORS blocked)
    console.error("API Client Error:", error);
    throw new Error(error.message || "Network failure or backend is offline.", {
      cause: error,
    });
  }
}
