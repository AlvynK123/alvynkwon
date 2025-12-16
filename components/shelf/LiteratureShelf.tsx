export default function LiteratureShelf() {
    const books = [
      { title: "Pachinko", author: "Min Jin Lee", src: "/books/pachinko.png" },
      { title: "Dune", author: "Author Two", src: "/books/dune.png" },
      { title: "On Earth We're Briefly Gorgeous", author: "Ocean Vuong", src: "/books/on.jpg" },
      { title: "Mysterious Island", author: "Jules Verne", src: "/books/mi.png" },
    ];
  
    const otherBooks = [
        { title: "The Sympathizer", year: "Viet Thanh Nguyen" },
        { title: "The Joy Luck Club", year: "Amy Tan" },
        { title: "Brave New World", year: "Aldous Huxley" },
        { title: "Frankenstein", year: "Mary Shelley" },
        { title: "One Flew Over the Cuckoo's Nest", year: "Ken Kesey" },
        { title: "Crying in H Mart", year: "Michelle Zauner" },
        { title: "Code: The Hidden Language of Computer Hardware and Software", year: "Charles Petzold" },
        { title: "Alan Turing: The Enigma", year: "Andrew Hodges" },

      ];
    return (
      <div>

      {/* small description */}
      <p className="mb-5 text-[13px] opacity-70">
        some of my favorite books
      </p>
      
        {/* top row: covers */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
          {books.map((b) => (
            <div key={b.title} className="w-[150px]">
              <div className="relative aspect-[2/3] w-[150px] overflow-hidden border border-[#2E3A59]/25 bg-white/30">
                <img
                  src={b.src}
                  alt={`${b.title} cover`}
                  className="h-full w-full object-cover"
                />
              </div>
  
              <div className="mt-3">
                <div className="text-[13px] font-semibold leading-5">{b.title}</div>
                <div className="mt-1 text-[12px] opacity-60">{b.author}</div>
              </div>
            </div>
          ))}
        </div>

    {/* other list */}
      <div className="mt-3">
        <div className="text-xs tracking-widest opacity-70">other books</div>
        <ul className="mt-4 space-y-1 text-[12px] leading-5">
        {otherBooks.map((f) => (
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
  