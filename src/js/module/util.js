
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