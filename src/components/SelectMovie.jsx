import React, {useState} from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const SelectMovie = () => {
  const [countries, setCountries] = useState([])
  console.log(countries)

  const handleChange = (event) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width='250px'  my={4} component="div" sx={{ display: 'inline' }}>
      <TextField
        label='Select Movie'
        select
        SelectProps={{
          multiple: true
        }}
        size='small'
        color='secondary'
        helperText='Please select a Movie'
        value={countries}
        onChange={handleChange}>
        <MenuItem value='10'>LoL</MenuItem>
        <MenuItem value='12'>LoR</MenuItem>
        <MenuItem value='11'>GoT</MenuItem>
      </TextField>
    </Box>
  )
}

export default SelectMovie

