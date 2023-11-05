import { Component, Inject, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { delay, map } from 'rxjs/operators';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ENTITY_NAME_TOKEN, ResourceService } from '../../api';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from '../../skeleton/skeleton.component';

@Component({
  selector: 'techbir-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SkeletonComponent,
  ],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isCountLoading = true;
  readonly count$: Observable<number> = this.service.allCount$.pipe(
    delay(2000),
    map((data) => {
      console.log(data);
      this.isCountLoading = false;
      return data;
    })
  );

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(
    private readonly service: ResourceService<unknown>,
    @Inject(ENTITY_NAME_TOKEN)
    public readonly entityName: string
  ) {}
}
