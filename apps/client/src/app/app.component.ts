import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'techbir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    @Optional() @Inject(APP_BASE_HREF) baseHref: string
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.url);
    console.log(this.router.url);
    console.log(this.router.url);
    console.log(document.URL, '<BaseURL>');
  }
}
