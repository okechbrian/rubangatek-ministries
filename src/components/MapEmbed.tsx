type MapEmbedProps = {
  locations: string[];
};

export default function MapEmbed({ locations }: MapEmbedProps) {
  const query = encodeURIComponent(locations.join(" "));
  const src = `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=${query}`;

  return (
    <div className="rounded-xl overflow-hidden border border-secondary/50 shadow-sm bg-secondary/30">
      <div className="aspect-[16/9] flex items-center justify-center p-6 text-center">
        <div>
          <svg className="w-12 h-12 text-primary/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
          <p className="text-text-muted text-sm mb-1">
            <strong className="text-text-primary">Our Locations:</strong>
          </p>
          {locations.map((loc) => (
            <p key={loc} className="text-text-muted text-sm">{loc}</p>
          ))}
          <p className="text-xs text-text-muted/60 mt-3">
            <a
              href={`https://www.google.com/maps/search/${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View on Google Maps &rarr;
            </a>
          </p>
          <p className="text-xs text-text-muted/40 mt-2">
            (Add a Google Maps API key to enable the embedded map)
          </p>
        </div>
      </div>
    </div>
  );
}
