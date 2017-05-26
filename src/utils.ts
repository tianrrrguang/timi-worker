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

export function resolve(from:string, to:string): string {
    const arrFrom = from.split('/');
    const arrTo = to.split('/');
    let prev = 1;
    for(let i=0; i<arrTo.length; i++){
        if( arrTo[i] == '..' ){
            prev++;
        }
    }
    arrFrom.length-=prev;
    arrFrom.push(arrTo[arrTo.length-1]);
    return arrFrom.join('/');
}