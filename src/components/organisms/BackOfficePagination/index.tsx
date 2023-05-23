import styles from './index.module.scss';
import { useComponentSelfState } from '../../../hooks';
import { Pagination, Selectbox } from '../../molecules';

import type { PaginationProps } from '../../molecules';

interface BackOfficePaginationProps
  extends Omit<PaginationProps, 'type' | 'displayedCount'> {
  onChangeItemsPerPage?: (itemsPerPage?: number) => void;
  itemPerPageOptions?: number[];
}

export const BackOfficePagination = ({
  itemsPerPage,
  onChangeItemsPerPage,
  itemPerPageOptions = [10, 20, 30, 40, 50],
  ...paginationProps
}: BackOfficePaginationProps) => {
  const [perPage, setPerPage] = useComponentSelfState(itemsPerPage);
  return (
    <div className={styles['back-office-pagination']}>
      <Pagination type="simple" {...paginationProps} itemsPerPage={perPage} />
      <Selectbox
        size="small"
        className={styles['back-office-per-page']}
        value={perPage}
        options={itemPerPageOptions.map((value) => ({
          label: `${value}개씩 보기`,
          value,
        }))}
        onChange={(option) => {
          const value = option?.value;
          onChangeItemsPerPage?.(value);
          setPerPage?.(value);
        }}
      />
    </div>
  );
};
