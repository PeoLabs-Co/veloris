export default function CategoryGrid() {
  const categories = [
    {
      id: "skincare",
      title: "Skincare",
      eyebrow: "RITUALS FOR THE SKIN",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe8dA9d8PVSAhkfbvOXWQPGFzeYtgH3d274mYT_YqR3s_32pmH-1fY9uBWNrP73l3uDQj9ZQUgeH-T-4R8Efb0KjqBpVWg50JlH-k-SUWpcHJ_bFYLClOjL4CxFEvzYa9TUJHXhcc_eaE61UmIsBCIr3xqqsJEG8JPAZmR6tY46Nhc9ox5iQ0NBYwafdmJtf6ALdlOMgpxUdAfVXFtvU3MQGIUs-AgRXn6PqZJwE2K0a16IOKRRfVR",
    },
    {
      id: "fragrance",
      title: "Fragrance",
      eyebrow: "MEMORY IN A BOTTLE",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcwQJIH0d51lrvqcduYlG7siUOUdLRG4f-c-1wY0IH7F1Bjx-7tUtjLkw2Pkk-CNfev7aUqSRVh6bqPWtr4yUrwQoI6d-PTKs6uUZofLkY0TWO527vmlBKm2zGu2s0d7qOZI4HwdxQljTH2O60mMSaRKUiaY83zkWXxfKqW1Akmx8WqGJDhmkjqMz3iF-jUJwr0nOoErcDJBurpjQQDJ0fSMk4f_oe7Cxp5vHy0dmSAwnnnDfAyy-l",
    },
    {
      id: "apparel",
      title: "Apparel",
      eyebrow: "FORM FOLLOWS FEELING",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8GP3itKjqdQvJzc60hy3QuR4JA3jkVV7S5vpJmLyMX6G1iIJ_TwERjvKBGoMGWg-Cjv9xN7345N9IeWf627GmTEuS6rwi3NVk3_w_oCkI1PDVA02-GcHi9PEXCwFxOCVhF1iARAS1fPSGfGNsdU89AVOL1QTYZFiXL5pTxYEqU8SkNnnUa0A3kzKB1y7jIAaRHL3RYpQwAL2H0eHjNtTBKwAjf4D0RHGzC99qtnA9J5w5Toub9kia",
    },
    {
      id: "home",
      title: "Home",
      eyebrow: "OBJECTS OF INTENTION",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn_NUG3yslNzm3wXSpUKlFKLAZt5f12o8WBNB3QIsVH3hUweFZT9IePHaxuFb91OHMnb6as4OEAluszPIpanO4NRO8iJyhPHgqEp3wvEiBxJbdT9RzCqmzZ2rfCHc8eV1drdxiFW1awHEEk4QJ__GbEZ9Vwsz3kGQTYN2W01jQzLbQZ09JZWmi_l72atPwdSn6NXcUdRTtWWNFHWU_Iez-CHd3GUkFemJhgHPZJ3XocIOMOCvdBC8H",
    },
  ];

  return (
    <section className="w-full bg-primary-container py-[var(--spacing-section-gap)] rounded-none">
      <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] w-full max-w-[1440px] mx-auto rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-gutter)] border-t border-outline/20 pt-12 rounded-none">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer rounded-none">
              <p className="font-sans text-[length:var(--text-label-caps)] text-on-primary-container mb-2 uppercase tracking-widest">
                {category.eyebrow}
              </p>
              <h3 className="font-serif text-[length:var(--text-headline-md)] text-white mb-8 font-normal">
                {category.title}
              </h3>
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 rounded-none">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 rounded-none"
                  src={category.image}
                  alt={category.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
