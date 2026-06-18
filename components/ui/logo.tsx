import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="GuiMiranda.Tech">
      {/* Icon */}
      <svg
        className="h-8 w-8 fill-indigo-600"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 24a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
        <path d="M16 8a8 8 0 0 0-8 8h2a6 6 0 0 1 6-6V8z" />
        <circle cx="16" cy="16" r="3" />
      </svg>
      {/* Text Logo */}
      <span className="text-xl font-bold">
        <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
          GuiMiranda
        </span>
        <span className="text-gray-700">.Tech</span>
      </span>
    </Link>
  );
}

// Made with Bob
