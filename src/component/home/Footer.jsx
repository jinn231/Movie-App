import React from 'react'

const HomeFooter = (prop) => {

    const Increase_page = () => {
        const index = prop.page + 1
        prop.increase_page(index)
    }

    const Decrease_page = () => {
        const index = prop.page - 1
        prop.decrease_page(index)
    }
    

  return (
        <div className='my-20 mx-20 flex justify-center'>
            <span onClick={Decrease_page} style={{backgroundColor: "blue"}} className='text-white p-3 shadow rounded-xl cursor-pointer transition ease-in hover:bg-blue-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 md:w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <div className={`${prop.page <= 7 ? "inline" : "hidden"} mt-3`}>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 1 ? "green" : "red"}`, userSelect: "none" }}>1</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 2 ? "green" : "red"}`, userSelect: "none" }}>2</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 3 ? "green" : "red"}`, userSelect: "none" }}>3</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 4 ? "green" : "red"}`, userSelect: "none" }}>4</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 5 ? "green" : "red"}`, userSelect: "none" }}>5</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 6 ? "green" : "red"}`, userSelect: "none" }}>6</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 7 ? "green" : "red"}`, userSelect: "none" }}>7</span>
            </div>
            <div className={`${prop.page > 7 ? "inline" : "hidden"} mt-3`}>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 8 ? "green" : "red"}`, userSelect: "none" }}>8</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 9 ? "green" : "red"}`, userSelect: "none" }}>9</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 10 ? "green" : "red"}`, userSelect: "none" }}>10</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 11 ? "green" : "red"}`, userSelect: "none" }}>11</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 12 ? "green" : "red"}`, userSelect: "none" }}>12</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 13 ? "green" : "red"}`, userSelect: "none" }}>13</span>
                <span className='w-3 md:w-6 h-6 p-2 md:p-4 md:py-3 mx-1 shadow-md md:mx-2 rounded-md md:rounded-xl text-white font-bold' style={{ backgroundColor: `${prop.page === 14 ? "green" : "red"}`, userSelect: "none" }}>14</span>
            </div>
            <span onClick={Increase_page} style={{backgroundColor: "blue"}} className='text-white p-3 shadow rounded-xl cursor-pointer transition ease-in hover:bg-blue-500'> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 md:w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </div>
  )
}

export default HomeFooter;
