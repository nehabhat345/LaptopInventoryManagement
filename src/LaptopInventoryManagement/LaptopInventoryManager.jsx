import {useState} from 'react';
import './LaptopInventoryManager.css';
import { MAX_LAPTOP, DEPARTMENTS, SPARE_LAPTOPS, DEPARTMENT_NAMES, } from './constants/constants';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export const LaptopInventoryManager =()=> {
    const [isBorrow, setIsBorrow] = useState(false);
    const [isReturn, setIsReturn] = useState(false);
    const [count_A, setDepartmentCountA] = useState(DEPARTMENTS.A);
    const [count_B, setDepartmentCountB] = useState(DEPARTMENTS.B);
    const [count_C, setDepartmentCountC] = useState(DEPARTMENTS.C);
    const [department, setDepartment] = useState('Dept A');
    const [spareLaptopsCount, setSpareLaptopsCount] = useState(SPARE_LAPTOPS.count);
    const [value, setValue] = useState('Dept A');

    const handleChange = (event) => {
      setDepartment(event.target.value);
      setValue(event.target.value);
      borrowLaptop(event.target.value);
    };
      const borrowLaptop=(department)=>{
        setIsBorrow(true);
        if(department !== undefined){
        if(count_A === 0 && department === 'Dept A' && spareLaptopsCount !== 0){
            setSpareLaptopsCount(count_A - 1);
        }
        else if(count_A === 0 && department === 'Dept A' && spareLaptopsCount === 0){
            setDepartmentCountA(null);
        }
        else if(count_B === 0 && department === 'Dept B' && spareLaptopsCount !== 0){
            setSpareLaptopsCount(count_A - 1);
        }
        else if(count_B === 0 && department === 'Dept B' && spareLaptopsCount === 0){
            setDepartmentCountB(null);
        }
        if(count_C === 0 && department === 'Dept C' && spareLaptopsCount !== 0){
            setSpareLaptopsCount(count_A - 1);
        }
        else if(count_C === 0 && department === 'Dept C' && spareLaptopsCount === 0){
            setDepartmentCountC(null);
        }
        else if(count_A !== 0 && department === 'Dept A'){
          setDepartmentCountA(count_A - 1);
          const department_name = department.split(" ");
          let finalName = department_name[1];
          console.log(finalName + count_A);
          return finalName;
        }
        else if(count_B !== 0 && department === 'Dept B'){
          setDepartmentCountB(count_B - 1);
          const department_name = department.split(" ");
          let finalName = department_name[1];
          console.log(finalName + count_B);
          return finalName;
        }
        else if(count_C !== 0 && department === 'Dept C'){
          setDepartmentCountC(count_C - 1);
          const department_name = department.split(" ");
          let finalName = department_name[1];
          console.log(finalName + count_C);
          return finalName;
        }
      }
    }
      const returnLaptop=()=>{
        setIsReturn(true);
        if(department !== undefined){
           if(count_A >= 0 && count_A <= DEPARTMENTS.A && department === 'Dept A'){
            setDepartmentCountA(count_A + 1);
            const department_name = department.split(" ");
            let finalName = department_name[1];
            console.log(finalName + count_A);
            return finalName;
          }
          else if(count_B >= 0 && count_B <= DEPARTMENTS.B && department === 'Dept B'){
            setDepartmentCountB(count_B + 1);
            const department_name = department.split(" ");
            let finalName = department_name[1];
            console.log(finalName + count_B);
            return finalName;
          }
          else if(count_C >= 0 && count_C <= DEPARTMENTS.C && department === 'Dept C'){
            setDepartmentCountC(count_C + 1);
            const department_name = department.split(" ");
            let finalName = department_name[1];
            console.log(finalName + count_C);
            return finalName;
          }
      }
    }
      return (
          <>
          <h1>{`Remaining A Laptops:: ${count_A <= MAX_LAPTOP/Object.keys(DEPARTMENTS)?.length ? count_A:''}`}</h1>
          <h1>{`Remaining B Laptops:: ${count_B <= MAX_LAPTOP/Object.keys(DEPARTMENTS)?.length ? count_B: ''}`}</h1>
          <h1>{`Remaining C Laptops:: ${count_C <= MAX_LAPTOP/Object.keys(DEPARTMENTS)?.length ? count_C: ''}`}</h1>
        <button disabled={count_A === 0 || count_B === 0 || count_C === 0} className="blue" onClick={()=>borrowLaptop()}>
          {'Borrow Laptop'}
        </button>
       <button className="green" onClick={()=>returnLaptop()}>
          {'Return Laptop'}
        </button>
        {isBorrow || isReturn ? (<div>
        <FormControl sx={{minWidth: 220}}>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Department"
          onChange={handleChange}
        >
         {DEPARTMENT_NAMES?.map(option => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label ?? option.value}
            </MenuItem>
          );
      })}
        </Select>
      </FormControl>
      </div>) : ''}
       </>
      )
}