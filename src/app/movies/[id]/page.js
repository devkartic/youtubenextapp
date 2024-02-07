import React from 'react';
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Page = async ({params}) => {

    const id = params.id;

    new Promise(resolve => setTimeout(resolve, 2000));

    const env = process.env;
    const url = env.RAPID_API_URL+`/title/details/?ids=${id}&lang=en`;
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
    const movie = result[0].details;

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>Netflix \ <span>{movie.type}</span></h2>
                <div className={styles.card}>
                    <div className={styles.card_image}>
                        <Image src={movie.backgroundImage.url} alt={movie.title} width={260} height={200}/>
                    </div>
                    <div className={styles.card_data}>
                        <h2>{movie.title}</h2>
                        <p>
                            {movie.synopsis}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;