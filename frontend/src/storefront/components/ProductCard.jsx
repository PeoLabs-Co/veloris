const getImageUrl = (image) => {
  if (!image) return "";
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  return `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;
};

export default function ProductCard({ product }) {
  return (
    <a href="#" class="group block overflow-hidden">
      <div class="relative h-87.5 sm:h-112.5">
        <img
          src={getImageUrl(product.image)}
          alt={product.title || ""}
          class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />
      </div>

      <div class="relative bg-white pt-3">
        <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.title}
        </h3>

        <p class="mt-1.5 tracking-wide text-gray-900">
          ${Number(product.price || 0).toFixed(2)}
        </p>
      </div>
    </a>
  );
}
