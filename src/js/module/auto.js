


function inputMsg(txt) {
    let s =noreply[random(0,noreply.length)]
    // loge(s)
    toast("己方:"+txt)
    if (undefined==txt) {
        txt = s;
        loge(logString("检测->随机回复异常.重置为"+s))
        toast("己方:"+s)
        // loge("re")
    }
    if ( inputText(clz("android.widget.EditText"),txt)) {
        loge(logString("输入->文本库输入"+txt))
        if (waitExistNode(id("com.qieyu.bottle:id/send_btn"),20000)){
            loge(logString("开始->开始发送"))
            clickRandom(id("com.qieyu.bottle:id/send_btn"))
            loge(logString("等待->防封睡眠"))
            sleep(random(1000,2200))
            loge(logString("启动->发送完毕.返回"))
            back()
        }
    }
}

function inputBottleMsg() {
    let s =bootlereply[random(0,bootlereply.length)]
    // loge(s)
    toast("己方:"+s)

    if ( inputText(clz("android.widget.EditText"),s)) {
        loge(logString("输入->随机招呼"+s))


        if (waitExistNode(id("com.qieyu.bottle:id/send_btn"),2000)){

            loge(logString("开始->开始发送"))
            clickRandom(id("com.qieyu.bottle:id/send_btn"))
            loge(logString("等待->防封睡眠"))
            sleep(random(1000,2200))
            loge(logString("启动->发送完毕.返回"))
            back()
        }else {
            toast("send不存在");
        }
    }
}


function getMsgFromLocal(key) {

    var t=file.exists("/sdcard/文本库.txt");
    if (t) {
        if (!匹配话术(key)) {
            let reply =noreply[random(0,noreply.length)] ;
            if (reply==undefined) {
                  loge(noreply)
                loge(random(0,noreply.length))
                loge("error")
                back()
            }else {
                loge(logString("检测->未匹配到.随机发送:"+reply))
                inputMsg(reply)
            }

           /*back()*/
        }
    }else {
        toast("检测到本地不存在文本库或文本库路径异常，请检查")
    }

}


function 匹配话术(key) {
    toast("对方:"+key)
    var t2=file.readAllLines("/sdcard/文本库.txt");
    for (let single in t2){
        var newList = new Array();
        var t23=file.readLine("/sdcard/文本库.txt",parseInt(single)+1);
        newList = t23.split("----")
        var txtt = '.*'+newList[1]+'.*';

        var reg = new RegExp(txtt)
        if (reg.test(key)) {
           /* list.push(newList)*/
            var txt = newList[2];
         /*   logd("匹配话术"+txt)*/
            inputMsg(txt)
            return true
        }else {


            }

        }
}


