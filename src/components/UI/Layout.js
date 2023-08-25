import { Box } from "./Box.js";

export const Layout = ({ children }) => {
  return (
    <Box
      css={{
        maxW: "100%"
      }}
    >
      {children}
    </Box>
  )
}
