import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";
import { Heading, Flex } from "@chakra-ui/react";
import AuthDropdown from "./AuthDropdown";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Flex className={styles.navContent}>
        <Link href="/">
          <a>
            <Image src="/car-logo.png" alt="logo" width={150} height={50} />
            <Heading as="h4" size="lg" mb="0.5" pb={0} fontWeight="500">
              RD Car Blog
            </Heading>
          </a>
        </Link>
        <AuthDropdown />
      </Flex>
    </nav>
  );
};

export default Navbar;
