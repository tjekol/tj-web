import {
  Box,
  SimpleGrid,
  IconButton,
  Flex,
  Spacer,
  Heading,
  useColorMode,
  useColorModeValue,
  LinkOverlay,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import PageComponent from "@/components/page";

const TestPage = () => {
  return (
    <PageComponent header={"Tester"} desc={"This is a testing page"}>
      <Flex>
        <LinkBox>
          <LinkOverlay href="/">
            <IconButton
              width="15"
              aria-label="previous page"
              icon={<HiOutlineArrowSmLeft />}
            />
          </LinkOverlay>
        </LinkBox>
        <Spacer />
      </Flex>
    </PageComponent>
  );
};

export default TestPage;
