'use client' // This directive ensures that the component is rendered on the client side.
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

const Lottery = () => {
    // Array representing the lottery options
    const lotteryOptions = ['💥','🍒', '💥', '🍋', '💥', '💥','🍌', '💥', '💥']

    // State to store the randomly selected number
    const [randomNum, setRandomNum] = useState(null)
    // State to manage the pause functionality
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        // Set a timeout to change the random number every 50ms if not paused
        if (!isPaused) {
            const timer = setTimeout(() => {
                const tempNum = Math.floor(Math.random() * lotteryOptions.length)
                // Ensure the new random number is different from the current one
                if (tempNum === randomNum) {
                    setRandomNum(randomNum + 1)
                } else {
                    setRandomNum(tempNum)
                }
            }, 50)
            // Clear the timeout on component unmount or state change
            return () => clearTimeout(timer)
        }
    }, [randomNum, isPaused])

    // Function to toggle the pause state
    const handlePause = () => {
        setIsPaused(!isPaused)
    }

    return (
        <div>
            {/* Display the result of the lottery */}
            {lotteryOptions[randomNum] === '💥' ? 'You lost' : 'Congrats you won ' + lotteryOptions[randomNum]}
            <div className='bg-black w-10 m-10'>
                {/* Render the lottery options */}
                {lotteryOptions.map((item, id) => (
                    <div
                        key={id}
                        style={{ backgroundColor: id === randomNum ? 'red' : null }}
                        className='text-4xl text-white rounded-sm my-4'
                    >
                        {item}
                    </div>
                ))}
            </div>
            {/* Button to pause/resume the lottery */}
            <Button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</Button>
        </div>
    )
}

export default Lottery
