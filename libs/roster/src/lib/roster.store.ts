import { Injectable } from '@angular/core';
import { ComponentStore, OnStateInit, tapResponse } from '@ngrx/component-store';
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { RosterService } from './roster.service';
import { RosterEntry } from '@realworld/core/api-types';

export interface RosterState {
  roster: RosterEntry[];
}

@Injectable()
export class RosterStoreService extends ComponentStore<RosterState> implements OnStateInit {
  constructor(private readonly rosterService: RosterService) {
    super({ roster: [] });
  }

  ngrxOnStateInit() {
    this.loadRoster();
  }

  readonly roster$ = this.select((s) => s.roster);

  readonly loadRoster = this.effect<void>(
    pipe(
      switchMap(() =>
        this.rosterService.getRoster().pipe(
          tapResponse(
            (res) => this.patchState({ roster: res.roster }),
            (error) => console.error('Error loading roster', error),
          ),
        ),
      ),
    ),
  );
}
