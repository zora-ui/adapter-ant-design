import moment from 'moment';
import { ReactNode } from 'react';
import { DatePicker as AntDatePicker } from 'antd';

import { resolveBooleanPropValue } from '@zoras/core/dist/basic';
import { DateTimeRangePickerStructuralComponent } from '@zoras/core/dist/date-time-range-picker';

import { getComponentName, convertSize } from '../basic';

class DateTimeRangePicker extends DateTimeRangePickerStructuralComponent {
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
      showTime: true,
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

    const { disableDate, showNow = true } = this.props.pickerOption || {};

    if (disableDate) {
      props.disabledDate = (date) => disableDate(date.toDate());
    }

    props.showNow = showNow;

    return props;
  }

  public render(): ReactNode {
    return <AntDatePicker.RangePicker {...this.resolveProps()} />;
  }
}

(DateTimeRangePicker as any).displayName = getComponentName(
  'dateTimeRangePicker',
);

export default DateTimeRangePicker;
