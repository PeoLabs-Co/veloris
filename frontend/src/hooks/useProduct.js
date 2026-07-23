import { useState, useEffect } from 'react';
import { apiClient } from '../shared/apiClient';

/**
 * Custom hook to fetch a single product from the API.
 * @param {string|number} id - The ID of the product to fetch.
 * @returns {{ data: any|null, loading: boolean, error: string|null }}
 */
export function useProduct(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const product = await apiClient(`/products/${id}`);
        setData(product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return { data, loading, error };
}

export default useProduct;
