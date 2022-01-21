import moment from 'moment';
import { ReactNode } from 'react';
import { DatePicker as AntDatePicker } from 'antd';

import { resolveBooleanPropValue } from '@zoras/core/dist/basic';
import { DateRangePickerStructuralComponent } from '@zoras/core/dist/date-range-picker';

import { getComponentName, convertSize } from '../basic';

class DateRangePicker extends DateRangePickerStructuralComponent {
  private resolveProps(): Record<string, any> {
    const props: Record<string, any> = {
      className: this.getComponentClassNames(),
      name: this.props.name,
      size: convertSize(this.props.size),
      disabled: resolveBooleanPropValue(this.props.disabled, false),
      placeholder: this.props.placeholder,
      allowClear: resolveBooleanPropValue(this.props.clearable, true),
      picker: 'date',
      format: this.props.format,
      inputReadOnly: resolveBooleanPropValue(this.props.inputtable, true),
      dropdownClassName: this.props.popupClassName,
      separator: this.props.separator || '-',
      onChange: (dates, dateStrings) =>
        this.props.onChange &&
        this.props.onChange(
          dateStrings,
          dates && dates.map((date) => date && date.toDate()),
        ),
    };

    const resolvedValue = this.props.value
      ? this.props.value.filter((v) => !!v)
      : [];

    props.value =
      resolvedValue.length === 2
        ? resolvedValue.map((v) => moment(v))
        : undefined;

    const { disableDate, showToday = false } = this.props.pickerOption || {};

    if (disableDate) {
      props.disabledDate = (date) => disableDate(date.toDate());
    }

    props.showToday = showToday;

    return props;
  }

  public render(): ReactNode {
    return <AntDatePicker.RangePicker {...this.resolveProps()} />;
  }
}

(DateRangePicker as any).displayName = getComponentName('dateRangePicker');

export default DateRangePicker;
