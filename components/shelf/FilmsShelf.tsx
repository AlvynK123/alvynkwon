export default function FilmsShelf() {
  const films = [
    { title: "The Holdovers", year: "2023", src: "/films/holdovers.jpg" },
    { title: "어쩔수가없다", year: "2025", src: "/films/noc.jpg" },
    { title: "The Wind Rises", year: "2013", src: "/films/wind.png" },
    { title: "When Harry Met Sally", year: "1989", src: "/films/harry.png" },
  ];

  const otherFilms = [
    { title: "Sinners", year: "2025" },
    { title: "One Battle After Another", year: "2025" },
    { title: "Wake Up Dead Man", year: "2025" },
    { title: "Jay Kelly", year: "2025" },
    { title: "Before Sunrise", year: "1995" },
    { title: "Past Lives", year: "2023" },
    { title: "Phantom Thread", year: "2017" },
    { title: "Good Morning", year: "1959" },
    { title: "Godzilla", year: "1954" },
  ];

  return (
    <div>
      {/* small description */}
      <p className="mb-5 text-[13px] opacity-70">
        four favorites at the moment
      </p>

      {/* posters */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
        {films.map((f) => (
          <div key={f.title} className="w-[160px]">
            <div className="relative aspect-[3/4] w-[160px] overflow-hidden border border-[#2E3A59]/25 bg-white/30">
              <img
                src={f.src}
                alt={`${f.title} poster`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3">
              <div className="text-[13px] font-semibold leading-5">
                {f.title}
              </div>
              <div className="mt-1 text-[12px] opacity-60">{f.year}</div>
            </div>
          </div>
        ))}
      </div>

      {/* other list */}
      <div className="mt-8">
        <div className="text-xs tracking-widest opacity-70">other films</div>
        <ul className="mt-4 space-y-1 text-[12px] leading-5">
        {otherFilms.map((f) => (
            <li key={f.title} className="flex gap-3">
            <span className="opacity-60">-</span>
            <div className="flex items-baseline gap-2">
                <span className="opacity-90">{f.title}</span>
                <span className="text-[11px] opacity-50">{f.year}</span>
            </div>
            </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
