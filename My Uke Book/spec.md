# my Uke Book: Landing Page Spec

## Objective
Build the first responsive landing page for a personal ukulele songbook web app named **my Uke Book**. The goal is a stable front end with reusable components, so a database and song-generation features can be connected later without rebuilding the interface.

## Working rules
- Keep responses short and concise. No fluff, direct to the point.
- Look up docs with web search or the Context7 MCP. The installed Next.js has breaking changes, so read `node_modules/next/dist/docs/` before writing Next.js code (see `AGENTS.md`).

## Status
Landing page, placeholder routes and mock data are built, and `npm run build` passes. Remaining work is under *Next steps*.

**Front end only.** No API endpoints, database clients, login screens, environment secrets, or external integrations yet.

## Technology
| Component | Technology | Purpose |
|---|---|---|
| Framework | Next.js (App Router) | Page structure and routing |
| Language | TypeScript | Type-safe components and song data |
| Styling | Tailwind CSS | Responsive design |
| Icons | Lucide React | Search, music, library and navigation icons |
| Data | Local mock data | Populate the page without connections |
| State | React 19 `useState` | Search input and local UI interactions |

## Landing page layout
1. **Header**: music icon, "my Uke Book" title (links home), "My library" and "Add a song" navigation.
2. **Hero**: small label "Your personal ukulele songbook", heading "Your songs. Your sound.", tagline "Find a song, pick up your uke, and play."
3. **Search bar**: "Search songs or artists..." with a clear (X) button.
4. **Actions**: "Add a song" and "My library" buttons.
5. **Recently added**: newest 5 songs, with a "View all →" link to `/library`.
6. **Recently viewed**: last 5 distinct viewed songs, with a "View all →" link to `/library`.

## Functional requirements

### Search
- Matches song title or artist.
- Filters as the user types.
- Case-insensitive; leading and trailing spaces are trimmed.
- While searching, results replace the two "recent" sections.
- Results show a heading with the trimmed query and use the same card grid.
- Clear empty state when nothing matches.
- Clear-search control resets the search.

### Recently added
- Latest 5 songs sorted by `createdAt` descending.
- Each card shows title, artist ("Unknown artist" if missing) and, if present, a "Key: X" badge.
- Clicking a card opens `/songs/[id]`.

### Recently viewed
- Last 5 distinct songs (by `id`) that have a `lastViewedAt`, sorted descending.
- History comes from mock data only. Opening a song does not update it yet.
- Clicking a card opens `/songs/[id]`.
- Friendly empty state when there is no viewing history.

### Navigation and routes
| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/library` | Placeholder page that lists all mock songs |
| `/add-song` | Placeholder upload page |
| `/songs/[id]` | Placeholder song-detail page; unknown ids show a "Song not found" message |

No real upload, persistence, or login is implemented. Nothing should imply a successful save or upload.

## Data model
Defined in `src/data/mockSongs.ts`. This is the shape a future database will return.

```ts
export interface Song {
  id: string;
  title: string;
  artist?: string;
  key?: string;
  createdAt: string;      // ISO timestamp
  lastViewedAt?: string;  // ISO timestamp
}
```

The mock data holds at least 10 songs so search and sorting can be tested properly. At least two songs have no `artist` or `key`, and at least three have no `lastViewedAt`, so every optional field and empty state is exercised.

## Responsive design
- Mobile-first layout that adapts to phones, tablets and desktops.
- Centered container, max width about 1200px on desktop.
- Song cards in a grid: 1 column on mobile, 2 on tablet, 3 on desktop.
- Breakpoints: Tailwind `sm` (tablet) and `lg` (desktop).
- Accessible buttons, semantic headings, keyboard support and visible focus indicators.
- Focus indicators must stay visible on both cream and dark-green backgrounds (e.g. the header).

## Visual direction
- Deep forest-green primary colour, soft cream backgrounds, restrained sage accents.
- Readable typography, rounded song cards, simple music icons.
- Clean rather than overly decorative.

## Constraints
- No authentication or login page.
- No database, API, AI integration or network-dependent data fetching.
- No environment variables or external service configuration.
- Keep components reusable and the code easy to extend.

## Code structure
```
src/
  app/            routes (page.tsx, library, add-song, songs/[id])
  components/     Header, SearchBar, SongCard, SongSection, HomeClient, PlaceholderPage
  data/           mockSongs.ts
  lib/            songs.ts (search and sort helpers)
```

## Definition of done
- The app runs locally with `npm run dev` and `npm run build` succeeds.
- All landing-page interactions work with mock data.
- Placeholder navigation works.
- The interface is usable at mobile, tablet and desktop sizes.

## Next steps
1. Add automated tests for the `src/lib/songs.ts` helpers (search, recently added, recently viewed) and a lint script.
2. Implement the song-detail view and record views so "Recently viewed" updates.
3. Add the upload form and chord-generation workflow.
4. Introduce the database and username-based access (this lifts the no-login constraint).
