function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <div>
        <h1 className="text-2xl font-bold text-blue-600">Veloris</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-xl">🔔</button>

        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <span className="font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;