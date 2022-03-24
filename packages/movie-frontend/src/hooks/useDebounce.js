import {useEffect, useState} from 'react'

const useDebounced = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setInterval(() => {
            setDebouncedValue(value);
        }, delay)

        return () => {
            clearInterval(handler);
        }
    }, [value, delay])

    return debouncedValue;
}

export default useDebounced;