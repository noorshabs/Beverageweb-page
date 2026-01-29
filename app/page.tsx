import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />

      {/* Placeholder for other sections */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center bg-brand-dark container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4">More Flavors Coming Soon</h2>
        <p className="text-gray-400 max-w-2xl">
          Our product range includes Azir Fruit Juices, Refreshing Sodas, and Black Bull Energy Drinks.
          Stay tuned for our full catalog.
        </p>
      </section>
    </div>
  );
}
