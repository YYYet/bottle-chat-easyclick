
/*滚动工具类
* by 小橙子*/

let flag =0;
let orientation;
function 向后滚动() {
    var node = id("com.qieyu.bottle:id/conversationList").getOneNodeInfo(1000);
    var result2 = node.scrollBackward();
    if (result2) {
        toast("滚动成功");
        flag =0;
    }else{
        toast("顶部检测");
        flag =1;
        orientation=0;
    }
}
function 向前滚动() {
    var node = id("com.qieyu.bottle:id/conversationList").getOneNodeInfo(1000);
    var result2 = node.scrollForward();
    if (result2) {
        toast("滚动成功");
        flag =0;
    }else{
        toast("底部检测");
        flag =1;
        orientation=1;
    }
}
//滚动检测
function upOrDown() {
    if (orientation==1) {
        向后滚动()
    }else {
        向前滚动()
    }
}




function insert(username) {
    let tableName="tbl_bottle";
    var map={
        "name":"plp",
        "jd":"1",
        "username":username
    };
    // logOne(url.replace(/[^0-9]/ig,"").substring(0,19))
    let insert = sqlite.insert(tableName,map);
    if (insert) {
        logOne(username+"初始化成功")
    }else {
        logOne(username+"初始化失败")
    }

}
function query(username) {

    var tableName="tbl_bottle";
    var sql="select * from "+tableName+" where name ="+"\'"+username+"\'"+";"
    var data = sqlite.query(sql);
    //logOne(data[0]['url'].replace(/[^0-9]/ig,"").substring(0,19))
    // return data[0]['url']
    //toast("当前data"+data.length);
    if (data.length!=0) {
        return true
    }else {
        return false
    }

}



function checkMessage() {
    // if (id("com.qieyu.bottle:id/chat_message_layout").getOneNodeInfo(1000).childCount!=0) {
    //
    //    return true
    // }else {
    //
    //     return  false
    // }
    return  false
}


function logString(txt) {
    clearLog(-1)
return "Cz助手"+txt
}

function logOne(txt) {
    clearLog(-1)
    return loge("Cz助手:"+txt+"...")
}

function numToString(num,n){
    return parseInt(num*Math.pow(10,n)+0.5,10)/Math.pow(10,n);
}

function stopapp() {
    home()
    logOne("进入应用详情界面")
    openAppSetting("package:com.ss.android.article.news")
}

function clearapp() {
    home()

    sleep(1000)
    if (!openAppSetting("package:com.qieyu.bottle")) {
        return
    }

//testRun()
    function openAppSetting(pkg) {
        var m ={
            "action":"android.settings.APPLICATION_DETAILS_SETTINGS",
            "flag":"Intent.FLAG_ACTIVITY_NEW_TASK",
            "uri":pkg
        };

        return  utils.openActivity(m);
    }

    if (waitExistNode(text("强行停止"),10000)) {
        clickText("强行停止")
        logOne("强行停止应用")
        if (waitExistNode(id("android:id/button1"),3000)) {
            logOne("强行停止应用成功")
            clickText("确定")
            clickText("强行停止")
            sleep(1000)

/*            clickText("存储")
            logOne("进入清理缓存阶段")
            if (waitExistNode(text("删除数据"),6000)) {
                clickText("清空缓存")

                if (waitExistNode(id("android:id/button1"),6000)) {
                    clickText("确定")
                    logOne("清理缓存完成")
                    back()
                    sleep(500)
                    back()
                    clickText("强行停止")
                }
            }else {
                clearapp()
            }*/
        }else {
/*            sleep(1000)
            clickText("存储")
            logOne("进入清理缓存阶段")
            if (waitExistNode(text("删除数据"),6000)) {
                clickText("清空缓存")
                if (waitExistNode(id("android:id/button1"),6000)) {
                    clickText("确定")
                    logOne("清理缓存完成")
                    back()
                    sleep(500)
                    back()
                    clickText("强行停止")
                }
            }*/
        }

    }else {
        back()
       // clearapp()
        /*        clickText("存储")
                logOne("进入清理缓存阶段")
                if (waitExistNode(text("清空缓存"),6000)) {
                    clickText("清空缓存")
                    if (waitExistNode(id("android:id/button1"),6000)) {

                        clickText("确定")
                        logOne("清理缓存完成")
                        back()
                        sleep(500)
                        back()
                        clickText("强行停止")
                    }
                }*/
    }
}