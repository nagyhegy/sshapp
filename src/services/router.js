const handlers = {
    "GET" : {},
    "POST" : {},
    "PUT" : {},
    "DELETE" : {}
};

function get(path,handler) {
    handlers.GET[path] = handler;
}
function post(path,handler) {
    handlers.POST[path] = handler;
}
function put(path,handler) {
    handlers.PUT[path] = handler;
}
function del(path,handler) {
    handlers.DELETE[path] = handler;
}

function handle(req, res) {
    //routing logic
    console.log('HIBA2'),
    notFound(req, res);
    
}

function notFound(req, res) {
    console.log('HIBA3 ITT vagyok');
    res.statusCode = 404;
    console.log('naaa???');
    res.end = ('Nem talalom az oldalt');
}

module.exports = {
    get,post,put,del,handle
};