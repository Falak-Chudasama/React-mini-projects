import { useContext, createContext } from "react";

const numberContext = createContext({
    value1: null,
    value2: null,
    setValue1: () => {},
    setValue2: () => {}
});

const NumberContextProvider = numberContext.Provider;
const getValues = () => {
        const { value1, value2 } = useContext(numberContext);
        return [value1, value2];
    };
const getEverything = () => useContext(numberContext);

export {
    NumberContextProvider,
    getValues,
    getEverything
}