export interface Song {
  id: string;
  title: string;
  artist?: string;
  key?: string;
  createdAt: string;
  lastViewedAt?: string;
}

export const mockSongs: Song[] = [
  { id: "song-001", title: "I'm Yours", artist: "Jason Mraz", key: "B", createdAt: "2026-10-19T10:00:00Z", lastViewedAt: "2026-10-20T08:30:00Z" },
  { id: "song-002", title: "Riptide", artist: "Vance Joy", key: "Am", createdAt: "2026-10-18T10:00:00Z" },
  { id: "song-003", title: "Can't Help Falling in Love", artist: "Elvis Presley", key: "C", createdAt: "2026-10-17T10:00:00Z", lastViewedAt: "2026-10-18T19:00:00Z" },
  { id: "song-004", title: "Wonderwall", artist: "Oasis", key: "Em", createdAt: "2026-10-10T10:00:00Z", lastViewedAt: "2026-10-19T21:15:00Z" },
  { id: "song-005", title: "Perfect", artist: "Ed Sheeran", key: "G", createdAt: "2026-10-09T10:00:00Z", lastViewedAt: "2026-10-17T12:00:00Z" },
  { id: "song-006", title: "Somewhere Over the Rainbow", artist: "Israel Kamakawiwo'ole", key: "C", createdAt: "2026-10-05T10:00:00Z", lastViewedAt: "2026-10-15T09:45:00Z" },
  { id: "song-007", title: "Hey, Soul Sister", artist: "Train", key: "C", createdAt: "2026-10-02T10:00:00Z", lastViewedAt: "2026-10-12T17:20:00Z" },
  { id: "song-008", title: "Three Little Birds", artist: "Bob Marley", key: "A", createdAt: "2026-09-28T10:00:00Z" },
  { id: "song-009", title: "Let It Be", artist: "The Beatles", key: "C", createdAt: "2026-09-21T10:00:00Z" },
  { id: "song-010", title: "Better Together", artist: "Jack Johnson", key: "A", createdAt: "2026-09-14T10:00:00Z" },
  { id: "song-011", title: "Over the Rainbow (Instrumental)", createdAt: "2026-09-01T10:00:00Z" },
  { id: "song-012", title: "You Are My Sunshine", artist: "Traditional", key: "C", createdAt: "2026-08-20T10:00:00Z" },
];
