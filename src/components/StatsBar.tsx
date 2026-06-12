import { stats } from "@/lib/constants";

export default function StatsBar() {
  return (
    <section className="bg-primary py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/80 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
