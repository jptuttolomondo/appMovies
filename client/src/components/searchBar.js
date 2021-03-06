import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanSearch,getNameMovie} from "../redux/actions";
import searchBarStyle from'./searchBar.module.css'
export default function SearchBar(){
const dispatch=useDispatch()
const [name,setName]=useState("")
useEffect(()=>{ dispatch(cleanSearch()) },[dispatch])

function handleInputChange(e){
e.preventDefault()
setName(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameMovie(name))
 }
return (
<div className={searchBarStyle.bloque}>
<label  className={searchBarStyle.letra} >Find movies by name</label>
<input type='text'
placeholder='find a movie...' 
onChange={(e)=>handleInputChange(e)}  className={searchBarStyle.inputSearch} />
<button type='submit' onClick={(e)=>handleSubmit(e)}  className={searchBarStyle.buttonSearch}>Find! </button>
</div>
)
}