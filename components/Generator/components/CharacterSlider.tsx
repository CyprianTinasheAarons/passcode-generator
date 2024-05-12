'use client';

import { Box, Slider, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import classes from '../Generator.module.css';

const CharacterSlider = ({
  length,
  setLength,
}: {
  length: number;
  setLength: (value: number) => void;
}) => {
  const { hovered: hoveredSlider, ref: refSlider } = useHover();
  return (
    <>
      <Box className={classes.centerBetween} mb="md">
        <Text size="xs">Character Length </Text>
        <Text size="lg" c="#a4ffaf" fw="bold">
          {length}
        </Text>
      </Box>
      <Box mb="md" ref={refSlider}>
        <Slider
          value={length}
          onChange={(value) => setLength(value)}
          min={0}
          max={20}
          step={1}
          label={null}
          color="#a4ffaf" // Base color for the slider track
          thumbChildren={<Text size="xl" />}
          radius="xs"
          styles={{
            track: {
              '--slider-track-bg': '#18171F',
            },
            thumb: hoveredSlider
              ? {
                  background: 'black',
                  border: '2px solid #a4ffaf',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  color: '#a4ffaf',
                }
              : {},
          }}
        />
      </Box>
    </>
  );
};

export default CharacterSlider;
