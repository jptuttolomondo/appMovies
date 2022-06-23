import React from "react";
import cardFormat from'./card.module.css'
export default function Card({id,title,poster,primero}){
return(
<div className={cardFormat.cards}>
   <div >
   {primero===true?
      <div key={id} className={cardFormat.containerCardFirst} title="Click para más detalles..">
         <div className={cardFormat.cardTitle}>{title}</div>
         <img src= {`https://image.tmdb.org/t/p/original/${poster}`} alt='' width="400px" height="400px" />
         <br></br>
        </div>
    :
    <div key={id} className={cardFormat.containerCard}title="Click para más detalles..">
    <div className={cardFormat.cardTitle}>{title}</div>
    <img src= {`https://image.tmdb.org/t/p/original/${poster}`} alt='' width="200px" height="200px" />
    <br></br>
   </div>
    }
      
    </div>
</div>
 

)


}