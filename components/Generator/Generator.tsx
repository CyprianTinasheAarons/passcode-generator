'use client';

import { Text, Box, Center, Stack } from '@mantine/core';
import PasswordDisplay from './components/PasswordDisplay';
import CharacterSlider from './components/CharacterSlider';
import GenerateButton from './components/GenerateButton';
import PasswordOptions from './components/PasswordOptions';
import PasswordStrength from './components/PasswordStrength';
import usePasswordGenerator from '@/hooks/usePasswordGenerator';

export function Generator() {
  const {
    generatePassword,
    setLength,
    setIncludeUppercase,
    setIncludeLowercase,
    setIncludeNumbers,
    setIncludeSymbols,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    strength,
    length,
    password,
  } = usePasswordGenerator();
  return (
    <Stack justify="center" align="center" h="100vh" bg="#18171F">
      <Center>
        <Box c="white" w="1/2" m="lg">
          <Center mb="lg">
            <Text c="#817D92">Password Generator</Text>
          </Center>
          <PasswordDisplay password={password} />
          <Box bg="#24232C" p="lg" mt="lg">
            <CharacterSlider length={length} setLength={setLength} />
            <PasswordOptions
              includeUppercase={includeUppercase}
              setIncludeUppercase={setIncludeUppercase}
              includeLowercase={includeLowercase}
              setIncludeLowercase={setIncludeLowercase}
              includeNumbers={includeNumbers}
              setIncludeNumbers={setIncludeNumbers}
              includeSymbols={includeSymbols}
              setIncludeSymbols={setIncludeSymbols}
            />
            <PasswordStrength strength={strength} />
            <GenerateButton generatePassword={generatePassword} strength={strength} />
          </Box>
        </Box>
      </Center>
    </Stack>
  );
}
