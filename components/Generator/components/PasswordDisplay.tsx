'use client';

import React from 'react';
import { Center, TextInput, CopyButton, Button, Text, Box, Image } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import classes from '../Generator.module.css';

const PasswordDisplay = ({ password }: { password: string }) => {
  const { hovered: hoveredCopy, ref: refCopy } = useHover();
  const matches = useMediaQuery('(max-width: 56.25em)');

  return (
    <Center bg="#24232C" px="xs" inline ref={refCopy}>
      <TextInput
        styles={{ input: { color: 'white' } }}
        variant="transparent"
        radius="xs"
        placeholder="P4$5W0rD!"
        size={matches ? 'md' : 'xl'}
        value={password}
        readOnly
        fw="bold"
      />

      <CopyButton value={password}>
        {({ copied, copy }) => (
          <Button
            onClick={copy}
            variant="transparent"
            className={classes.copyButton}
            px="0"
          >
            <Text size="xs" tt="uppercase" c={copied ? '#a4ffaf' : 'transparent'} pr="xs">
              Copied
            </Text>
            <Box>
              <Image
                src={
                  hoveredCopy && password.length === 0 ? '/icon-copy-hover.svg' : '/icon-copy.svg'
                }
                alt="Copy Icon"
                width={matches ? 16 : 20}
                height={matches ? 16 : 20}
              />
            </Box>
          </Button>
        )}
      </CopyButton>
    </Center>
  );
};

export default PasswordDisplay;
