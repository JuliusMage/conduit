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
    const knex = this.em.getConnection().getKnex();
    const rows = await knex('user as u')
      .leftJoin('article as a', 'u.id', 'a.author_id')
      .groupBy('u.id')
      .select('u.username')
      .select(knex.raw('COUNT(a.id) as articleCount'))
      .select(knex.raw('COALESCE(SUM(a.favorites_count),0) as favoritesCount'))
      .select(knex.raw('MIN(a.created_at) as firstArticleDate'))
      .orderBy('favoritesCount', 'desc');

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
