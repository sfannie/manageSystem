define(['jquery'], function($){

    var C = window.C = {
        Constant: {
          CTX:_app.ctx || ""
        }
    };
    
    C.getTemplate = function(url,callback){
        window._TEMPLATE = window._TEMPLATE || {};
        var tmpl
        if(!!(tmpl = window._TEMPLATE[url])){
            callback(tmpl);
        }else{
            $.ajax({
                url:url,
                data:{v:_app.ts},
                type:"get",
                dataType:"text",
                success:function(tmpl){
                    window._TEMPLATE[url] = tmpl;
                    callback(tmpl);
                }
            });
        }
    }

    return C;
});