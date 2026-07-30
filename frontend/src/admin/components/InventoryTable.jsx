import { useAdminProducts } from "../../hooks/useAdminProducts";
import DataLoader from "../../shared/components/DataLoader";

function InventoryTable() {
  const { data: products, loading, error } = useAdminProducts();

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Inventory
      </h2>

      <DataLoader error={error} loading={loading}>
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">Product</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Stock</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {products && products.map((product) => (
              <tr key={product.id || product.title || product.name} className="border-b">
                <td className="py-3">{product.title || product.name}</td>
                <td>{product.category}</td>
                <td>{product.in_stock !== undefined ? product.in_stock : product.stock}</td>
                <td>{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataLoader>
    </div>
  );
}

export default InventoryTable;