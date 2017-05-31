export function resolve(from:string, to:string): string {
    const arrFrom = from.split('/');
    const arrTo = to.split('/');
    const arrPath = [];
    let prev = 1;
    for(let i=0; i<arrTo.length; i++){
        if( arrTo[i] == '..' ){
            prev++;
        }
        else if( arrTo[i] == '.' ){
            continue;
        }
        else{
            arrPath.push(arrTo[i]);
        }
    }
    arrFrom.length-=prev;
    return arrFrom.join('/')+'/'+arrPath.join('/');
}

export function uuid(): string {
    const s1 = Math.ceil(Math.random()*10000);
    const s2 = Math.ceil(Math.random()*10000);
    const s3 = Math.ceil(Math.random()*10000);
    const s4 = Math.ceil(Math.random()*10000);
    return `uuid_${s1}_${s2}_${s3}_${s4}`;
}