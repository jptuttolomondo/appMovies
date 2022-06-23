import axios from 'axios' 

async function  getMoviesApi()  {
    try{
        const entrada= await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4f1be3c5746cb9e15474d060c9ae71cc')
        let salida= entrada.data.results.map(e=>{
        return {id:e.id,title:e.original_title,poster:e.poster_path,vote_average:e.vote_average}  })
       return salida
    }
  catch{alert('api connection error')}

}
export const getMoviesRecommended=()=>{
    return async (dispatch)=>{
try{
    const salida= await getMoviesApi()
    salida.map(e=>{ return {id:e.id,title:e.original_title,poster:e.poster_path,vote_average:e.vote_average} })
    return dispatch({type:'GETALLMOVIES',payload:salida})
    }
catch(error){console.log('api connection error')  }
}
}

export const getDetail=(id)=>{
    return async (dispatch)=>{
try{
        id=parseInt(id)
        const entrada= await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=4f1be3c5746cb9e15474d060c9ae71cc')
        let filtro= entrada.data.results.filter(e=>e.id===id )
        let salida = {
        id:filtro[0].id,
        title:filtro[0].title,
        poster:`https://image.tmdb.org/t/p/original/${filtro[0].poster_path}`,
        overview: filtro[0].overview,
        vote_average:filtro[0].vote_average,
        popularity:filtro[0].popularity,
        }
    return dispatch({type:'GETDETAIL',payload:salida})
    }
    catch(error){console.log('id not exist')}
}
}


export function cleanDetail(){
    return async function(dispatch){
        return dispatch({type:'CLEAN_DETAIL',payload:[]})
    }
}

export function cleanSearch(){
    return async function(dispatch){
        return dispatch({type:'CLEAN_SEARCH',payload:[]})
    }
}

export function cleanStates(){
    return async function(dispatch){
        return dispatch({type:'CLEAN_STATES',payload:[]})
    }
}

export function getNameMovie(name){
    return async function (dispatch){
try{
         const salida= await getMoviesApi()
        if(name){
                const foundMovie = salida.filter(p => p.title.toLowerCase().includes(name.toLowerCase()));
                if (foundMovie.length>0) return dispatch({type:'GET_NAME_MOVIE',payload:foundMovie})
                else  alert("This input isn't a movie name") 
                }
        else return dispatch({type:'GET_NAME_MOVIE',payload:salida})
}
catch{ alert('conection error')} 
    }
}

export function filterByStar(stars){
    return async  (dispatch)=>{
        let payload=[]
if(stars==='seleccionar')payload='seleccionar'
if(stars==='1') {payload[0]=0 
                  payload[1]=1.99}
if(stars==='2') {payload[0]=2
                  payload[1]=3.99}
if(stars==='3') {payload[0]=4
                payload[1]=5.99}
if(stars==='4') {payload[0]=6
                payload[1]=7.99}
if(stars==='5') {payload[0]=8
              payload[1]=10}
return dispatch({type:'FILTER_BY_STAR',payload})
    }
}