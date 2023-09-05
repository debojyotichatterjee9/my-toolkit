import React from "react";
import { NextUIProvider } from "@nextui-org/react";

import Header from "./components/Functional/Header"
import RandomUserGenerator from "./components/Functional/RandomUserGenerator";
import RandomUserGeneratorv2 from "./components/Functional/RandomUserGeneratorv2";
function App() {
  return (
    <NextUIProvider>
      <main className="light text-foreground bg-background">
        <Header />
        <RandomUserGeneratorv2 />
      </main>
    </NextUIProvider>
  );
}

export default App;
