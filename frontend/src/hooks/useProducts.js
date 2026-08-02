import { useState, useEffect } from 'react';
import { apiClient } from '../shared/apiClient';
import mockProducts from '../storefront/data/products.json';

/**
 * Custom hook to fetch products from the API.
 * @returns {{ data: any[], loading: boolean, error: string|null }}
 */
export function useProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await apiClient('/products');
        if (Array.isArray(products)) {
          setData(products);
        } else {
          throw new Error('Response is not a valid JSON array');
        }
      } catch (err) {
        console.warn(
          `[Dev Mode] Fetch products failed (${err.message}). Falling back to mock storefront products.`,
        );
        setData(mockProducts);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { data, loading, error };
}

export default useProducts;
