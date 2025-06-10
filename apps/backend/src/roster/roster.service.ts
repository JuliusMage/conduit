import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';

export interface RosterStats {
  username: string;
  articleCount: number;
  favoritesCount: number;
  firstArticleDate?: Date | null;
}

export interface RosterRO {
  roster: RosterStats[];
}

@Injectable()
export class RosterService {
  constructor(private readonly em: EntityManager) {}

  async findAll(): Promise<RosterRO> {
    const rows = await this.em.getConnection().execute(`
  SELECT u.username,
         COUNT(a.id) AS articleCount,
         COALESCE(SUM(a.favorites_count), 0) AS favoritesCount,
         MIN(a.created_at) AS firstArticleDate
    FROM user u
    LEFT JOIN article a ON u.id = a.author_id
GROUP BY u.id
ORDER BY favoritesCount DESC
`);

    return {
      roster: rows.map((r: any) => ({
        username: r.username,
        articleCount: Number(r.articleCount) || 0,
        favoritesCount: Number(r.favoritesCount) || 0,
        firstArticleDate: r.firstArticleDate ? new Date(r.firstArticleDate) : null,
      })),
    };
  }
}
