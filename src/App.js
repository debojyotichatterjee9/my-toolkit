import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Functional/Header"
function App() {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <Header />
      </main>
    </NextUIProvider>
  );
}

export default App;
