import { TableRow } from "../tableRow/TableRow";
import { ITableProps } from "./ITableProps";
import styles from "./Table.module.scss";

export function Table<T extends object>(props: ITableProps<T>) {
  const items = props.data.map((row, index) => (
    <TableRow key={index} data={row} />
  ));
  return <div className={styles.table}>{items}</div>;
}
