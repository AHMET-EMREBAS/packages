import {
  AfterViewInit,
  Component,
  Inject,
  ViewChild,
  inject,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LocalStoreService, NAV_ITEMS_TOKEN, NavItem } from '../api';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'techbir-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class NavigationComponent implements AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);
  readonly title = inject(Title);
  @ViewChild('drawer') drawer!: MatDrawer;
  miniSidenav: boolean = this.lss.get('miniSidenav');

  isHandset = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => {
        this.isHandset = result.matches;
        return this.isHandset;
      }),
      shareReplay()
    );

  constructor(
    @Inject(NAV_ITEMS_TOKEN) public readonly navItems: NavItem[],
    private readonly lss: LocalStoreService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    const lastRoute = this.lss.get('lastRoute');

    if (lastRoute) {
      this.router.navigate([lastRoute], { relativeTo: this.route });
    }
  }

  async toggleMiniSidenav() {
    this.miniSidenav = !this.miniSidenav;
    this.lss.set('miniSidenav', this.miniSidenav);
    await this.drawer.close();
    await this.drawer.open();
  }

  canPersistRoute(fragmentPath: string) {
    return /[a-z-]{1,}/.test(fragmentPath);
  }
  navItemClickHandler(navItem: NavItem) {
    if (this.isHandset) this.drawer.close();

    if (this.canPersistRoute(navItem.route)) {
      this.lss.set('lastRoute', navItem.route);
    }
  }
}
