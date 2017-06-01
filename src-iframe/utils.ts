export function resolve(from: string, to: string): string {
    const arrFrom = from.split('/');
    const arrTo = to.split('/');
    const arrPath = [];
    let prev = 1;
    for (let i = 0; i < arrTo.length; i++) {
        if (arrTo[i] == '..') {
            prev++;
        }
        else if (arrTo[i] == '.') {
            continue;
        }
        else {
            arrPath.push(arrTo[i]);
        }
    }
    arrFrom.length -= prev;
    return arrFrom.join('/') + '/' + arrPath.join('/');
}

export function uuid(): string {
    const s1 = Math.ceil(Math.random() * 10000);
    const s2 = Math.ceil(Math.random() * 10000);
    const s3 = Math.ceil(Math.random() * 10000);
    const s4 = Math.ceil(Math.random() * 10000);
    return `uuid_${s1}_${s2}_${s3}_${s4}`;
}

export function getImportsList(txt: string, jspath: string): string[] {
    const list: string[] = [];
    const reg = /importScripts\(\s*([\'\"].+\.js[\'\"])\s*\)/g;
    let arr;
    while ((arr = reg.exec(txt)) != null) {
        const str = arr[1].replace(/[\'\"\s]/g, '');
        const jsArr = str.split(',');
        jsArr.forEach((js) => {
            list.push(resolve(jspath, js));
        });
    }
    return list;
}