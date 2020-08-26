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
let bootletime;
let bootletimer;
let bootlereply
let bootlenum;

function main() {

    //这里有异常抛出



    loge(logString("开始->自动聊天"))
    // var t=file.readAllLines("/sdcard/文本库.txt");
    // logd(t.length);
    picreply = readConfigString("picreply").split("----");
    noreply  = readConfigString("noreply").split("----");
/*
    logd("noreply"+noreply)*/
    if (noreply.length!=0&&noreply.length!=0) {
        loge(logString("初始化成功->未匹配回复正常"))
    }else {
        loge(logString("初始化失败->未匹配回复异常"))
    }
    createContext()
    let time = readConfigString("name");
    defalutTime = parseInt(time)
    logd("回复时间间隔"+defalutTime)
    while (true){
        sleep(defalutTime*1000)
        loge(logString("自定义时间到->开始识别消息"))
        if (has(id("com.qieyu.bottle:id/conversation_unread"))) {
            loge(logString("提示->识别到消息"))
            startAutoTalk();
        }else {
            upOrDown()
            continue
        }
    }



}


function step1and2() {
    var tableName="tbl_bottle";
    var sql="select * from "+tableName+" where name = \'qyplp\';";
    var data = sqlite.query(sql);
    let jieduan = data[0].jd;
    toast("当前阶段："+jieduan);

    if (parseInt(jieduan)==1) {
      logd("判断为阶段1")
         openAndGotoBottle();
    }else if (parseInt(jieduan)==2){
        toast("判断为阶段2");

    }


}



function openAndGotoBottle() {
    sleep(1000)
   utils.openAppByName("窃语漂流瓶")
    sleep(1000)
    clickText("首页")
    clickRandom(id("com.qieyu.bottle:id/tvHome"))
    logd("首页")
    sleep(2000)
    if (waitExistNode(id("com.qieyu.bottle:id/btPlp"),5000)) {
              clickRandom(id("com.qieyu.bottle:id/btPlp"))
        logd("漂流瓶-"+bootlenum)
        let i
        for ( i = 0;i<parseInt(bootlenum);i++){
            logd("开始捡瓶子")
            sleep(random(1000,2000))
            sleep(bootletime*1000)
            if (waitExistNode(id("com.qieyu.bottle:id/imgRandom"),5000)) {
                clickRandom(id("com.qieyu.bottle:id/imgRandom"))



                    if (waitExistNode(id("com.qieyu.bottle:id/tvOk"),5000)) {
                        let username =getText(id("com.qieyu.bottle:id/tvTitle"));
                        sleep(random(1000,1500))
                        clickRandom(id("com.qieyu.bottle:id/tvOk"))
                        sleep(random(1000,2500))
                        toast("检测重复，关注以下弹窗");
                        if (checkMessage()) {
                            toast("已发送过"+username);
                            sleep(2000)
                            back()
                            continue
                        }else {
                            toast("发送给"+username);
                            sleep(random(1000,2500))
                            inputBottleMsg()
                        }


                    }else {
                        toast("没捞到");
                        i--;
                    }
                } else {

                }









        }



    }
}
function initlogfloat() {

    var m =  {
        "x":0,
        "y":0,
        "w":350,
        "h":90,
        "textSize":12,
        "backgroundColor":"#000000",
        "title":"",
        "showTitle":false
    }
    setLogViewSizeEx(m);
    showLogWindow();

    sleep(1000)





}
function openAndGotoMsg() {
    back()
  sleep(1000)
    utils.openAppByName("窃语漂流瓶")
    loge(logString("进入->窃语漂流瓶"))

    if (waitExistNode(id("com.qieyu.bottle:id/tvMsg"),5000)) {
        clickRandom(id("com.qieyu.bottle:id/tvMsg"))
        loge(logString("点击->消息"))
        if (waitExistNode(id("com.qieyu.bottle:id/btMsg"),5000)) {
            loge(logString("进入->消息"))
           main()


        }
    }
}
function startAutoTalk() {
   // logd(id("com.qieyu.bottle:id/conversation_unread").getOneNodeInfo(1000))
sleep(1500)
 let node = id("com.qieyu.bottle:id/conversation_unread").getOneNodeInfo(6000);
    if (null==node) {
        logd("node = null")
        toast("node = null")
        startAutoTalk()
    }else {
        let partent =node.parent();
        loge(logString("识别->识别到以下内容"));
        let msg;
        let name;
        let usersendtime;
        toast("node ")
        if (null!=partent) {
            let par = partent.child(3)
            let user = partent.child(1)
            let sendtime = partent.child(2)
            let sib = node.siblings();
            let siblings = sib.length;
            toast("node "+par)
            if (null == sib) {
                toast("子控件数量"+siblings+"\n识别->信息框显示不完整跳过")
                loge(logString("识别->信息框显示不完整跳过"))
                upOrDown()
                return
            }
            if (null==par||null==user||null==sendtime||siblings<4) {
                toast("子控件数量"+siblings+"\n识别->信息框显示不完整跳过")
                loge(logString("识别->信息框显示不完整跳过"))
                upOrDown()
                return

            }

   /*         toast("当前子控件"+partent.childCount);
            if (partent.childCount<5) {
                loge(logString("识别->信息框显示不完整跳过"))
                upOrDown()
                return;
            }*/
            msg =par.text;
            usersendtime = sendtime.text
            name =user.text
            toast("用户:"+name+";"+"发送时间:"+usersendtime+";"+"消息内容:"+msg)
            sleep(random(2500,3500))
         /*   clickExNodeInfo(node)*/
            if (msg=="[图片]") {
                let reply = picreply[random(0,picreply.length)] ;
                loge(logString("检测->检测到图片.随机发送:"+reply))
                sleep(random(1500,3500))

              //  clickRandom(id("com.qieyu.bottle:id/conversation_unread"))
               // clickRandomRect(node.bounds)
                loge(logString("点击->进入"+name+"的聊天界面"))
               clickText(name)
                sleep(random(1500,3500))
                inputMsg(reply)
            }else {
                sleep(random(1500,3500))
              //clickRandom(id("com.qieyu.bottle:id/conversation_unread"))
                loge(logString("点击->进入"+name+"的聊天界面"))
               // clickRandomRect(node.bounds)
                clickText(name)
                loge(logString("等待->防封睡眠"))
                sleep(random(1500,3500))
                loge(logString("启动->匹配文本"))
                getMsgFromLocal(msg)
            }
        }else {
            loge(logString("识别->识别错误"))
            startAutoTalk()
        }


    }

}

