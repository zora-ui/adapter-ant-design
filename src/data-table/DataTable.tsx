import { ReactNode } from 'react';
import { DataTableStructuralComponent } from '@zora/core/dist/data-table';
import { Table, TableColumnType } from 'antd';

export default class DataTable extends DataTableStructuralComponent {
  private resolveColumns(): TableColumnType<Record<string, any>>[] {
    return (this.props.columns || []).map((col) => ({}));
  }

  public render(): ReactNode {
    const { className } = this.props;

    return (
      <div className={['DataTable', className].join(' ')}>
        <div className="DataTable-tableWrapper">
          <Table className="DataTable-table" columns={this.resolveColumns()} />
        </div>
      </div>
    );
  }
}
