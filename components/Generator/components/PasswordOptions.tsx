'use client';

import { Box, Checkbox } from '@mantine/core';

const PasswordOptions = ({
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}: {
  includeUppercase: boolean;
  setIncludeUppercase: (value: boolean) => void;
  includeLowercase: boolean;
  setIncludeLowercase: (value: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (value: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (value: boolean) => void;
}) => (
  <Box mb="md">
    <Checkbox
      checked={includeUppercase}
      onChange={(event) => setIncludeUppercase(event.currentTarget.checked)}
      label=" Include Uppercase Letters"
      color="#a4ffaf"
      radius="xs"
      iconColor="dark"
      mb="md"
      styles={{
        input: {
          background: includeUppercase ? '#a4ffaf' : 'transparent',
          border: includeUppercase ? 'none' : '2px solid white',
        },
      }}
    />
    <Checkbox
      checked={includeLowercase}
      onChange={(event) => setIncludeLowercase(event.currentTarget.checked)}
      label="Include Lowercase Letters"
      color="#a4ffaf"
      radius="xs"
      iconColor="dark"
      mb="md"
      styles={{
        input: {
          background: includeLowercase ? '#a4ffaf' : 'transparent',
          border: includeLowercase ? 'none' : '2px solid white',
        },
      }}
    />
    <Checkbox
      checked={includeNumbers}
      onChange={(event) => setIncludeNumbers(event.currentTarget.checked)}
      label="Include Numbers"
      color="#a4ffaf"
      radius="xs"
      iconColor="dark"
      mb="md"
      styles={{
        input: {
          background: includeNumbers ? '#a4ffaf' : 'transparent',
          border: includeNumbers ? 'none' : '2px solid white',
        },
      }}
    />
    <Checkbox
      checked={includeSymbols}
      onChange={(event) => setIncludeSymbols(event.currentTarget.checked)}
      label="Include Symbols"
      color="#a4ffaf"
      radius="xs"
      iconColor="dark"
      mb="md"
      styles={{
        input: {
          background: includeSymbols ? '#a4ffaf' : 'transparent',
          border: includeSymbols ? 'none' : '2px solid white',
        },
      }}
    />
  </Box>
);

export default PasswordOptions;
