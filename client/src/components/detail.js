import React ,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import {Link} from'react-router-dom'
import { getDetail,cleanDetail} from "../redux/actions";
import detailFormat from'./detail.module.css'

export  function  Detail(){
const dispatch= useDispatch()
let {id} = useParams();
id=parseInt(id)
useEffect(()=>{
dispatch(cleanDetail())
dispatch(getDetail(id))
},[dispatch,id])
const myMovie= useSelector((state)=>state.detail)

function handleClick(e){
  dispatch(cleanDetail())
}

return(
<div className={detailFormat.detailBody}>
      <h1>Movie Details</h1> 
        <p></p>
         <div className={detailFormat.detailCard}>
        <Link to='/home'><button button onClick={e=>handleClick(e)} className={detailFormat.closeIcon} title="Volver a Home">X</button></Link> 
        {
           myMovie?
        <div >
        <div className={detailFormat.detailTitle}><h1>{myMovie.title}</h1> </div>
        <div className={detailFormat.detailTitle}> <h3>Popularity: {myMovie.popularity}</h3></div>
        <div className={detailFormat.detailTitle}> <h3>Vote Average: {myMovie.vote_average}</h3></div>
        <img src={myMovie.poster} alt='' width="300" height="300"></img>
        <div className={detailFormat.detailTitle}> <h4>Overview : {myMovie.overview}</h4></div>
        <div className={detailFormat.detailTitle}><h4>Movie Id: {myMovie.id}</h4></div>  
       <div> <br></br></div>   
        </div>
        : <p className= {detailFormat.loading}><h1>Loading..</h1></p>
    }
    </div> 
</div>
)
}
