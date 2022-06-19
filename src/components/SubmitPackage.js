import React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import FormInput from "./PackageFormInput";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const SubmitPackage = () =>  {
  
  
  const inputs = [
    {
      id: 1,
      name: "measurement_no",
      type: "text",
      placeholder: "Measurement No",
      label: "Measurement No",
      pattern: "^[0-9]$",
      required: true,
    },
    {
      id: 2,
      name: "volume",
      type: "text",
      placeholder: "Volume",
      label: "Volume",
      pattern: "[0-9]+(.[0-9]{1,2})?%?",
      required: true,
    },
    {
      id: 3,
      name: "height",
      type: "text",
      placeholder: "Height",
      label: "Height",
      pattern: "[0-9]+(.[0-9]{1,2})?%?",
      required: true,
    },
    {
      id: 4,
      name: "lenght",
      type: "text",
      placeholder: "Lenght",
      label: "Lenght",
      pattern: "[0-9]+(.[0-9]{1,2})?%?",
      required: true,
    },
    {
      id: 5,
      name: "width",
      type: "text",
      placeholder: "Width",
      label: "Width",
      pattern: "[0-9]+(.[0-9]{1,2})?%?",
      required: true,
    },
    {
      id: 6,
      name: "weight",
      type: "text",
      placeholder: "Weight",
      label: "Weight",
      pattern: "[0-9]+(.[0-9]{1,2})?%?",
      required: true,
    },
  ];

  const [values, setValues] = useState({
    measurement_no:'',
    volume: '',
    height: '',
    length: '',
    width: '',
    weight: '',
    
  });


  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(values);
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <br></br>
        <InputLabel id="demo-simple-select-label">Dim Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.dim_unit}
          label="dimention unit"
          onChange={onChange}
        >
          <MenuItem value={10}>KG</MenuItem>
          <MenuItem value={20}>LB</MenuItem>
        </Select>

        <InputLabel id="demo-simple-select-label">Length Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.dim_unit}
          label="dimention unit"
          onChange={onChange}
        >
          <MenuItem value={10}>CM</MenuItem>
          <MenuItem value={20}>INCH</MenuItem>
        </Select>
        <br/>
        <br/>
        <Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>
       
      </form>
    </div>
  );
};

export default SubmitPackage;