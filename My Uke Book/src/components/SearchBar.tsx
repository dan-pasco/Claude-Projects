import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div role="search" className="relative mx-auto w-full max-w-xl">
      <label htmlFor="song-search" className="sr-only">
        Search songs or artists
      </label>
      <Search
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage-500"
      />
      <input
        id="song-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search songs or artists..."
        className="w-full rounded-full border border-sage-300 bg-white py-3 pl-12 pr-12 text-base shadow-sm placeholder:text-sage-500"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-forest-700 hover:bg-sage-100"
        >
          <X aria-hidden className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
