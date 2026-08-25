"use client";

import { useState } from "react";

export default function ProjectMediaSlider({ media = [] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % media.length);
  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);

  return (
    <div className="w-full mb-6">
      {/* Cross-fading Media Container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}
      >
        {media.map((src, i) => {
          const isVideo = src.toLowerCase().endsWith(".mp4");
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {isVideo ? (
                <video
                  src={src}
                  className="w-full h-full object-contain rounded"
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
              ) : (
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-contain rounded"
                />
              )}
            </div>
          );
        })}

        {/* Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous media"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-[rgba(0,0,0,0.5)]
                         hover:bg-[rgba(0,0,0,0.7)] text-3xl text-white w-12 h-12
                         rounded-full flex items-center justify-center transition z-20 cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next media"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-[rgba(0,0,0,0.5)]
                         hover:bg-[rgba(0,0,0,0.7)] text-3xl text-white w-12 h-12
                         rounded-full flex items-center justify-center transition z-20 cursor-pointer"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {media.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-2 w-full">
          {media.map((_, i) => {
            const total = media.length;
            const activeWidth = 40;
            const inactiveWidth = 60 / (total - 1);
            const widthPercent =
              i === index ? `${activeWidth}%` : `${inactiveWidth}%`;

            return (
              <span
                key={i}
                style={{ width: widthPercent }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "bg-black" : "bg-gray-400"
                }`}
                onClick={() => setIndex(i)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
