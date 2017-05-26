import { ListenerList } from './declare';

export function defaultListenerList(): ListenerList {
    return {
        onmessage: null,
        onerror: null,
        onexit: null,
        message: [],
        error: []
    };
}