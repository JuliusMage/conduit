import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterStoreService } from './roster.store';
import { provideComponentStore } from '@ngrx/component-store';

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: [],
  providers: [provideComponentStore(RosterStoreService)],
  imports: [CommonModule],
  standalone: true,
})
export class RosterComponent implements OnInit {
  roster$ = this.store.roster$;

  constructor(private readonly store: RosterStoreService) {}

  ngOnInit(): void {
    // store initializes automatically
  }
}
