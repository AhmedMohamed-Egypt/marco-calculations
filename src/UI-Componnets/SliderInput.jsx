import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes({disabled,value,onChange,color}) {
  return (
    <Box sx={{ width: 300 }}>
    
      <Slider sx={{ width: 300, color: '#f00' }}  disabled={disabled} color={color} onChange = {onChange}  value={value} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}