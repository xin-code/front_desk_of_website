function Ajax(options) {

    //传递的默认值
    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function() {},
        error: function() {}
    }

    //属性覆盖
    // 使用options对象中的方法覆盖defaults对象的方法
    Object.assign(defaults, options);

    var xhr = new XMLHttpRequest();

    //接收拼接字符串
    var params = '';
    //for in 遍历数组
    for (var key in defaults.data) {
        //name=zhangsan&age=20
        params += key + '=' + defaults.data[key] + '&'
    }

    //截取字符串
    params = params.substr(0, params.length - 1);

    // 封装时判断post或get类型
    if (defaults.type == 'get') {
        defaults.url += '?' + params;
        xhr.open(defaults.type, defaults.url);
        xhr.send();
    } else {
        xhr.open(defaults.type, defaults.url);
        var ContentType = defaults.header['Content-Type'];
        xhr.setRequestHeader('Content-Type', ContentType);

        //判断用户希望传递请求参数的格式类型
        if (ContentType == 'application/json') {
            //json需要转换类型 从对象型转化为字符串型
            xhr.send(JSON.stringify(defaults.data));
        } else {
            //如果是正常的就不需要转换，就传递正常的请求参数
            xhr.send(params);
        }
    }
    xhr.onload = function() {

        //判断getResponseHeader相应头文件的类型
        var type = xhr.getResponseHeader('Content-Type');
        var text = xhr.responseText;
        if (type.includes('application/json')) {
            //将json字符串转换为json对象
            text = JSON.parse(text);
        }
        //判断http状态码
        if (xhr.status == 200) {
            //请求成功
            defaults.success(text, xhr);
        } else {
            //请求失败 返回状态码
            defaults.error(text, xhr);
        }
    }
}