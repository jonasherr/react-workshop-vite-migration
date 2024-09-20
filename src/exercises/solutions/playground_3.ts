type Solution_Book = {
  id: string;
  title: string;
  abstract: string;
};

// Aufgabe 1: Erstelle aus dem Type Book einen neuen Typ (BookWithNumberId), der gleich aufgebaut ist, wie der Book Typ.
// id sollte aber vom Typ number sein.
// Nutze dafür den Pick oder Omit Utility Type

type Solution_BookWithNumberId = Omit<Book, "id"> & { id: number };

// Aufgabe 2: Erstelle aus dem Type Book einen neuen Typ (OptionalBook), der die gleichen Eigenschaften wie Book hat,
// nur das alle Felder optional sind. Nutze dazu einen Utility Typ

type Solution_OptionalBook = Partial<Book>;

// Aufgabe 3: Erstelle einen Typ TodoPreview, welcher nur die Felder title und description beinhaltet
interface Solution_Todo {
  title: string;
  description: string;
  completed: boolean;
  date: Date;
  userId: string;
}

type Solution_TodoPreview = Pick<Todo, "title" | "description">;

// Aufgabe 3: Erstelle einen Typ TodoPreview2, welcher die Felder title, description, completed und date beinhaltet,

type Solution_TodoPreview2 = Omit<Todo, "userId">;

// Aufgabe 4: Erstelle einen Generic First<T> der ein Array T akzeptiert und den ersten Wert des Arrays als Typ zurückgibt.

type Solution_First<T extends any[]> = T[0];

type Solution_arr1 = ["a", "b", "c"];
type Solution_arr2 = [3, 2, 1];

type Solution_head1 = First<Solution_arr1>; // expected to be 'a'
type Solution_head2 = First<Solution_arr2>; // expected to be 3

// Aufgabe 5: Erstelle die JavaScript Array.concat Funktion im Typ System. Der Typ sollte zwei arguments aktzeptieren.
// Als Output wird ein neues Array erwartet, welches beide Input Arrays in einem Array kombiniert hat.

type Solution_Concat<T extends any[], K extends any[]> = [...T, ...K];

type Solution_Result = Concat<[1], [2]>; // expected to be [1, 2]
