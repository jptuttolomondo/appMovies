const initialState={
movies:[],
copiaMovies:[],
detail:[],
filterByStar:[],
search:[],
auxiliar:[],
}

export function Reducer(state=initialState,action){
switch(action.type){
case 'GETALLMOVIES': return{...state,movies:action.payload,copiaMovies:action.payload}
case 'GETDETAIL': return{...state,detail:action.payload}
case 'GET_NAME_MOVIE': return{...state,search:action.payload}
case 'FILTER_BY_STAR':  
const allmovies=state.copiaMovies
//console.log(allmovies)
//console.log(action.payload)
const movieFiltered=action.payload==='seleccionar'? allmovies:allmovies.filter(elem=>{
  if(elem.vote_average>=action.payload[0]&&elem.vote_average<action.payload[1])return true
    return undefined })
//console.log('filtrado',movieFiltered)
{if(movieFiltered.length<1){ alert("There isn't a movie whith this star/s category" )
                            window.location.replace('/home')}}
return {...state,filterByStar:movieFiltered}

case 'CLEAN_DETAIL': return{...state,detail:action.payload}
case 'CLEAN_SEARCH': return{...state,search:action.payload}
case 'CLEAN_STATES': return{...state,filterByStar:action.payload,
    search:action.payload,
    detail:action.payload,
    order:action.payload,
    auxiliar:action.payload}
default: return state
}
}


export default Reducer