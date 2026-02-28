/*
相關抽籤的圖片檔案名稱在settings.js設定
*/
//未抽中的籤
var remainPerson = allPerson.toString().split(";");
//抽中的籤
var luckyMan = [];
var timer;//定时器
var times = 1;//每按一次只抽籤１次

$(function () {
    iconAnimation();//六個小圖案的隨機動畫

    //按下開始抽籤鈕就抽籤１次    
    $("#btnStart").on("click", function () {

        //播放音樂    
        document.getElementById("myAudio").muted = false; //解除靜音
        document.getElementById("myAudio").play(); //播放
        
        //抽的過程按鈕先失效
        $(this).prop('disabled', true);
       

        //顯示籤筒的GIF動畫 css/img/draw.gif
        $("#result").fadeOut("normal", function () {
            $("#result>div").html("<img src='css/img/draw.gif' width='155'>");            
                $("#result").fadeIn();
        });
        

        //顯示動畫框，隐藏中籤框
        //    $("#luckyDrawing").show().next().addClass("hide");

        //顯示正面
        setTimeout(move, 3000); 
            
            $("#bgLuckyDrawEnd").removeClass("bg");//移除中獎背景光輝               
            var luckyDrawNum = $("#txtNum").val();

        //0.5秒後抽籤開始
            setTimeout(startLuckDraw, 6000);
            $("#luckyDrawing").fadeOut();
        

        //顯示中籤框
            $("#result").fadeIn().find("div").removeClass().addClass("p" + luckyDrawNum);

        //添加中籤背景光輝
            $("#bgLuckyDrawEnd").addClass("bg");                
        
    });    

});


//抽籤主程序
function startLuckDraw() {
    
    //抽籤數預定都是1
    var luckyDrawNum = $("#txtNum").val();
    
    //随機中籤的籤文圖，圖有設定陰影 getRandomArrayElements() 定義於js/common.js
    var randomPerson = getRandomArrayElements(remainPerson, luckyDrawNum);
    var tempHtml = "";
    $.each(randomPerson, function (i, person) {       
        tempHtml += "<span><img src='css/img/" + person + ".png' width='200px' style='box-shadow:2px 2px 10px gray;'></span>";
    });
    $("#result>div").html(tempHtml);

    //抽完後按鈕才可以按
    $("#btnStart").prop('disabled', false);
}

//顯示正面
function move() {    
        $("#result").fadeOut("normal", function () {
            $("#result>div").html("<img src='css/img/00.png' width='200px' style='box-shadow:2px 2px 10px gray;'>");
            $("#result").fadeIn();
        });    
        $("#result").fadeOut(2000, "linear");
}

//六個小圖案的隨機動畫
function iconAnimation() {
    var interTime = 200;//間隔時間
    var $icon = $("#iconDiv>span");
    var arrAnimatoin = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "wobble", "tada"];
    var arrAnimatoin1 = ["pulse",  "shake", "swing"];
    var timer2 = setInterval(function () {
        var i = GetRandomNum(0, $icon.length);
        var j = GetRandomNum(0, arrAnimatoin.length);
        if (i == 4) {         
            $($icon[4]).removeClass().stop().addClass("animated "+ arrAnimatoin1[j]);//輸入框設定動畫方式
        } else {
            $($icon[i]).removeClass().stop().addClass("animated " + arrAnimatoin[j]);//輸入框設定動畫方式
        }
    }, interTime);

}