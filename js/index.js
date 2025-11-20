/*
相关设置分离到settings.js
*/
//未中奖人员名单
var remainPerson = allPerson.toString().split(";");
//中奖人员名单
var luckyMan = [];
var timer;//定时器
var times = 1;//抽奖次数


$(function () {
    iconAnimation();
    //开始抽籤
    //$("#btnStart").text("抽籤");
    $("#btnStart").on("click", function () {
        
          
        
        //顯示GIF動畫
        $("#result").fadeOut("normal", function () {
            $("#result>div").html("<img src='css/img/draw.gif' width='130'>");            
                $("#result").fadeIn();
        });
        //$("#result").fadeOut("fast");

        //显示动画框，隐藏中奖框
        //    $("#luckyDrawing").show().next().addClass("hide");

        //顯示跳動的數字
            //move();
            
            $("#bgLuckyDrawEnd").removeClass("bg");//移除中獎背景光輝
       
        
            var luckyDrawNum = $("#txtNum").val();
        
        //抽籤开始0.3秒
            setTimeout(startLuckDraw, 3000);            
            //startLuckDraw();

            $("#luckyDrawing").fadeOut();
            clearInterval(timer);//停止输入框动画展示
            //$("#luckyDrawing").val(luckyMan[luckyMan.length - 1]);//输入框显示最后一个中奖名字
            $("#result").fadeIn().find("div").removeClass().addClass("p" + luckyDrawNum);//隐藏输入框，显示中奖框
            $("#bgLuckyDrawEnd").addClass("bg");//添加中獎背景光輝
    
    });

});


//抽奖主程序
function startLuckDraw() {
    
    //抽奖人数
    var luckyDrawNum = $("#txtNum").val();
    
    //随机中奖人
    var randomPerson = getRandomArrayElements(remainPerson, luckyDrawNum);
    var tempHtml = "";
    $.each(randomPerson, function (i, person) {       
        tempHtml += "<span><img src='css/img/" + person + ".png' width='135px' style='box-shadow:3px 3px 12px gray;'></span>";
    });
    $("#result>div").html(tempHtml);

}

//参考这篇文章：http://www.html-js.com/article/JS-rookie-rookie-learned-to-fly-in-a-moving-frame-beating-figures
//跳动的数字
function move() {
    var $showName = $("#showName"); //显示内容的input的ID
    var interTime = 100;//设置间隔时间
    timer = setInterval(function () {
        var i = GetRandomNum(0, remainPerson.length);
        $showName.val(remainPerson[i]);//输入框赋值
    }, interTime);
}

//六個小圖案的隨機動裡
function iconAnimation() {
    var interTime = 200;//間隔時間
    var $icon = $("#iconDiv>span");
    var arrAnimatoin = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "wobble", "tada"];
    var timer2 = setInterval(function () {
        var i = GetRandomNum(0, $icon.length);
        var j = GetRandomNum(0, arrAnimatoin.length);
        //console.log("i:" + i + ",j:" + j);
        $($icon[i]).removeClass().stop().addClass("animated " + arrAnimatoin[j]);//输入框赋值
    }, interTime);

}