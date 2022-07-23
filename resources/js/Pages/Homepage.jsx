import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
    console.log(props)
    return(
        <div className='flex flex-col justify-center items-center font-bold min-h-screen text-white text-2xl bg-sky-500'>
            <Head title={props.title} /> {/*for seo*/}
            <p>{props.description}</p>
            {/* map datanya */}
            { props.news ? props.news.map((data, i) => {
                return(
                    <div key={i} className="p-4 m-2 my-4 bg-slate-400 w-1/2 shadow-lg rounded-lg">
                        <p><span className='text-black'>Title:</span> {data.title}</p>
                        <p><span className='text-black'>Description:</span> {data.description}</p>
                        <p><span className='text-black'>Category:</span> {data.category}</p>
                        <p><span className='text-black'>Author:</span> {data.author}</p>
                    </div>
                )
            }) : <p>Data fail to load</p>}
        </div>
    )
}