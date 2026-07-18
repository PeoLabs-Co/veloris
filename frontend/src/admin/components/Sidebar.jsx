function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Products",
    "Orders",
    "Customers",
    "Reports",
    "Settings",
    "Logout",
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
