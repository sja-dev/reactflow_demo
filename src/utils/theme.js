import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#1C1C1C"
      },
    }),
  },
});

export default customTheme;