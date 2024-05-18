import { TableField } from "../tableField/TableField";
import { ITableRowProps } from "./ITableRowProps";
import styles from "./TableRow.module.scss";

export function TableRow<T extends object>(props: ITableRowProps<T>) {
  const items = Object.keys(props.data).map((key, index) => (
    <TableField key={index} value={(props.data as any)[key]} />
  ));

  return <div className={styles.tableRow}>{items}</div>;
}
