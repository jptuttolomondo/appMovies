import React ,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import {Link} from'react-router-dom'
import { getDetail,cleanDetail} from "../redux/actions";
//import detailFormat from'./detail.module.css'

export  function  Detail(){
const dispatch= useDispatch()
let {id} = useParams();
id=parseInt(id)
//console.log('id:::',id)
useEffect(()=>{
dispatch(cleanDetail())
dispatch(getDetail(id))
},[dispatch,id])
const myMovie= useSelector((state)=>state.detail)

return(
<div >
      <h1>Movie Details</h1> 
        <p></p>
         <div>
        <Link to='/home' ><button title="Volver a Home">X</button></Link> 
        {
           myMovie?
        <div>
        <div> <h1>Title: {myMovie.title}</h1></div>
        <div> <h3>Popularity: {myMovie.popularity}</h3></div>
        <div> <h3>Vote Average: {myMovie.vote_average}</h3></div>
        <img src={myMovie.poster} alt='' width="300" height="300"></img>
        <div> <h4>Overview : {myMovie.overview}</h4></div>
        <div><h4>Movie Id: {myMovie.id}</h4></div>     
        </div>
        : <p ><h1>Loading..</h1></p>
    }
    </div> 
</div>
)
}
