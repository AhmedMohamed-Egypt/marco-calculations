import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function InputText({label,labelEnd,disabled,value,onChange}){
    return (  <TextField
        label={label}
        
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25ch' }}
        disabled={disabled}
        value = {value}
        onChange = {onChange}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="end">{labelEnd}</InputAdornment>,
          },
        }}
      />)
}

export default InputText