function HttpWrapper() {

}

var http = new HttpWrapper();
/**
 * 下载远程文件到本地,支持断点续传
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param remoteUrl 远程文件URL
 * @param file      要保存到本地的文件对象
 * @param timeout   下载超时，单位是毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return 布尔型 true 代表成功 false代表失败
 */
HttpWrapper.prototype.downloadFile = function (remoteUrl, file, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    return httpWrapper.downloadFile(remoteUrl, file, timeout, object2JsonString(headers));
};
/**
 * 下载远程文件到本地，支持断点续传，默认超时时间为30秒
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param remoteUrl 远程文件URL
 * @param file      要保存到本地的路径
 * @param headers    头标志例如{"a":"11"}
 * @return 布尔型 true 代表成功 false代表失败
 */
HttpWrapper.prototype.downloadFileDefault = function (remoteUrl, file, headers) {
    if (httpWrapper == null) {
        return null;
    }
    return httpWrapper.downloadFileDefault(remoteUrl, file, object2JsonString(headers));
};
/**
 * Http GET 请求
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param url     请求的URL
 * @param timeout 超时时间 单位毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return 字符串 请求后返回的字符串
 */
HttpWrapper.prototype.httpGetDefault = function (url, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    var x = httpWrapper.httpGetDefault(url, timeout, object2JsonString(headers));
    return javaString2string(x);
};
/**
 * Http GET 请求
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param url     请求的URL
 * @param params  参数Map表 例如 {"a":"1"} 这样的参数或者字符串
 * @param timeout 超时时间 单位毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return 字符串 请求后返回的字符串
 */
HttpWrapper.prototype.httpGet = function (url, params, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    var x = httpWrapper.httpGet(url, object2JsonString(params), timeout, object2JsonString(headers));
    return javaString2string(x);

};

/**
 * Http POST 请求
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param url     请求的URL
 * @param params  参数，例如 {"a":"1"} 这样的参数或者字符串
 * @param files 要上传的文件，例如 {"file1":"/sdcard/a.txt"}
 * @param timeout 超时时间 单位毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return 字符串 请求后返回的字符串
 */
HttpWrapper.prototype.httpPost = function (url, params, files, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    var x = httpWrapper.httpPost(url, object2JsonString(params), object2JsonString(files), timeout, object2JsonString(headers));
    return javaString2string(x);
};

/**
 * HTTP POST JSON数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param url  请求的URL
 * @param json json数据
 * @param timeout 超时时间 单位毫秒
 * @param headers    头标志例如{"a":"11"}
 * @return 字符串 请求后返回的字符串
 */
HttpWrapper.prototype.postJSON = function (url, json, timeout, headers) {
    if (httpWrapper == null) {
        return null;
    }
    var x = httpWrapper.postJSON(url, object2JsonString(json), timeout, object2JsonString(headers));
    return javaString2string(x);
};


/**
 * HTTP 请求
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param param  map参数，包含的参数有<Br/>
 * url:字符串 请求的地址<Br/>
 * timeout:整型毫秒，超时时间<Br/>
 * method: POST ,GET,PUT 字符串，代表请求的方法<Br/>
 * proxy: 代理地址，map参数 包含主机和端口 例如 {"host":"11","port":111}<Br/>
 * followRedirects:是否自动跳转 true 或者 false<Br/>
 * requestBody: 请求的body体，如果是JSON，就是JSON字符串<Br/>
 * userAgent:字符串 HTTP 的UA <Br/>
 * ignoreContentType:是否忽略内容类型 true 或者 false <Br/>
 * ignoreHttpErrors:是否忽略错误 true 或者 false  <Br/>
 * maxBodySize : 整型，HTTP BODY最大值  <Br/>
 * referrer:字符串，请求来源  <Br/>
 * header:  HTTP 请求头，map参数,例如 {"UA":"test"} <Br/>
 * cookie: HTTP 请求Cookie，map参数, 例如 {"a":1} <Br/>
 * data:HTTP POST的数据，map参数, 例如 {"a":1} <Br/>
 * file:要上传的文件，集合参数，例如<Br/> [
 *                      {"key":"a1","fileName":"a.txt","filePath":"/sdcard/"},
 *                      {"key":"a1","fileName":"a.jpg","filePath":"/sdcard/","contentType":"image/jpg"}
 *                  ]<Br/>
 *                  其中contentType可有可无
 * responseCharset: 字符串，强制设置响应内容的编码集
 * @return Response 对象或者null
 */
