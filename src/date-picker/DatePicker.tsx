import moment from 'moment';
import { ReactNode } from 'react';
import { DatePickerProps, DatePicker as AntDatePicker } from 'antd';

import { resolveBooleanPropValue } from '@zoras/core/dist/basic';
import { DatePickerStructuralComponent } from '@zoras/core/dist/date-picker';

import { getComponentName, convertSize } from '../basic';

class DatePicker extends DatePickerStructuralComponent {
  private resolveProps(): DatePickerProps {
    const props: DatePickerProps = {
      className: this.getComponentClassNames(),
      name: this.props.name,
      value: this.props.value ? moment(this.props.value) : undefined,
      size: convertSize(this.props.size),
      disabled: resolveBooleanPropValue(this.props.disabled, false),
      placeholder: this.props.placeholder,
      allowClear: resolveBooleanPropValue(this.props.clearable, true),
      picker: 'date',
      format: this.props.format,
      inputReadOnly: resolveBooleanPropValue(this.props.inputtable, true),
      dropdownClassName: this.props.popupClassName,
      onChange: (date, dateString) =>
        this.props.onChange &&
        this.props.onChange(dateString, date && date.toDate()),
    };

    const { disableDate, showNow = true } = this.props.pickerOption || {};

    if (disableDate) {
      props.disabledDate = (date) => disableDate(date.toDate());
    }

    props.showToday = showNow;

    return props;
  }

  public render(): ReactNode {
    return <AntDatePicker {...this.resolveProps()} />;
  }
}

(DatePicker as any).displayName = getComponentName('datePicker');

export default DatePicker;
