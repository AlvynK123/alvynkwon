"use client";

import { useState } from "react";
import LiteratureShelf from "./shelf/LiteratureShelf";
import FilmsShelf from "./shelf/FilmsShelf";
import VinylsShelf from "./shelf/VinylsShelf";

type Tab = "literature" | "films" | "vinyls";

export default function Shelf() {
  const [tab, setTab] = useState<Tab>("literature");

  return (
    <section id="shelf" className="mt-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Tabs */}
        <div className="flex items-center gap-12 text-xs tracking-widest">
          <button
            type="button"
            onClick={() => setTab("literature")}
            className={
              tab === "literature"
                ? "cursor-pointer font-semibold opacity-90"
                : "cursor-pointer opacity-50 hover:opacity-75"
            }
          >
            LITERATURE
          </button>

          <button
            type="button"
            onClick={() => setTab("films")}
            className={
              tab === "films"
                ? "cursor-pointer font-semibold opacity-90"
                : "cursor-pointer opacity-50 hover:opacity-75"
            }
          >
            FILMS
          </button>

          <button
            type="button"
            onClick={() => setTab("vinyls")}
            className={
              tab === "vinyls"
                ? "cursor-pointer font-semibold opacity-90"
                : "cursor-pointer opacity-50 hover:opacity-75"
            }
          >
            VINYLS
          </button>
        </div>

        {/* Single divider line */}
        <div className="mt-1 border-t border-[#2E3A59]/40" />

        {/* Content */}
        <div className="mt-6">
          {tab === "literature" && <LiteratureShelf />}
          {tab === "films" && <FilmsShelf />}
          {tab === "vinyls" && <VinylsShelf />}
        </div>
      </div>
    </section>
  );
}
