import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { pages } from "@/utils";

export type PageItem = { name: string; url: string };

type Props = {
  placeholder?: string;
  className?: string;
  /** Optional navigate handler. Defaults to window.location.href = url */
  onNavigate?: (url: string) => void;
};

export default function IconToSearch({
  placeholder = "Search...",
  className = "",
  onNavigate,
}: Props) {
  const [open, setOpen] = useState(false);
  console.log({open})
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PageItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

//   useEffect(() => {
//     if (open) {
//       // focus input when opened
//       inputRef.current?.focus();
//     } else {
//       setQuery("");
//       setResults([]);
//       setActiveIndex(-1);
//     }
//   }, [open]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setActiveIndex(-1);
      return;
    }

    const q = query.trim().toLowerCase();
    const matched = pages.filter((p) => p.name.toLowerCase().includes(q));
    setResults(matched);
    setActiveIndex(matched.length ? 0 : -1);
  }, [query, pages]);

  // close on click outside
//   useEffect(() => {
//     const onDocClick = (e: MouseEvent) => {
//       if (!containerRef.current) return;
//       if (!containerRef.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("click", onDocClick);
//     return () => document.removeEventListener("click", onDocClick);
//   }, []);

  const navigate = (url: string) => {
    if (onNavigate) return onNavigate(url);
    window.location.href = url;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((idx) => Math.min(idx + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((idx) => Math.max(idx - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < results.length) {
        navigate(results[activeIndex].url);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const highlight = (text: string, q: string) => {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + q.length);
    const after = text.slice(idx + q.length);
    return (
      <>
        {before}
        <mark className="bg-yellow-200 rounded-sm">{match}</mark>
        {after}
      </>
    );
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {!open ? (
        <button
          aria-label="Open search"
          onClick={() => setOpen(true)}
          className="p-1 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <Search className="w-5 h-5 cursor-pointer" />
        </button>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="w-64 border rounded-md px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
            {results.length > 0 && (
              <ul className="absolute z-50 mt-1 w-full max-h-52 overflow-auto bg-white border rounded-md shadow-lg">
                {results.map((r, i) => (
                  <li
                    key={r.url}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => navigate(r.url)}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between ${
                      i === activeIndex ? "bg-gray-100" : ""
                    }`}
                  >
                    <span className="text-sm text-black">{highlight(r.name, query)}</span>
                    <span className="text-xs text-gray-400">{r.url}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            aria-label="Close search"
            onClick={() => setOpen(false)}
            className="p-1 rounded-md hover:bg-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
