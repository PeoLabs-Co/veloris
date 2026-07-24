import { useState, useEffect } from 'react';
import { apiClient } from '../shared/apiClient';

/**
 * Custom hook to fetch products from the API.
 * @returns {{ data: any[], loading: boolean, error: string|null }}
 */
export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await apiClient('/products');
        setData(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { data, loading, error };
}

export default useProducts;
