import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import Header from "./components/Functional/Header"
import RandomUserGenerator from "./components/Functional/RandomUserGenerator";
function App() {
  return (
    <NextUIProvider>
      <main className="light text-foreground bg-background">
        <Header />
        <RandomUserGenerator />
      </main>
    </NextUIProvider>
  );
}

export default App;
