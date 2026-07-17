import React from 'react';

const AdminTable = ({ products }) => {
  return (
    <div className="">
      {/* DIANA: Create a standard HTML <table> structure here with standard padding */}
      <table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
