import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Date = () => {

    const year=[];
    const month =[];
    const date =[];
    for(let i=2024;i>1990;i--){
        year.push(i);
    }
    for (let i=1; i<=12;i++){
        month.push(i);
    }
    for (let i=1; i<=31;i++){
        date.push(i);
    }

    const yearOptions=year?.map((v,k)=><MenuItem value={v} key={k}>{v}</MenuItem>) 
    const monthOption=month?.map((v,k)=><MenuItem value={v} key={k}>{v}</MenuItem>)   
    const dateOption=date?.map((v,k)=><MenuItem value={v} key={k}>{v}</MenuItem>)   
    const [inpDate, setInpDate] = React.useState('');
    const [inpMonth, setInpMonth] = React.useState('');
    const [inpYear, setInpYear] = React.useState('');

    const handleDate = (event) => {
      setInpDate(event.target.value);
    };
    const handleMonth = (event) => {
      setInpMonth(event.target.value);
    };
    const handleYear = (event) => {
      setInpYear(event.target.value);
    };
  
    return (
      <div>
       
        
        <FormControl sx={{ m: "0.4rem", minWidth: "8rem" ,height:"3.4rem" }} className='bg-slate-50'>
          <InputLabel className='' id="demo-simple-select-readonly-label" >Date</InputLabel>
          <Select
            
            
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={inpDate}
            
            label="date"
            onChange={handleDate}
            className='h-16 outline-none'
          >
            <MenuItem value="" className='h-16'>
              <em>None</em>
            </MenuItem>
           {dateOption}
          </Select>
        </FormControl>
        <FormControl sx={{ m: "0.4rem", minWidth: "8rem" ,height:"3.4rem"}} className='bg-white'>
          <InputLabel id="demo-simple-select-readonly-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={inpMonth}
            label="date"
            onChange={handleMonth}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
           {monthOption}
          </Select>
        </FormControl>
        <FormControl sx={{ m: "0.4rem", minWidth: "8rem ",height:"3.4rem"}} className='bg-white'>
          <InputLabel id="demo-simple-select-readonly-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={inpYear}
            label="year"
            onChange={handleYear}

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
           {yearOptions}
          </Select>
        </FormControl>
       
      </div>
    );
  }
export default Date;
