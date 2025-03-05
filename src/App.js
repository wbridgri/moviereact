import {Routes, Route} from "react-router-dom"

import { useState, useEffect } from "react"

import data from "./data"

import Header from "./components/Header"

import Reviews from "./components/Reviews"

import Movies from "./components/Movies"

import Movie from "./components/Movie"

import Footer from "./components/Footer"


const App = ()=> {

    const [ movies, setMovies] = useState([])


    useEffect(()=> {
        setMovies(data)
    }, [])



    


    return(
        <>
            <Header />
            
            <Routes>
                <Route path="/" element ={<Movies  data={movies}/>} />
                <Route path="/Reviews" element={<Reviews />} />
                <Route path="/Movies/:id" element={<Movie />}></Route>

                
            </Routes>
            <Footer />
        </>
    )
}

export default App