function createContext() {
    var allReply=file.exists("/sdcard/文本库.txt");
    if (allReply) {
        loge(logString("初始化文本库->文本库齐全"))
    }else {
        var create=file.create("/sdcard/文本库.txt");
        if (create) {
            loge(logString("文本库初始化->已创建文本库"))
        }else {
            loge(logString("文本库初始化->创建失败或已存在"))
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



function initAuto() {
    let version ="3.2.0";
    toast("当前版本:"+version);
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }

    var create = sqlite.connectOrCreateDb("test.db");
    logd("create db result："+create);
    var tableName="tbl_bottle";
    var columns=["name","jd","username"];
    var createTable = sqlite.createTable(tableName,columns);
    logd("createTable result："+createTable);
    var map={
        "name":"qyplp",
        "jd":"1",
        "username":"test"
    };
    var sql="select * from "+tableName+" where name = \'qyplp\';";
    var data = sqlite.query(sql);
    logd(data+"data")
    if (data.length!=0) {
        var where="name= \'qyplp\'";
        var update = sqlite.update(tableName,map,where);
        logd("update result："+update);
    }else {
        var insert = sqlite.insert(tableName,map);
        logd("insert result："+insert);
    }

    showLogWindow();
    setFloatDisplayLineNumber(false);
    initlogfloat()
}
/*var tableName="tbl_bottle";
var result = sqlite.dropTable(tableName);
logd("dropTable result："+ result);*/


/*var tableName="tbl_bottle";
var sql="delete from "+tableName+" where id>1;";
var result = sqlite.delete(sql);
logd("delete result："+ result);*/


function execAuto(){
    initAuto()


    setExceptionCallback(function (msg){
        toast(" 异常停止消息捕获 "+msg)
        back()
        restartScript(null,true,3)
    });
    var result = sleep(5000);
    if (result){
        toast("成功捕获到异常");
    } else {
        toast("未捕获异常");
    }


    back()
    bootletime = readConfigString("bootletime");
    bootletimer = readConfigString("bootletimer");
    bootlereply =  readConfigString("bootlereply").split("----");
    bootlenum = readConfigString("num");

    logd("瓶子回复"+bootlereply)
/*    var tid =thread.execAsync(function() {
        while (true){
            sleep(1000)
           // step1and2();
            logd("1阶段 ");

            if(thread.isCancelled(tid)){
                break;
            }

        }
    });
    logd("tid "+tid);
    //5s后取消线程
    sleep(10*1000);
    logd("取消线程 "+tid);
    thread.cancelThread(tid);*/


    step1and2()
    sleep(2000);
    logd("开始第二阶段 ");





    var tid2 =thread.execAsync(function() {
        while (true){
            sleep(1000)
            logd("2阶段 ");
            openAndGotoMsg();
            if(thread.isCancelled(tid2)){
                break;
            }
        }
    });
    logd("tid "+tid2);
    //5s后取消线程
    sleep(bootletimer*60*1000);
    logd("清理记录");
    if (has(id("com.qieyu.bottle:id/btClear"))) {
        clickRandom(id("com.qieyu.bottle:id/btClear"))
        sleep(1500)
        clickText("删除")
    }else {
        back()
        clickRandom(id("com.qieyu.bottle:id/btClear"))
        sleep(1500)
        clickText("删除")
    }


    logd("取消线程 "+tid2);
    thread.cancelThread(tid2);
    sleep(2000);
    logd("重启脚本");
    restartScript(null,true,3)
}




execAuto()
// checkMessage()

//openAndGotoMsg();
