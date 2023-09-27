import { Box, SimpleGrid, IconButton, Flex, Spacer, Heading, useColorMode, useColorModeValue, LinkOverlay, LinkBox, Text } from "@chakra-ui/react"
import PageComponent from "@/components/page";
import { formBackgroundLight, formBackgroundDark, textColorLight, textColorDark } from "@/components/theme";

const AboutPage = () => {
  const formBackground = useColorModeValue(formBackgroundLight, formBackgroundDark);
  const textColor = useColorModeValue(textColorLight, textColorDark);
  return (
    <PageComponent
      header={"About me✍🏽"}
      desc={"I take a big interest in video editing📹, coding👩🏽‍💻 and art🎨."}
      prevPage={"/"}
    >
      <Flex>
        <Text mt='4' textAlign='center' color={textColor}>
          <b>Projects</b>
        </Text>
      </Flex>
      <SimpleGrid columns={1} spacingX='20px' spacingY='6px' m={4}>
        <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.1)' }}>
          <LinkOverlay href="/webkom">
            <Box rounded={5} bg={textColor}>
              <Text align='center' p='6px' color={formBackground}>Webkom💻</Text>
            </Box>
          </LinkOverlay>
        </LinkBox>
        <LinkBox transition=".1s ease-out" _hover={{ transform: 'scale(1.1)' }}>
          <LinkOverlay href="/test">
            <Box rounded={5} bg={textColor}>
              <Text align='center' fontStyle='italic' p='6px' color={formBackground}>Tester</Text>
            </Box>
          </LinkOverlay>
        </LinkBox>
      </SimpleGrid>
    </PageComponent>
  )
}

export default AboutPage