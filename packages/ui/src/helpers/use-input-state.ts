import {
    ChangeEvent,
    useCallback,
    useState,
} from 'react'


export function useInputState(initialValue: string) {
    const [value, setStateValue] = useState(initialValue)

    const setInputValue = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setStateValue(e.target.value),
        [],
    )

    return [value, setInputValue, setStateValue] as const
}
