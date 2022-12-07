import React from 'react'

const Booking = () => {
    return (
        <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
            <form className=' lg:flex lg:justify-between w-full items-center'>
                <div className='flex flex-col p-2 gap-1'>
                    <label>Destinations</label>
                    <select className='lg:w-[300px] md:w-full border border-blue-600 rounded-md p-1'>
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className='flex w-full'>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2 gap-1'>
                        <label>Check-in</label>
                        <input type="date" className='border border-blue-600 rounded-md p-1'/>
                    </div>
                    <div className='flex flex-col gap-1 w-full lg:max-w-[250px] my-2 p-2'>
                        <label>Check-Out</label>
                        <input type="date" className='border border-blue-600 rounded-md p-1'/>
                    </div>
                </div>
                <div className='flex flex-col gap-1 p-2 w-full'>
                    <label>Search</label>
                    <button className='w-full'>Rates & Availabilities</button>
                </div>
            </form>
        </div>
    );
}

export default Booking