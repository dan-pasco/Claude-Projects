"use client";

import Link from "next/link";
import { useState } from "react";
import { Library, Plus } from "lucide-react";
import { mockSongs } from "@/data/mockSongs";
import { getRecentlyAdded, getRecentlyViewed, searchSongs } from "@/lib/songs";
import SearchBar from "./SearchBar";
import SongSection from "./SongSection";

export default function HomeClient() {
  const [query, setQuery] = useState("");
  const isSearching = query.trim() !== "";
  const results = searchSongs(query, mockSongs);

  return (
    <div className="space-y-10">
      <section className="space-y-5 py-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-500">
          Your personal ukulele songbook
        </p>
        <h1 className="text-4xl font-bold text-forest-900 sm:text-5xl">Your songs. Your sound.</h1>
        <p className="text-lg text-ink/70">Find a song, pick up your uke, and play.</p>
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/add-song"
            className="flex items-center gap-2 rounded-full bg-forest-800 px-5 py-2.5 font-semibold text-cream hover:bg-forest-700"
          >
            <Plus aria-hidden className="h-4 w-4" /> Add a song
          </Link>
          <Link
            href="/library"
            className="flex items-center gap-2 rounded-full border border-forest-800 px-5 py-2.5 font-semibold text-forest-800 hover:bg-forest-50"
          >
            <Library aria-hidden className="h-4 w-4" /> My library
          </Link>
        </div>
      </section>

      {isSearching ? (
        <div aria-live="polite">
          <SongSection
            title={`Results for “${query.trim()}”`}
            songs={results}
            emptyMessage="No songs match your search. Try a different title or artist."
          />
        </div>
      ) : (
        <>
          <SongSection
            title="Recently added"
            songs={getRecentlyAdded(mockSongs)}
            viewAllHref="/library"
            emptyMessage="No songs yet. Add your first song to get started."
          />
          <SongSection
            title="Recently viewed"
            songs={getRecentlyViewed(mockSongs)}
            viewAllHref="/library"
            emptyMessage="Songs you open will show up here."
          />
        </>
      )}
    </div>
  );
}
