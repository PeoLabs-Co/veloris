function InventoryTable() {
  const products = [
    {
      name: "Item 1",
      category: "Cat 1",
      stock: 0,
      status: "0",
    },
    {
      name: "Item 2",
      category: "Cat 2",
      stock: 0,
      status: "0",
    },
    {
      name: "Item 3",
      category: "Cat 3",
      stock: 0,
      status: "0",
    },
  ];

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Inventory
      </h2>

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
          {products.map((product) => (
            <tr key={product.name} className="border-b">
              <td className="py-3">{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;