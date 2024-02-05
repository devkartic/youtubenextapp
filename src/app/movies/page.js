import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <>
            <h1>Movies Page</h1>
            <Link href={'/movies/2'}>Click here</Link>
        </>
    );
};

export default Page;