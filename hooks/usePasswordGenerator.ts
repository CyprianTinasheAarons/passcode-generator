import { useEffect } from 'react';
import { useInputState } from '@mantine/hooks';

const usePasswordGenerator = () => {
  const [password, setPassword] = useInputState('');
  const [length, setLength] = useInputState(10);
  const [strength, setStrength] = useInputState('Undefined');
  const [includeUppercase, setIncludeUppercase] = useInputState(true);
  const [includeLowercase, setIncludeLowercase] = useInputState(true);
  const [includeNumbers, setIncludeNumbers] = useInputState(true);
  const [includeSymbols, setIncludeSymbols] = useInputState(false);

  const generatePassword = () => {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=-[]{}|;:,.<>?';
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      setPassword('');
      return;
    }

    let validChars = '';
    if (includeLowercase) validChars += lowerLetters;
    if (includeUppercase) validChars += upperLetters;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i += 1) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    setPassword(generatedPassword);
  };

  const passwordStrength = () => {
    const count = [includeLowercase, includeUppercase, includeNumbers, includeSymbols].filter(
      Boolean
    ).length;

    if (length <= 3) {
      return 'Undefined';
    }
    if (length <= 8) {
      return 'Too Weak!';
    }

    const lengthFactor = length >= 12 ? 1 : 0;

    switch (count + lengthFactor) {
      case 0:
        return 'Undefined';
      case 1:
        return 'Too Weak!';
      case 2:
        return 'Weak';
      case 3:
        return 'Medium';
      case 4:
      case 5:
        return 'Strong';
      default:
        return 'Undefined';
    }
  };

  useEffect(() => {
    setStrength(passwordStrength());
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  return {
    password,
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
  };
};

export default usePasswordGenerator;
