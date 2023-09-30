import {
  Icon,
  Flex,
  Spacer,
  useColorModeValue,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import LanguageSwitcher from '@/components/language-switcher';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import useLanguage from '@/hooks/use-language';
import PageComponent from '@/components/page';
import { MdEmail } from 'react-icons/md';
import React from 'react';

function IndexPage() {
  const textColor = useColorModeValue('#404067', '#D3CDF9');
  const isNorwegian = useLanguage();

  return (
    <PageComponent
      header={isNorwegian ? '✨HEI DU✨' : '✨HI THERE✨'}
      desc={
        isNorwegian
          ? ' Mitt navn er Thea Jenny Kolnes. Jeg tar bachelor i Datateknologi💻 in Bergen at UIB.'
          : 'My name is Thea Jenny Kolnes. I am currently studying Computer Technology💻 in Bergen at UIB.'
      }
      nextPage='/about'
    >
      <Flex mt='2' direction='row'>
        <Spacer />
        <LinkBox
          transition='.1s ease-out'
          _hover={{ transform: 'scale(1.30)' }}
        >
          <LinkOverlay
            href='https://www.linkedin.com/in/thea-jenny-kolnes-a79821231/'
            aria-label='Linkedin-en min'
            isExternal
          >
            <Icon as={FaLinkedin} boxSize='7' color={textColor} />
          </LinkOverlay>
        </LinkBox>

        <LinkBox
          mr='5'
          ml='5'
          transition='.1s ease-out'
          _hover={{ transform: 'scale(1.30)' }}
        >
          <LinkOverlay
            href='https://github.com/tkol02'
            aria-label='Githubben min'
            isExternal
          >
            <Icon as={FaGithub} boxSize='7' color={textColor} />
          </LinkOverlay>
        </LinkBox>

        <LinkBox
          transition='.1s ease-out'
          _hover={{ transform: 'scale(1.30)' }}
        >
          <LinkOverlay
            href='mailto:thea.jenny02@gmail.com'
            aria-label='Send mail til meg'
            isExternal
          >
            <Icon as={MdEmail} boxSize='7' color={textColor} />
          </LinkOverlay>
        </LinkBox>
        <Spacer />
      </Flex>
      <LanguageSwitcher />
    </PageComponent>
  );
}

export default IndexPage;
