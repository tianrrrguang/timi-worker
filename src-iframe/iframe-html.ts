export const makeIframeHtml = function (uuid, jspath) {
    const str = `
        <!DOCTYPE html>
        <html>
            <head></head>
            <body></body>
        </html>
        <script>
        //IE不允许重写window.postMessage()
        window.postMessage = function(msg){
            window.parent.postMessage({
                uuid: '${uuid}',
                data: msg
            },'*');
        };
        </script>
        <script src="${jspath}"></script>
    `;
    return 'data:text/html;charset=utf-8,' + encodeURI(str);
}