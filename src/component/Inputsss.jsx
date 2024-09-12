import { Input ,Button} from '@material-tailwind/react'
import { Form, useFormik } from 'formik'

import React, { useContext, useState } from 'react'

import Tabless from './Tabless'
import { Link } from 'react-router-dom'
import { contextt } from '../App'

function Inputsss() {
    const{ num,setnum,data,setdata}=useContext(contextt)
    // const [num,setnum]=useState(0)
    // const [data,setdata]=useState([])

    const{values,handleChange,handleSubmit}=useFormik({
        initialValues:{
            name:"",
            unsity:"",
            rating:""

        },
    onSubmit:()=>{
        setdata([...data,values])
       

    }

    })
   
    console.log(data);
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} name='name' value={values.name} label='name'></Input>
        <Input onChange={handleChange} name='unsity' value={values.unsity} label='university'></Input>
        <Input onChange={handleChange} name='rating' value={values.rating} label='rating'></Input>

{/* <div>
    <h1>rating</h1>
    <Button onClick={()=>{
        setnum(1)
    }} style={{backgroundColor:num>=1?"red":"blue"}}>*</Button>
    <Button onClick={()=>{
        setnum(2)
    }}  style={{backgroundColor:num>=2?"red":"blue"}}>*</Button>
    <Button onClick={()=>{
        setnum(3)
    }}  style={{backgroundColor:num>=3?"red":"blue"}}>*</Button> 
    <Button onClick={()=>{
        setnum(4)
    }}  style={{backgroundColor:num>=4?"red":"blue"}}>*</Button> 
    <Button onClick={()=>{
        setnum(5)
    }}  style={{backgroundColor:num>=5?"red":"blue"}}>*</Button>
  
</div> */}
<Button onClick={()=>{

}} type='submit'>
    submit
</Button>


        </form>

  
        {/* <div>
        <Tabless datas={data}/>
        </div> */}
       
    <Link to={"/table"}> deded</Link>
    </div>
  )
}

export default Inputsss