import { useState } from "react";
import { Table } from "./components/table/Table";
import { IPerson } from "./model/IPersons";

export const App: React.FC = () => {
  const [persons, setPerson] = useState<IPerson[]>([
    { id: "1", firstname: "Stacey", lastname: "Starfish", age: 28 },
    { id: "2", firstname: "Alex", lastname: "Ant", age: 30 },
    { id: "3", firstname: "Bertha", lastname: "Bear", age: 32 },
  ]);
  return <Table data={persons} />;
};
