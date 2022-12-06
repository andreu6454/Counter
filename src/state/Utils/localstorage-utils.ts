import {AppRootStateType} from "../store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveState = (counter: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(counter);
        localStorage.setItem('counter', serializedState);
    } catch {
        // ignore write errors
    }
};
