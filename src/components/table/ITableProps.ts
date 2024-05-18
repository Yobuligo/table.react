import { Row } from "../types/Row";

export interface ITableProps<T extends Row> {
  data: T[];
}
