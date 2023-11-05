import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import {
  MatPaginatorModule,
  MatPaginator,
  PageEvent,
} from '@angular/material/paginator';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import {
  LocalStoreService,
  ResourceService,
  TABLE_COLUMNS_TOKEN,
  TableColumn,
} from '../api';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'techbir-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  count$: Observable<number> = this.service.allCount$;
  data$: Observable<any> = this.service.filteredEntities$;

  columns!: string[];
  displayedColumns!: string[];

  visibleColumns!: TableColumn[];

  constructor(
    private readonly service: ResourceService<any>,
    private readonly lss: LocalStoreService,
    @Inject(TABLE_COLUMNS_TOKEN)
    public readonly tableColumns: TableColumn[]
  ) {}

  ngOnInit(): void {
    const dColumns = this.lss.get<TableColumn[]>('visibleColumns');
    this.columns = this.tableColumns.map((e) => e.name);
    if (dColumns) {
      this.visibleColumns = [...dColumns];
      this.displayedColumns = this.visibleColumns.map((e) => e.name);
    } else {
      this.visibleColumns = [...this.tableColumns];
      this.displayedColumns = [...this.columns];
    }


    this.columns.unshift('id')
    this.displayedColumns.unshift('id')
  }

  ngAfterViewInit(): void {}

  sortTable(sortEvent: any) {
    console.log(sortEvent);
  }

  pageTable(pageEvent: PageEvent) {

    console.log(pageEvent)
  }

}
