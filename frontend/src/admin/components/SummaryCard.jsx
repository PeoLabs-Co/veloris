function SummaryCard({ title, value }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default SummaryCard;