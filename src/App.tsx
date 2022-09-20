import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import Settings from "./Components/Setting";

function App() {
    const [maxCount, setMaxCount] = useState(() => {
        let MaxCount = localStorage.getItem('maxCount')
        if (MaxCount) {
            return JSON.parse(MaxCount);
        }
        return 5
    })
    const [minCount, setMinCount] = useState(() => {
        let MinCount = localStorage.getItem('minCount')
        if (MinCount) {
            return JSON.parse(MinCount);
        }
        return 0
    })
    const [error, setError] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [count, setCount] = useState(minCount)

    useEffect(() => {
        if (minCount < maxCount) {
            localStorage.setItem('minCount', JSON.stringify(minCount))
            setIsDisabled(false)
            setError(false)
        } else {
            setError(true)
            setIsDisabled(true)
        }

    }, [minCount])

    useEffect(() => {
        if (minCount < maxCount) {
            localStorage.setItem('maxCount', JSON.stringify(maxCount))
            setIsDisabled(false)
            setError(false)
        } else {
            setError(true)
            setIsDisabled(true)
        }
    }, [maxCount])

    const changeCount = (number: number) => {
        setCount(number)
    }
    const changeMaxCount = (number: number) => {
        setMaxCount(number)
    }
    const changeMinCount = (number: number) => {
        setMinCount(number)
    }


    return (
        <div className="App">
            <Settings maxCount={maxCount} changeMaxCount={changeMaxCount} minCount={minCount}
                      changeMinCount={changeMinCount} changeCount={changeCount} error={error} isDisabled={isDisabled}/>
            <Counter count={count} changeCount={changeCount} maxCount={maxCount} minCount={minCount}/>
        </div>
    );
}

export default App;
