import { ReactNode } from 'react';

import { isNumeric, isFunction } from '@zora/core/dist/basic';
import { DataTableStructuralComponent } from '@zora/core/dist/data-table';

import { Table, TableColumnType } from 'antd';

export default class DataTable extends DataTableStructuralComponent {
  private resolveColumns(): TableColumnType<Record<string, any>>[] {
    return (this.props.columns || []).map((col) => ({
      title: col.title,
      align: col.align,
      ellipsis: col.ellipsis,
      render: (_, record, index) =>
        col.render
          ? col.render(undefined, { row: record, column: col, index })
          : undefined,
      fixed: col.fixed,
      width: isNumeric(col.width) ? `${col.width}px` : col.width,
      dataIndex: col.key,
    }));
  }

  private resolvePagination(): any {
    return this.props.hidePagination !== false
      ? {
          showSizeChanger: true,
          showQuickJumper: true,
          current: this.props.currentPage,
          pageSize: this.props.pageSize,
          pageSizeOptions: this.props.pageSizes,
          total: this.props.total,
        }
      : false;
  }

  public render(): ReactNode {
    const { className } = this.props;

    return (
      <div className={['DataTable', className].join(' ')}>
        <div className="DataTable-tableWrapper">
          <Table
            className="DataTable-table"
            dataSource={this.props.dataSource}
            columns={this.resolveColumns()}
            pagination={this.resolvePagination()}
            loading={this.props.loading}
            scroll={{ y: '300px' }}
            bordered
            rowKey={this.props.rowKey || 'id'}
          />
        </div>
      </div>
    );
  }
}
