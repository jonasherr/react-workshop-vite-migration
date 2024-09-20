import React, { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { useBooks } from "./domain/book/hooks";
import { ThemeContext } from "./domain/theme/ThemeContext";
import { Theme } from "./domain/theme/Theme";

function App() {
  const { books, state, error } = useBooks();
  const [primaryColor, setPrimaryColor] = useState("tomato");

  const theme: Theme = {
    primaryColor,
    setPrimaryColor,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <AppHeader />

        {state === "loading" && (
          <h2 className="text-meta m-top">Loading books...</h2>
        )}
        {state === "error" && <h2 className="error m-top">{error.message}</h2>}
        {state === "success" && <BookList books={books} />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

export const formatCurrency = (currency: string) =>
  Number(currency.replace(/[^0-9.-]+/g, ""));
