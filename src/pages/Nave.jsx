import React from 'react';

const Nave = () => {
    // const [isOpen , setIsOpen] = useState(false)
    return (
        <div>
            <div>
                <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white' >
                    <div className='container px-4 flex justify-between items-center h-16'>
                        <h3 className='text-2xl font-bold '>Travel</h3>
                        <div className='flex space-x-4 text-sm font-bold items-center'>
                            <Link to = "/" className='px-6 py-2 hover:bg-red-400  hover:text-white '> Home</Link>
                            <Link to = "/gallery" className='px-6 py-2 hover:bg-red-400  hover:text-white '> Gallery</Link>
                            <Link to = "/contact" className='px-6 py-2 hover:bg-red-400  hover:text-white '> Contact</Link>
                            <Link to = "/about" className='px-6 py-2 hover:bg-red-400  hover:text-white  '>About</Link> 
                            <button className='py-2 px-2 bg-gray-400 border rounded-md '>login</button>
                        </div>
                        <div className='md:hidden'>
                            <button onClick={()=> setIsOpen(!isOpen)}>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nave;