import { ITableFieldProps } from "./ITableFieldProps";
import styles from "./TableField.module.scss";

export function TableField<T>(props: ITableFieldProps<T>) {
  return <div className={styles.tableField}>{props.value as any}</div>;
}
