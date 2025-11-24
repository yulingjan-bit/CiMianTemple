/**
 * Created by c-zouzhongxing on 2017/1/4.
 */


function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;       
    }
    return shuffled.slice(min);
}

//去除重複參考來源http://www.jb51.net/article/71134.htm
Array.prototype.unique = function () {
    var n = {},
        r = []; //n为hash表，r為臨時數組
    for (var i = 0; i < this.length; i++) //從頭執行數組
    {
        if (!n[this[i]]) //如果hash表中没有當前項
        {
            n[this[i]] = true; //存入hash表
            r.push(this[i]); //把當前數组的當前項push到臨時數組裏面
        }
    }
    return r;
}

//去指定项
Array.prototype.delete = function (arr) {
    //var r = this.repeatedly();
    var b = [];
    for (var i = 0; i < this.length; i++) {        
        if (arr.indexOf(this[i]) < 0) {            
            b.push(this[i]);
        }
    }
    return b;
}

//獲取重複項
Array.prototype.repeatedly = function () {
    var n = {},
        r = []; //n为hash表，r為臨時數組
    for (var i = 0; i < this.length; i++) //從頭執行數組
    {
        if (!n[this[i]]) //如果hash表中没有當前項
        {
            n[this[i]] = true; //存入hash表
        } else {
            r.push(this[i]); //把當前收組的當前項push到臨時數組畫面
        }
    }
    return r;
}

//去重複項
Array.prototype.deleteRepeatedly = function () {
    var r = this.repeatedly();
    var b = [];
    for (var i = 0; i < this.length; i++) {
        if (r.indexOf(this[i]) < 0) {
            b.push(this[i]);
        }
    }
    return b;
}

//去空内容項
Array.prototype.deleteBlankObj = function () {
    var b = [];
    for (var i = 0; i < this.length; i++) {
        if (this[i].length != 0) {
            b.push(this[i]);
        }
    }
    return b;
};


function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}