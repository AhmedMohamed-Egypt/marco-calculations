import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { UseMacroContext } from '../Context/MacroContext';

function SelectBox() {
  
   const {dietType,getItem} = UseMacroContext()
   const changeHandler = (e)=>{  
    const itemSelect = e.target.value
    const findItem = dietType.filter((item)=>item.type===itemSelect)
    getItem(...findItem)
   }
  
  return (
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <TextField
      id="outlined-select-currency"
      select
      label="Select"
      defaultValue=""
      onChange={(e)=>changeHandler(e)}
      
    >
      {dietType.map((item) => (
        <MenuItem key={item.id} value={item.type}>
          {item.type}
        </MenuItem>
      ))}
   
    </TextField>
  
 
  </Box>
  );
}

export default SelectBox;
