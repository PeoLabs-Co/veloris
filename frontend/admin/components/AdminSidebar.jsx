import React from 'react';

const AdminSidebar = () => {
  return (
    <aside className="">
      {/* DIANA: Build a vertical flex layout with a dark background for the navigation links */}
      <nav className="">
        <a href="/admin">Dashboard</a>
        <a href="/admin/products">Products</a>
        <a href="/admin/orders">Orders</a>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
