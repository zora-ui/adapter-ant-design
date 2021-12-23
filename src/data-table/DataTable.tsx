import { ReactNode, createRef } from 'react';

import { isNumeric } from '@zora/core/dist/basic';
import { DataTableStructuralComponent } from '@zora/core/dist/data-table';

import { TableColumnType, TableProps, Table } from 'antd';

import style from './style.scss';

function normalizeWidth(width?: number | string): string | undefined {
  return isNumeric(width) ? `${width}px` : (width as string | undefined);
}

function getOffsetHeight(
  el: HTMLElement | null,
  fallbackValue: number = 0,
): number {
  return el ? el.offsetHeight : fallbackValue;
}

function getPaginationEl(tableEl: HTMLDivElement): HTMLElement | undefined {
  return tableEl.getElementsByClassName('ant-table-pagination')[0] as
    | HTMLElement
    | undefined;
}

function calcTableBodyHeight(
  tableEl: HTMLDivElement,
  hidePagination: boolean,
): string {
  const paginationEl = getPaginationEl(tableEl);

  let paginationHeight: number = 0;

  if (hidePagination !== true && paginationEl) {
    const computedStyle = getComputedStyle(paginationEl);

    paginationHeight =
      getOffsetHeight(paginationEl) +
      parseFloat(computedStyle.marginTop) +
      parseFloat(computedStyle.marginBottom);
  }

  return `${
    getOffsetHeight(
      tableEl.getElementsByClassName('ant-spin-container')[0] as HTMLElement,
      300,
    ) -
    getOffsetHeight(
      tableEl.getElementsByClassName('ant-table-header')[0] as HTMLElement,
    ) -
    paginationHeight
  }px`;
}

export default class DataTable extends DataTableStructuralComponent {
  public readonly state = { tableBodyHeight: '300px' } as any;

  private readonly table = createRef<HTMLDivElement>();

  private resizeEventHandler!: any;

  private resolvePagination(): any {
    return this.props.hidePagination !== false
      ? {
          showSizeChanger: true,
          showQuickJumper: true,
          current: this.props.currentPage,
          pageSize: this.props.pageSize,
          pageSizeOptions: this.props.pageSizes,
          total: this.props.total,
          onChange: (page: number, pageSize: number) => {
            if (page !== this.props.currentPage) {
              this.props.onCurrentChange(page);
            } else if (pageSize !== this.props.pageSize) {
              this.props.onSizeChange(pageSize);
            }
          },
        }
      : false;
  }

  private resolveProps(): TableProps<Record<string, any>> {
    const props: TableProps<Record<string, any>> = {
      className: [
        this.getDescendantClassName('table'),
        style['ZoraDataTable-table'],
      ].join(' '),
      dataSource: this.props.dataSource,
      pagination: this.resolvePagination(),
      loading: this.props.loading,
      scroll: { y: this.state.tableBodyHeight },
      bordered: true,
      rowKey: this.props.rowKey || 'id',
    };

    const columns: TableColumnType<Record<string, any>>[] = [];

    let rowSelection = null as any;

    (this.props.columns || []).forEach((col) => {
      if (col.type === 'selection') {
        rowSelection = {
          type: 'checkbox',
          columnWidth: normalizeWidth(col.width!),
          fixed: col.fixed,
          onChange: (_, selection: Record<string, any>[]) =>
            this.props.onSelectionChange(selection),
        };
      } else {
        columns.push({
          title: col.title,
          align: col.align,
          ellipsis: col.ellipsis,
          render: (_, record, index) => {
            if (col.type === 'index') {
              return index + 1;
            }

            return col.render
              ? col.render(undefined, { row: record, column: col, index })
              : undefined;
          },
          fixed: col.fixed,
          width: normalizeWidth(col.width),
          dataIndex: col.key,
        });
      }
    });

    props.columns = columns;

    if (rowSelection) {
      props.rowSelection = rowSelection;
    }

    return props;
  }

  private calcTableBodyHeight(): void {
    const tableEl = this.table.current!;
    const paginationEl = getPaginationEl(tableEl);

    if (this.props.hidePagination !== true && !paginationEl) {
      setTimeout(() => this.calcTableBodyHeight(), 0);
    } else {
      this.setState({
        tableBodyHeight: calcTableBodyHeight(
          tableEl,
          this.props.hidePagination,
        ),
      });
    }
  }

  public render(): ReactNode {
    return (
      <div className={this.getComponentClassNames()}>
        <div className={this.getDescendantClassName('tableWrapper')}>
          <Table {...this.resolveProps()} ref={this.table} />
        </div>
      </div>
    );
  }

  public componentDidMount(): void {
    this.resizeEventHandler = () =>
      this.setState({ tableBodyHeight: '150px' }, () =>
        setTimeout(() => this.calcTableBodyHeight(), 0),
      );

    window.addEventListener('resize', this.resizeEventHandler, false);
    setTimeout(() => this.calcTableBodyHeight(), 0);
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.resizeEventHandler);
  }
}
