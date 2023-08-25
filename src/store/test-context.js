import React from "react";


const ThemeContext = React.createContext({
  theme: "dark",
  components: "blue"
});

export default ThemeContext;