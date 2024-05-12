'use client';

import { Center, Text, Box } from '@mantine/core';
import classes from '../Generator.module.css';

const strengthLevels = {
  'Too Weak!': 1,
  Weak: 2,
  Medium: 3,
  Strong: 4,
  Undefined: 0,
};

const strengthColors = {
  'Too Weak!': '#FF5C58',
  Weak: '#FFC145',
  Medium: '#FFC145',
  Strong: '#A4FFAF',
  Undefined: 'transparent',
};

const PasswordStrength = ({ strength }: { strength: string }) => (
  <Center className={classes.centerBetween} mb="lg" bg="#18171F" p="sm" px="lg" inline>
    <Text tt="uppercase" size="sm" c="#817D92" fw="bold">
      Strength
    </Text>
    <Center inline>
      <Text
        tt="uppercase"
        mr="sm"
        fw="bold"
        size="md"
        c={strength === 'Undefined' ? 'transparent' : 'inherit'}
      >
        {strength}
      </Text>

      <Box style={{ display: 'flex', gap: '5px' }}>
        {Array.from({ length: 4 }, (_, i) => (
          <Box
            key={i}
            style={{
              width: '8px',
              height: '20px',
              border:
                i < strengthLevels[strength as keyof typeof strengthLevels]
                  ? `1px solid ${strengthColors[strength as keyof typeof strengthColors]}`
                  : '1px solid white',
              background:
                i < strengthLevels[strength as keyof typeof strengthLevels]
                  ? strengthColors[strength as keyof typeof strengthColors]
                  : 'transparent',
            }}
          />
        ))}
      </Box>
    </Center>
  </Center>
);

export default PasswordStrength;
