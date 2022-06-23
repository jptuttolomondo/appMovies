import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Card from './card'
import { getMoviesRecommended,filterByStar,cleanStates } from '../redux/actions'
import SearchBar from './searchBar'

export function Home() {
const dispatch = useDispatch()
var allmovies = useSelector((state) => state.movies)
const searchState=useSelector((state)=>state.search)
const filtered=useSelector((state)=>state.filterByStar)
useEffect(() => { dispatch(getMoviesRecommended()) }, [dispatch])

function handleFilterByStars(e) {
e.preventDefault();
if(e.target.value==="seleccionar") dispatch(getMoviesRecommended())
dispatch(filterByStar(e.target.value))
}

function handleClick(e){
e.preventDefault(); 
dispatch(getMoviesRecommended())
dispatch(cleanStates())
}

if(searchState.length>0) allmovies=searchState
else if(filtered.length>0) allmovies=filtered
    
return (
        <div> <h1>App  Movies </h1>
            <label >Filter by stars</label>
            <select onChange={e => handleFilterByStars(e)} >
                <option value='seleccionar' >seleccionar</option>
                <option value='1' >*</option>
                <option value='2' >**</option>
                <option value='3' >***</option>
                <option value='4' >****</option>
                <option value='5' >*****</option>
             </select>
            <p></p>
            <SearchBar />
            <button onClick={e=>handleClick(e)} ><div>Cargar videogames</div></button> 
            {
                <div > {allmovies?.map(e => {
                    return (
                        <div key={e.id}>
                            <Link to={'/Detail/' + e.id}>
                                <Card id={e.id} title={e.title} poster={e.poster}/>
                            </Link>
                        </div>
                    )
                })
                }
                    <p></p>
                </div>
            }
        </div>
)
}
