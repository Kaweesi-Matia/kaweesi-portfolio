"use client";

import { motion, useReducedMotion } from "framer-motion";
import experience from "@/data/experience";

export default function Experience({ compact = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="divide-y divide-slate-200 border-y border-slate-200">
      {experience.map((item, index) => (
        <motion.li
          key={`${item.company}-${item.role}`}
          className="grid gap-3 py-8 first:pt-8 last:pb-8 sm:grid-cols-[minmax(12rem,16rem)_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.45,
            delay: reduceMotion ? 0 : index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {item.period}
            </p>
            <p className="mt-2 text-sm text-slate-500">{item.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {item.role}
              {item.company ? (
                <span className="font-medium text-slate-500">
                  {" "}
                  · {item.company}
                </span>
              ) : null}
            </h3>
            {!compact && item.bullets?.length > 0 && (
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
