import React from "react";
//import cardFormat from'./card.module.css'
export default function Card({id,title,poster,primero}){
return(
<div>
   <div >
   {primero===true?
      <div key={id} title="Click para más detalles..">
         <div >{title}</div>
         <img src= {`https://image.tmdb.org/t/p/original/${poster}`} alt='' width="400px" height="400px" />
        </div>
    :
    <div key={id} title="Click para más detalles..">
    <div >{title}</div>
    <img src= {`https://image.tmdb.org/t/p/original/${poster}`} alt='' width="200px" height="200px" />
   </div>
    }
      
    </div>
</div>
 

)


}