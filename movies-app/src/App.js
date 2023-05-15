import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

import './App.css';
import './components/AddMovie.module.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovies = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                'https://react-starwars-http-7201a-default-rtdb.firebaseio.com/movies.json'
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }
            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const addMovie = async (movie) => {
        console.log('movie: ', movie);
        const response = await fetch(
            'https://react-starwars-http-7201a-default-rtdb.firebaseio.com/movies.json',
            {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = await response.json();
        console.log('data: ', data);
    };

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovie} />
            </section>
            <section>
                <button onClick={fetchMovies}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </>
    );
}

export default App;
