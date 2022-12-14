import React, { PropsWithChildren } from "react";
import styles from "../styles/Layout.module.scss";
import { Box, ChakraProvider, extendTheme, Flex, Grid, type ThemeConfig } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Oswald', sans-serif;`,
  },
  sizes: {
    heading: "3rem",
  },
  colors: {
    gray: {
      800: "#1c2230",
    },
  },
  styles: {
    global: {
      html: {
        fontSize: "16px",
      },
      h1: {
        marginTop: ".5rem",
        fontSize: "2.5rem",
        marginBottom: "1.5rem",
      },
      h2: {
        marginTop: ".5rem",
        fontSize: "1.75rem",
        marginBottom: "1.25rem",
      },
      h3: {
        marginTop: ".5rem",
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "1rem",
      },
      p: {
        fontSize: "1rem",
        marginBottom: "0.5rem",
      },
    },
  },
});

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" flexDir="column">
        <Navbar />
        <Box flex="1" className={styles.container}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default Layout;
