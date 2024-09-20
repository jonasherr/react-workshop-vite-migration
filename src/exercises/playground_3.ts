type Book = {
  id: string;
  title: string;
  abstract: string;
};

// Aufgabe 1: Erstelle aus dem Type Book einen neuen Typ (BookWithNumberId), der gleich aufgebaut ist, wie der Book Typ.
// id sollte aber statt vom Typ string vom Typ number sein.
// Nutze dafür den Pick oder Omit Utility Type

type BookWithNumberId = Omit<Book, "id"> & { id: number };

// Aufgabe 2: Erstelle aus dem Type Book einen neuen Typ (OptionalBook), der die gleichen Eigenschaften wie Book hat,
// nur das alle Felder optional sind. Nutze dazu einen Utility Typ

type OptionalBook = Partial<Book>;

// Aufgabe 3: Erstelle einen Typ TodoPreview, welcher nur die Felder title und description beinhaltet
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  date: Date;
  userId: string;
}

type TodoPreview = Pick<Todo, "title" | "description">;

// Aufgabe 3: Erstelle einen Typ TodoPreview2, welcher die Felder title, description, completed und date beinhaltet,

// type LongTodoPreview = Omit<Todo, "userId">;
type LongTodoPreview = Pick<
  Todo,
  "title" | "description" | "completed" | "date"
>;

// Aufgabe 4: Erstelle einen Generic First<T> der ein Array T akzeptiert und den ersten Wert des Arrays als Typ zurückgibt.
type First<T extends any[]> = T[2];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [number, string, { id: number }];
type arr4 = [number];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>;
type head4 = First<arr4>;

// Aufgabe 5: Erstelle die JavaScript Array.concat Funktion im Typ System. Der Typ sollte zwei arguments aktzeptieren.
// Als Output wird ein neues Array erwartet, welches beide Input Arrays in einem Array kombiniert hat.

type Concat<Array1 extends any[], Array2 extends any[]> = [
  ...Array1,
  ...Array2,
];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
