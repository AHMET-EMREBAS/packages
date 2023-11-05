import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import {
  LocalStoreService,
  ResourceService,
  TABLE_COLUMNS_TOKEN,
  TableColumn,
} from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'techbir-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
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
    @Optional()
    @Inject(TABLE_COLUMNS_TOKEN)
    public readonly tableColumns: TableColumn[]
  ) {}

  ngOnInit(): void {
    if (!this.tableColumns) {
      this.columns = ['id', 'name'];
      this.displayedColumns = [...this.columns];
    } else if (this.tableColumns) {
      this.columns = this.tableColumns.map((e) => e.name);
      this.displayedColumns = [...this.columns];
    }

    const dColumns = this.lss.get<TableColumn[]>('visibleColumns');
    if (dColumns) {
      this.visibleColumns = [...dColumns];
      this.displayedColumns = dColumns.map((e) => e.name);
    }
  }
  ngAfterViewInit(): void {
    console.log('table ngAfterViewInit');
  }
}
