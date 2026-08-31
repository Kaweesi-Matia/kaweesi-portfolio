"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectMediaSlider({ media = [] }) {
  const [index, setIndex] = useState(0);
  if (!media.length) return null;

  const next = () => setIndex((i) => (i + 1) % media.length);
  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);

  return (
    <div className="mb-10 w-full">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {media.map((src, i) => {
            const isVideo = src.toLowerCase().endsWith(".mp4");
            return (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  i === index ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                {isVideo ? (
                  <video
                    src={src}
                    className="h-full w-full object-contain"
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="h-full w-full object-contain object-top"
                  />
                )}
              </div>
            );
          })}
        </div>

        {media.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-900/70 text-white transition hover:bg-slate-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-slate-900/70 text-white transition hover:bg-slate-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {media.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to screenshot ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-indigo-600" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
