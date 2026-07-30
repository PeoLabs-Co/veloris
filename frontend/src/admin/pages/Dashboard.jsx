import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";
import InventoryTable from "../components/InventoryTable";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="mt-2 text-gray-600">Welcome back 👋</p>

          <div className="mt-8 grid grid-cols-4 gap-4">
            <SummaryCard title="Sales" value="0" />
            <SummaryCard title="Orders" value="0" />
            <SummaryCard title="Customers" value="0" />
            <SummaryCard title="Products" value="0" />
          </div>
          <div className="mt-8">
            <InventoryTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
