import { extendTheme} from "@chakra-ui/react";
import "@fontsource/biorhyme";
import "@fontsource/raleway";

const theme = extendTheme({
    fonts: {
        heading: "raleway",
        body: "raleway",
    },
    styles: {
        global: () => ({
          body: {
            color: 'default',
            bg: '#fcf5d9',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            flexGrow: 1
          },
        }),
      },
});

export default theme;
