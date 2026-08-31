import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <p className="text-sm font-semibold text-indigo-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">That route does not exist on this site.</p>
      <Link href="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
