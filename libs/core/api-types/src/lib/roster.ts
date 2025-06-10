export interface RosterEntry {
  username: string;
  articleCount: number;
  favoritesCount: number;
  firstArticleDate?: string | null;
}

export interface RosterResponse {
  roster: RosterEntry[];
}
