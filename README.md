# Lottery-game

A fun and interactive lottery component built with React. This component randomly selects an item from a predefined list and displays the result, with the option to pause the lottery.

## Features

- **Random Selection**: Continuously selects a random item from the list.
- **Pause/Resume Functionality**: Allows users to pause and resume the lottery.
- **Visual Indication**: Highlights the current selected item.

## Installation

To include the Lottery component in your project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-lottery-component.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd react-lottery-component
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the application:**
   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to:**
   ```bash
   http://localhost:3000
   ```

## Usage

To use the `Lottery` component in your React project, follow these steps:

1. **Import the `Lottery` component:**
   ```javascript
   import Lottery from './path/to/Lottery';
   ```

2. **Include the component in your JSX:**
   ```javascript
   function App() {
     return (
       <div className="App">
         <Lottery />
       </div>
     );
   }

   export default App;
   ```

## Example Code

Here’s an example of how you can use the `Lottery` component in your application with added comments:

```javascript
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
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes. Ensure your code follows the project's style guidelines and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact ayutmg456@gmail.com or open an issue in the repository.
