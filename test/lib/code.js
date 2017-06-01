
function getCode(path, success, fail) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "text";
    xhr.open('GET', path, true);
    xhr.onload = function (e) {
        if (this.readyState == 4) {
            if (this.status == 200 || this.status == 304) {
                success(this.responseText);
            }
            else{
                fail && fail();
            }
        }
    };
    //发送数据
    xhr.send(null);
};

function fillmain(index) {
    const elem = $('#left pre code');
    const file = `./worker/m${index}.js`;
    const prefix = `//主页面代码
//worker请尽量push到wList里，会在run时自动terminate之前的worker
//文件${file}\n\n`;
    getCode(file, function (txt) {
        code = prefix + txt;
        elem.html(code);
        hljs.highlightBlock(elem[0]);
    }, function(){
        elem.html(prefix + `//${file}内容加载失败!`);
        hljs.highlightBlock(elem[0]);
    });
}

function fillworker(index){
    const elem = $('#right pre code');
    const file = `./worker/w${index}.js`;
    const prefix = `//worker代码
//文件${file}\n\n`;
    getCode(file, function (txt) {
        elem.html(prefix + txt);
        hljs.highlightBlock(elem[0]);
    });
}

function bindBindEvent() {
    $('.buttons').on('click', 'button', function (e) {
        var num = $(this).text();
        fillmain(num);
        fillworker(num);
        localStorage.setItem('index', num-1);
        $('.buttons button').css('color', 'black');
        $(this).css('color', 'red');
    });
}