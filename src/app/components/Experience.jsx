import experience from "@/data/experience";

export default function Experience({ compact = false }) {
  return (
    <ol className="relative space-y-0 border-l border-slate-200 pl-8">
      {experience.map((item) => (
        <li key={item.company} className="relative pb-12 last:pb-0">
          <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-indigo-600 shadow-sm" />
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {item.location}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {item.role}
            <span className="font-medium text-slate-500"> · {item.company}</span>
          </h3>
          {!compact && (
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.summary}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
