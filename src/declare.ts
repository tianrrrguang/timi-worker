export enum Stat {
    IDLE,//默认状态
    LOADING,//首次加载，可能包括
    IMPORTING,//
    READY
}

export interface ListenerList {
    onmessage: any,
    onerror: any,
    onexit: any,
    message: any[],
    error: any[]
}