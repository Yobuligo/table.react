import { IPerson } from "../model/IPersons";

export const createPersons = (count: number): IPerson[] => {
  const persons: IPerson[] = [];
  for (let i = 0; i < count; i++) {
    persons.push({
      id: i.toString(),
      age: i,
      firstname: i.toString(),
      lastname: i.toString(),
    });
  }
  return persons;
};
