


function inputMsg(txt) {
    toast("己方:"+txt)
    if ( inputText(clz("android.widget.EditText"),txt)) {
        if (waitExistNode(id("com.qieyu.bottle:id/send_btn"),20000)){
            clickRandom(id("com.qieyu.bottle:id/send_btn"))
            sleep(random(1000,2200))
            back()
        }
    }
}

function getMsgFromLocal(key) {

    var t=file.exists("/sdcard/文本库.txt");
    if (t) {
        if (!匹配话术(key)) {
            let reply =noreply[random(0,noreply.length+1)] ;
            toast("未匹配到，随机发送:"+reply)
            inputMsg(reply)
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
        logd("内容库数据:"+txtt)
        var reg = new RegExp(txtt)
        if (reg.test(key)) {
           /* list.push(newList)*/
            var txt = newList[2];
         /*   logd("匹配话术"+txt)*/
            inputMsg(txt)
            return true
        }else {
            logd("未匹配到")

            }

        }
}


