'use client';

import { createTheme } from '@mantine/core';
import { Slider, Checkbox } from '@mantine/core';

export const theme = createTheme({
  colors: {
    // Define custom colors
    dark: [
      '#24232C',
      '#24232C',
      '#24232C',
      '#24232C',
      '#24232C',
      '#24232C',
      '#24232C',
      '#24232C',
      '#24232C',
      '#24232C',
    ], // Primary dark color
    blue: [
      '#817D92',
      '#817D92',
      '#817D92',
      '#817D92',
      '#817D92',
      '#817D92',
      '#817D92',
      '#817D92',
      '#817D92',
      '#817D92',
    ], // Secondary color
    teal: [
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
      '#E6E5EA',
    ], // Tertiary color
    yellow: [
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
      '#FBCD65',
    ], // Highlight color
    green: [
      '#F6C758',
      '#F6C758',
      '#F6C758',
      '#F6C758',
      '#F6C758',
      '#F6C758',
      '#F6C758',
      '#F6C758',
      '#F6C758',
      '#F6C758',
    ], // Success color
    red: [
      '#F6444A',
      '#F6444A',
      '#F6444A',
      '#F6444A',
      '#F6444A',
      '#F6444A',
      '#F6444A',
      '#F6444A',
      '#F6444A',
      '#F6444A',
    ], // Error color
  },
  fontFamily: 'JetBrains Mono, monospace', // Set the global font family
  headings: {
    fontFamily: 'JetBrains Mono, monospace', // Set the font family for headings
    fontWeight: '700', // Bold font weight for headings
  },
  other: {
    bodyFontSize: 18, // Set the base font size for body text
  },
  cursorType: 'pointer',
  radius: {
    xs: '0',
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
  },
  components: {
    Slider: Slider.extend({
      styles: {
        thumb: {
          background: 'white',
          border: '0px solid #a4ffaf',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          color: '#a4ffaf',
        },
      },
    }),
  },
});
