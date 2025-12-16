export default function VinylsShelf() {
  const albums = [
    { title: "Son of Spergy", artist: "Daniel Caesar", src: "/music/sos.jpg" },
    { title: "Blush", artist: "Kevin Abstract", src: "/music/blush.jpg" },
    { title: "The Art of Loving", artist: "Olivia Dean", src: "/music/olivia.jpg" },
    { title: "Rumours", artist: "Fleetwood Mac", src: "/music/fm.jpg" },
  ];

  const otherSongs = [
    { title: "who knows", year: "daniel caesar" },
    { title: "shiny penny", year: "oranje space" },
    { title: "right back", year: "brandon" },
    { title: "about you", year: "the 1975" },
    { title: "old dirt road", year: "john lennon" },
    { title: "the kiss of venus", year: "dominic fike & paul mccartney" },
    { title: "soft spot", year: "keshi" },
    { title: "geezer", year: "geezer" },
    { title: "peach", year: "kevin abstract" },
    { title: "silver springs", year: "fleetwood mac" },
    { title: "back to the old house", year: "the smiths" },
  ];

  return (
    <div>
      {/* small description */}
      <p className="mb-5 text-[13px] opacity-70">
        albums on repeat at the moment
      </p>

      {/* album covers */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
        {albums.map((a) => (
          <div key={a.title} className="w-[150px]">
            <div className="relative aspect-square w-[150px] overflow-hidden border border-[#2E3A59]/25 bg-white/30">
              <img
                src={a.src}
                alt={`${a.title} album cover`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3">
              <div className="text-[13px] font-semibold leading-5">
                {a.title}
              </div>
              <div className="mt-1 text-[12px] opacity-60">
                {a.artist}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="text-xs tracking-widest opacity-70">some specific songs</div>
        <ul className="mt-4 space-y-1 text-[12px] leading-5">
        {otherSongs.map((f) => (
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
