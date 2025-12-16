"use client";

import Shelf from "@/components/Shelf";
import type { MouseEvent } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    if (!topRef.current) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        // show button when header is NOT visible
        setShowScrollTop(!entry.isIntersecting);
      },
      {
        threshold: 0.2, // tweak if needed
      }
    );
  
    observer.observe(topRef.current);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SHELF", href: "#shelf" },
    { label: "RESUME", href: "/pdfs/resume.pdf" },
  ];

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [shelfTab, setShelfTab] = useState<"literature" | "films" | "vinyls">(
    "literature"
  );

  return (
    <main className="min-h-screen flex flex-col bg-[#F6F5F1] text-[#2E3A59]">

      {/* Top container */}
{/* Top container */}
      <div
        ref={topRef}
        className="mx-auto max-w-6xl px-6 py-6"
      >
        {/* Header */}
        <header className="flex items-center justify-between">
          {/* Name */}
          <h1 className="font-semibold tracking-wide">ALVYN&nbsp;KWON</h1>

          {/* Navigation */}
          <nav className="flex gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="underline underline-offset-4 decoration-[#4A5D82] hover:opacity-70"
                onClick={(event) => handleNavClick(event, item.href)}
                {...(item.label === "RESUME"
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

      {/* Hero image */}
      <section className="mt-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden">
            <Image
              src="/images/sunset.jpg"
              alt="Workspace"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>


        {/* Main content (2-column like Drew) */}
        <section className="mt-20 grid gap-16 md:grid-cols-2">
          {/* ABOUT ME */}
          <div id="about" className="scroll-mt-24">
            <div className="text-xs font-semibold tracking-widest opacity-80">
              ABOUT ME
            </div>
            {/* line under header - matches footer style */}
            <div className="mt-3 border-t border-[#2E3A59]/67" />

            <div className="mt-6 text-[13px] leading-6 opacity-90">
              <div className="mb-8">
                <div className="mb-3 text-xs tracking-widest opacity-70">
                  // NOW //
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                      cs @ georgia tech, ai and systems concentration
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                      working on maintaining and improving course critique 
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                      TA for CS 1301 - Python
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                      open for internships 2026 :)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="mb-3 text-xs tracking-widest opacity-70">
                  // PREVIOUSLY //
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                      {/* text column */}
                      <div>
                        <div>
                          swe intern @ samsung - ecommerce platform team
                        </div>

                        <div className="mt-1 text-xs opacity-60">
                          metrics dashboards · ci/cd infrastructure · ml anomaly detection
                        </div>
                      </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                      accelerating materials development research under Dr. Fung — conditional generation for material structures
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                      masterklass - local academy, assisted with internal web tooling and assessment workflows
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mb-3 text-xs tracking-widest opacity-70">
                  // INTERESTS //
                </div>
                <ul className="space-y-1">
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                      ml systems and infrastructure in production
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                    building internal tools with real users
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                    cloud infrastructure and orchestration
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                    data pipelines that support iteration
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="opacity-60">-</span>
                    <span>
                    LLMs and prompt engineering, genAI
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div id="projects" className="scroll-mt-24">
            <div className="text-xs font-semibold tracking-widest opacity-80">
              PROJECTS
            </div>
            {/* line under header - matches footer style */}
            <div className="mt-3 border-t border-[#2E3A59]/67" />

            <div className="mt-6 text-[13px] leading-6 opacity-90">
              <ul className="space-y-8">
                <li>
                <a
                  href="https://critique.gatech.edu/" // <-- replace with real URL
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-[#4A5D82] hover:opacity-70"
                >
                  course critique
                </a>
                  <div className="mt-2 text-xs opacity-70">
                  platform · course discovery + GPA data · under Student Gov Association
                  </div>
                  <div className="mt-4 border-t border-dashed border-[#2E3A59]/30" />
                </li>
                <li>
                  <a
                  href="https://www.magnidia.com/" // <-- replace with real URL
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-[#4A5D82] hover:opacity-70"
                  >
                    magnidia
                  </a>
                  <div className="mt-2 text-xs opacity-70">
                  event management site · full stack · web dev @ GT
                  </div>
                  <div className="mt-4 border-t border-dashed border-[#2E3A59]/30" />
                </li>
                <li>
                  <a
                  href="/pdfs/finalreport.pdf" // <-- replace with real URL
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-[#4A5D82] hover:opacity-70"
                  >
                    fake ecommerce review prediction model 
                  </a>
                  <div className="mt-2 text-xs opacity-70">
                  pytorch · scikit-learn · kaggle · machine learning
                  </div>
                  <div className="mt-4 border-t border-dashed border-[#2E3A59]/30" />
                </li>
                <li>
                  <a
                  href="https://github.com/AlvynK123/PhaseIV_4400" // <-- replace with real URL
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-[#4A5D82] hover:opacity-70"
                  >
                    airline management GUI
                  </a>
                  <div className="mt-2 text-xs opacity-70">
                  sql · next.js · database query · full stack
                  </div>
                  <div className="mt-4 border-t border-dashed border-[#2E3A59]/30" />
                </li>
                <li>
                  <a
                  href="https://sites.google.com/view/wrappify/home" // <-- replace with real URL
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-[#4A5D82] hover:opacity-70"
                  >
                    wrappify
                  </a>
                  <div className="mt-2 text-xs opacity-70">
                  django · postgresql · full stack · spotify api
                  </div>
                  <div className="mt-4 border-t border-dashed border-[#2E3A59]/30" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* placeholder anchors so nav doesn't feel broken yet */}
        <div id="shelf" className="scroll-mt-24" />
      </div>

      <Shelf />


      {/* Footer */}
      <footer className="flex-grow mt-32 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          {/* Divider line */}
          <div className="border-t border-[#2E3A59]/67" />

          {/* Footer content */}
          <div className="mt-4 flex items-center justify-between text-xs">
            {/* Left */}
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/alvynkwon"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 opacity-70 hover:opacity-100"
              >
                linkedin
              </a>
              <a
                href="https://github.com/AlvynK123"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 opacity-70 hover:opacity-100"
              >
                github
              </a>
            </div>

            {/* Right */}
            <p className="opacity-70">
              contact me at{" "}
              <a
                href="mailto:alvyn.kwon@gmail.com"
                className="underline underline-offset-4 hover:opacity-100"
              >
                alvyn.kwon@gmail.com
              </a>{" "}
              :)
            </p>
          </div>
        </div>
      </footer>
      <button
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="Scroll to top"
        className={[
          "fixed bottom-6 right-6 z-50",
          "h-12 w-12",
          "border border-[#2E3A59]/25",
          "bg-[#2E3A59]",
          "grid place-items-center",
          "cursor-pointer",
          "transition-opacity duration-300",
          showScrollTop
            ? "opacity-100"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Arrow — no image needed */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M12 5l-7 7m7-7l7 7M12 5v14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </main>
  );
}
