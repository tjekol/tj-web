import { LinkOverlay, Icon, LinkBox } from '@chakra-ui/react';
import { IconType } from 'react-icons';

function LinkIcon({
  link,
  label,
  color,
  icon,
}: {
  link: string;
  label?: string;
  color: string;
  icon: IconType;
}) {
  return (
    <LinkBox
      marginX='2.5'
      transition='.1s ease-out'
      _hover={{ transform: 'scale(1.30)' }}
    >
      <LinkOverlay href={link} aria-label={label} isExternal>
        <Icon as={icon} boxSize='7' color={color} />
      </LinkOverlay>
    </LinkBox>
  );
}

export default LinkIcon;
