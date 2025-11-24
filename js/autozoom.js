/*
    By PillarsZhang 2017-9-23
    Web:www.pizyds.com
*/

$(function () {
    if (setAutoZoom) {        
        zoom();
        };
    });

$(window).resize(function(){
    if (setAutoZoom) {
        zoom();
        }
    });

//zoom函数用於計算與調整
function zoom() {
    var winH = $(window).height();
    var winW = $(window).width();
    //取得窗口長寬，同對適用於F11全螢幕

    var winH2 = winH/650
    var winW2 = winW/650
    //上面2個數字650反復調試得到
    //直接以除法獲得與標準尺寸的比例

    
    if (winH2<1 || winW2<1)
        {
        if (winH2<winW2) 
            {
            $("body").css("transform","scale("+winH2+")");
            }
        else
            {
            $("body").css("transform","scale("+winW2+")");
            }
        //按比例缩放
        }
    else 
        {
        $("body").css("transform","scale(1)");
        //處理忽然變全螢幕事件
        }
    };