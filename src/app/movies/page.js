import React from 'react';
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movies = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const env = process.env;
    const url = env.RAPID_API_URL+`/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en`;
    const key = env.RAPID_API_KEY;
    const host = env.RAPID_API_HOST;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': host
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    const movies = result.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movies</h1>
                    <div className={styles.card_section}>
                        {
                            movies.map((currentElement) => {
                                return <MovieCard key={currentElement.id} {...currentElement}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movies;