HttpWrapper.prototype.request = function (param) {
    if (httpWrapper == null || param == null) {
        return null;
    }
    var p = JSON.stringify(param);
    var x = httpWrapper.request(p);
    if (x == null) {
        return null;
    }
    return new Response(JSON.parse(x));
};


function Response(data) {
    this.cookie = {};
    this.header = {};
    this.charset = "";
    this.statusMessage = "";
    this.contentType = "";
    this.statusCode = 0;
    this.body = "";
    if (data != null) {
        this.cookie = data["cookie"];
        this.header = data["header"];
        this.charset = data["charset"];
        this.statusMessage = data["statusMessage"];
        this.contentType = data["contentType"];
        this.statusCode = data["statusCode"];
        this.body = data["body"];
    }
}

/**
 * 创建一个websocket
 * @param url 要连接的地址
 * @param header 参数头
 * @return {@link WebSocket } WebSocket对象
 */
HttpWrapper.prototype.newWebsocket = function (url, header) {
    var p = null;
    if (header != null) {
        p = JSON.stringify(header);
    }
    var ws = httpWrapper.websocket(url, p);
    return new WebSocket(ws);
};

function WebSocket(ws) {
    this.websocketClient = ws;
}

/**
 * 开始异步连接
 */
WebSocket.prototype.connect = function () {
    if (this.websocketClient != null) {
        this.websocketClient.connect();
    }
};

/**
 * 是否已经关闭
 * @return true 代表已经关闭，false 未关闭
 */
WebSocket.prototype.isClosed = function () {
    if (this.websocketClient != null) {
        return this.websocketClient.isClosed();
    }
    return true;
};

/**
 * 是否已经连接了
 * @return true 代表已经连接，false 未连接
 */
WebSocket.prototype.isConnected = function () {
    if (this.websocketClient != null) {
        return this.websocketClient.isConnected();
    }
    return true;
};
/**
 * 关闭链接
 */
WebSocket.prototype.close = function () {
    this.websocketClient.close();
};


/**
 * 发送文本消息
 * @param text 文本信息
 */
WebSocket.prototype.sendText = function (text) {
    this.websocketClient.sendText(text);
};
/**
 * 发送字节信息
 * @param bin
 */
WebSocket.prototype.sendBinary = function (bin) {
    this.websocketClient.sendBinary(bin);
};

/**
 * 当连接打开的时候事件回调
 * @param callback 回调函数
 */
WebSocket.prototype.onOpen = function (callback) {
    this.websocketClient.setCallbackOnOpen(callback);
};
/**
 * 当有文本信息发送过来的时候回调
 * @param callback 回调函数
 */
WebSocket.prototype.onText = function (callback) {
    this.websocketClient.setCallbackOnText(callback);
};
/**
 * 当关闭的时候回调
 * @param callback 回调函数
 */
WebSocket.prototype.onClose = function (callback) {
    this.websocketClient.setCallbackOnClose(callback);
};
/**
 * 当发生错误的时候回调
 * @param callback 回调函数
 */
WebSocket.prototype.onError = function (callback) {
    this.websocketClient.setCallbackOnError(callback);
};
/**
 * 当有二进制数据过来的时候回调
 * @param callback 回调函数
 */
WebSocket.prototype.onBinary = function (callback) {
    this.websocketClient.setCallbackOnBinary(callback);
};

