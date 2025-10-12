import { useEffect, useState } from 'react';

export function useAsyncInitialize<T>(func: () => Promise<T>, deps: any = []) {
    const [state, setState] = useState<T>();
    useEffect(() => {
        (async () => {
            setState(await func());
        })();
    }, deps);

    return state;
}
