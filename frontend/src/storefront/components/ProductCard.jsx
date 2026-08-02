const getImageUrl = (image) => {
  if (!image) return "";
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  return `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;
};

export default function ProductCard({ product }) {
  const hasHoverImage = !!product.hoverImage;

  return (
    <a href="#" className="group block overflow-hidden">
      <div className="relative h-87.5 sm:h-112.5 overflow-hidden bg-surface-container-lowest rounded-none">
        {/* Primary Image */}
        <img
          src={getImageUrl(product.image)}
          alt={product.title || ""}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasHoverImage
              ? "opacity-100 group-hover:opacity-0 group-hover:scale-[1.03]"
              : "opacity-100 group-hover:scale-[1.03] group-hover:brightness-95"
          }`}
        />

        {/* Hover Image */}
        {hasHoverImage && (
          <img
            src={getImageUrl(product.hoverImage)}
            alt={`${product.title} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.03] group-hover:scale-100"
          />
        )}

        {/* Badge Overlay */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-primary text-on-primary font-sans uppercase tracking-[0.1em] text-[10px] px-2.5 py-1.5 font-semibold z-10 rounded-none">
            {product.badge}
          </div>
        )}

        {/* Quick View Interactive Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/15 to-transparent translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center">
          <span className="bg-surface text-primary text-[10px] font-sans font-semibold uppercase tracking-widest px-5 py-2.5 shadow-sm active:scale-95 transition-all">
            Quick View
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="relative bg-transparent pt-4 flex justify-between items-start">
        <div className="pr-4">
          {product.category && (
            <p className="text-[11px] uppercase tracking-[0.1em] text-outline mb-1 font-sans font-semibold">
              {product.category}
            </p>
          )}
          <h3 className="text-sm font-sans text-primary group-hover:underline underline-offset-4 decoration-outline-variant leading-snug">
            {product.title}
          </h3>
        </div>

        <p className="text-sm font-sans text-primary font-semibold whitespace-nowrap">
          ${Number(product.price || 0).toFixed(2)}
        </p>
      </div>
    </a>
  );
}

