import PageComponent from "@/components/page";
import { formBackgroundLight, formBackgroundDark, textColorLight, textColorDark } from "@/components/theme";
import { Box, LinkBox, LinkOverlay, useColorModeValue, Text, SimpleGrid } from "@chakra-ui/react";

const WebkomPage = () => {
    const formBackground = useColorModeValue(formBackgroundLight, formBackgroundDark);
    const textColor = useColorModeValue(textColorLight, textColorDark);
    return (
        <PageComponent
        header="Webkom💻"
        prevPage="/about"
        >
            <Text mb='5'>Webkom is a subgroup under the student organization (echo) under the Informatics Department at UIB.</Text>
            <Text>This subgroup keeps their websites up and running.</Text>
            <SimpleGrid columns={1} spacingY='6px' m={4} _hover={{textDecoration: 'underline', color: formBackground}}>
                <LinkBox>
                    <LinkOverlay href="https:echo.uib.no" >
                        <Box rounded={5} bg={textColor} >
                        <Text align='center' fontStyle='italic' p='6px' color={formBackground}  >https:echo.uib.no</Text>
                        </Box>
                    </LinkOverlay>
                </LinkBox>
            </SimpleGrid>
        </PageComponent>
  )
}

export default WebkomPage