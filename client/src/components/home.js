import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Card from './card'
import { getMoviesRecommended, filterByStar, cleanStates } from '../redux/actions'
import SearchBar from './searchBar'
import homeStyles from './home.module.css'

export function Home() {
    const dispatch = useDispatch()
    var allmovies = useSelector((state) => state.movies)
    const searchState = useSelector((state) => state.search)
    const filtered = useSelector((state) => state.filterByStar)
    useEffect(() => { dispatch(getMoviesRecommended()) }, [dispatch])

    function handleFilterByStars(e) {
        e.preventDefault();
        if (e.target.value === "seleccionar") dispatch(getMoviesRecommended())
        dispatch(filterByStar(e.target.value))
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(getMoviesRecommended())
        dispatch(cleanStates())
    }

    if (searchState.length > 0) allmovies = searchState
    else if (filtered.length > 0) allmovies = filtered

    return (
        <div className={homeStyles.fondo}> <h1 className={homeStyles.h1}>App Movies Juan Pablo Tuttolomondo</h1>
            <p></p>
            <label className={homeStyles.h2} >FILTER BY STARS</label>
            <select onChange={e => handleFilterByStars(e)} className={homeStyles.box}>
                <option value='seleccionar' className={homeStyles.box} >Select Stars</option>
                <option value='1' className={homeStyles.hbox}  >*</option>
                <option value='2' className={homeStyles.hbox}  >**</option>
                <option value='3' className={homeStyles.hbox}  >***</option>
                <option value='4' className={homeStyles.hbox} >****</option>
                <option value='5' className={homeStyles.hbox} >*****</option>
            </select>
            <p></p>
            <p></p>
            <SearchBar />
            <button onClick={e => handleClick(e)} className={homeStyles.button1} ><div className={homeStyles.hbutton}>Load Movies</div></button>
            <br></br>
            <br></br>
            <br></br>
            {
                <div > {allmovies?.map(e => {
                    return (
                        <div key={e.id}>
                            {e === allmovies[0] ? <Link to={'/Detail/' + e.id}>
                                <Card id={e.id} title={e.title} poster={e.poster} primero={true} />
                            </Link>
                                : <Link to={'/Detail/' + e.id}>
                                    <Card id={e.id} title={e.title} poster={e.poster} primero={false} />
                                </Link>
                            }
                            <br></br>
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
