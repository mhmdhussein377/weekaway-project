import React from 'react'

const Hero = () => {
    return (
        <div className="w-full h-[93vh]">
            <img
                src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
                alt="/"
                className="w-full h-full object-cover"/>
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:w-[50%] max-w-[600px] text-white p-4 flex flex-col'>
                    <h1 className='font-bold text-3xl md:text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-3xl md:text-3xl py-4 italic'>With Weekaway</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus veritatis at repudiandae id quod dicta facilis quis! Veritatis facere quae neque quis laboriosam nobis alias tempora, ipsa explicabo laudantium.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero