import React, {useEffect} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import Setting from "./Components/Setting";
import {useDispatch} from "react-redux";
import {ThunkAppDispatchType} from "./state/store";
import {setValuesFromLocalStorageTC} from "./state/reducers";

function App() {
    const dispatch = useDispatch<ThunkAppDispatchType>()
    useEffect(() => {
        dispatch(setValuesFromLocalStorageTC())
    },[])
    return (
        <div className="App">
            <Setting/>
            <Counter/>
        </div>
    );
}

export default App;
