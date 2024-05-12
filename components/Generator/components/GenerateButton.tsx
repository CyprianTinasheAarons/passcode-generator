'use client';

import { Box, Button, Center, Text, Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';

const GenerateButton = ({ generatePassword }: { generatePassword: () => void }) => {
  const { hovered, ref } = useHover();

  return (
    <Box ref={ref}>
      <Button
        onClick={generatePassword}
        color="#a4ffaf"
        radius="xs"
        fullWidth
        size="md"
        variant={hovered ? 'outline' : 'filled'}
      >
        <Center inline>
          <Text tt="uppercase" size="sm" c={hovered ? '#a4ffaf' : 'dark'}>
            Generate
          </Text>
          <Image
            src={hovered ? 'icon-arrow-right-hover.svg' : 'icon-arrow-right.svg'}
            width={12}
            height={12}
            ml="sm"
          />
        </Center>
      </Button>
    </Box>
  );
};

export default GenerateButton;
