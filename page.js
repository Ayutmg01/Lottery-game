'use client'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Lottery = () => {
    const lotteryOptions = ['💥', '🍒', '💥', '🍋', '💥', '💥', '🍌', '💥', '💥']
    const [randomNum, setRandomNum] = useState(null)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (!isPaused) {
            const interval = setTimeout(() => {
                const tempNum = Math.floor(Math.random() * lotteryOptions.length)
                if (tempNum === randomNum) {
                    setRandomNum((randomNum + 1) % lotteryOptions.length)
                } else {
                    setRandomNum(tempNum)
                }
            }, 50)
            return () => clearTimeout(interval)
        }
    }, [randomNum, isPaused])

    const handlePauseResume = () => {
        setIsPaused(!isPaused)
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
            <h1 className='text-5xl font-bold text-white mb-10'>Welcome to the Lottery Game</h1>
            <div className='bg-white text-2xl font-semibold text-black p-5 rounded-lg shadow-md mb-5'>
                {lotteryOptions[randomNum] === '💥' ? 'You lost! Try again!' : `Congrats, you won ${lotteryOptions[randomNum]}!`}
            </div>
            <div className='bg-black w-64 p-5 rounded-lg grid grid-cols-3 gap-3 mb-10'>
                {lotteryOptions.map((item, id) => (
                    <div 
                        key={id} 
                        style={{ backgroundColor: id === randomNum ? 'red' : 'black' }} 
                        className='text-4xl text-white rounded-sm flex items-center justify-center h-16'
                    >
                        {item}
                    </div>
                ))}
            </div>
            <Button onClick={handlePauseResume} className='bg-blue-500 text-white p-3 rounded-lg'>
                {isPaused ? 'Resume' : 'Pause'}
            </Button>
        </div>
    )
}

export default Lottery
