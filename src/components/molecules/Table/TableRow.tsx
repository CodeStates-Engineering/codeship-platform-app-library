import { Children } from 'react';

import { useTableData } from '@contexts/TableContext';
import { cleanClassName } from '@utils';

import styles from './TableRow.module.scss';

export interface TableRowProps {
  className?: string;
  children?: React.ReactNode;
}

export const TableRow = ({ children, className }: TableRowProps) => {
  const {
    columnDataListState: [columnDataList],
  } = useTableData();

  const childrenArray = Children.toArray(children);

  return (
    <tr className={cleanClassName(`${styles.row} ${className}`)}>
      {columnDataList.map(({ originalIndex }) => childrenArray[originalIndex])}
    </tr>
  );
};
