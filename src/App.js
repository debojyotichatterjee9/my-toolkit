import React from "react";
import Header from "./components/Functional/Header";
import { Layout } from "./components/UI/Layout";
import RandomUserGenerator from "./components/Functional/RandomUserGenerator";
import RandomUserGeneratorv2 from "./components/Functional/RandomUserGeneratorv2";
import Random from "./components/Random";
import CustomModal from "./components/UI/Modal";
import ThemeContext from "./store/test-context";

function App() {
  return (
    <ThemeContext.Provider value={{
      theme: "dark",
      components: "blue"
    }}>
      {/* <Layout> */}
        <Header />
        {/* <CustomModal /> */}
        {/* <RandomUserGenerator /> */}
        {/* <RandomUserGeneratorv2 /> */}
      {/* </Layout> */}
    </ThemeContext.Provider>
  );
}

export default App;
