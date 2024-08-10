import React from 'react';

function Home(props) {
    return (
        <div className='relative h-screen bg-cover bg-center' 
        style ={{backgroundImage : "url('')"}}  >
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center' >
                <h1 className='bg-red-600 rounded-md '>Explore the World with Us</h1>
                <p>Discover Amazing places at exclusive deals</p>
            </div>
        </div>
    );
}

export default Home;