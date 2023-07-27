import Header from "./components/UI/Header";
import { Layout } from "./components/UI/Layout";
import RandomUserGenerator from "./components/Functional/RandomUserGenerator";


import Random from "./components/Random";

function App() {
  return (
    <Layout>
      <Header />
      <Random />
      <RandomUserGenerator/>
    </Layout>
  );
}

export default App;
