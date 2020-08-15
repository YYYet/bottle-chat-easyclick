/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

let defalutTime;
let picreply;
let noreply;
function main() {

    toast("Hello World");
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    logd("开始执行脚本...")
    // var t=file.readAllLines("/sdcard/文本库.txt");
    // logd(t.length);
    picreply = readConfigString("picreply").split("----");
    noreply  = readConfigString("noreply").split("----");

    logd("noreply"+noreply)

    logd("picreply"+picreply)
    createContext()
    let time = readConfigString("name");
    defalutTime = parseInt(time)
    while (true){
        sleep(defalutTime*1000)
        if (has(id("com.qieyu.bottle:id/conversation_unread"))) {
            startAutoTalk();
        }else {
            upOrDown()
            continue
        }
    }



}

function startAutoTalk() {
   // logd(id("com.qieyu.bottle:id/conversation_unread").getOneNodeInfo(1000))
    let partent =id("com.qieyu.bottle:id/conversation_unread").getOneNodeInfo(1000).parent();
    logd("用户:"+partent.child(1).text+";"+"发送时间:"+partent.child(2).text+";"+"消息内容:"+partent.child(3).text)
    let msg =partent.child(3).text;

    if (msg=="[图片]") {
      let reply = picreply[random(0,picreply.length+1)] ;
        toast("检测到图片，随机发送:"+reply)
        sleep(random(1500,3500))
        clickRandom(id("com.qieyu.bottle:id/conversation_unread"))
        sleep(random(1500,3500))

        inputMsg(reply)
    }else {
        sleep(random(1500,3500))
        clickRandom(id("com.qieyu.bottle:id/conversation_unread"))
        sleep(random(1500,3500))
        getMsgFromLocal(msg)
    }

}

function createContext() {
    var allReply=file.exists("/sdcard/文本库.txt");
    if (allReply) {
        logd("脚本运行文本库齐全")
    }else {
        var create=file.create("/sdcard/文本库.txt");
        if (create) {
            loge("已创建文本库")
        }else {
            logd("文本库创建失败或已存在")
        }
    }
}
function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();