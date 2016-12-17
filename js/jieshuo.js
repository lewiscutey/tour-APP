$(function () {

    //歌曲列表1
    var musics = [
        {path:'mp3/红玫瑰.mp3',name:'红玫瑰',artistan:'陈奕迅',duration:'04:00',src:'img/music/cyx.png',lyrics:[
            {time:"0:01",lyric:"红玫瑰"},
            {time:"0:04",lyric:"陈奕迅"},
            {time:"0:06",lyric:"《认了吧》"},
            {time:"0:11",lyric:"lewis 制作"},
            {time:"0:16",lyric:"梦里梦到醒不来的梦"},
            {time:"0:18",lyric:"红线里被软禁的红"},
            {time:"0:23",lyric:"所有刺激剩下疲乏的痛 再无动于衷"},
            {time:"0:29",lyric:"从背后抱你的时候 期待的却是她的面容"},
            {time:"0:37",lyric:"说来实在嘲讽 我不太懂 偏渴望你懂"},
            {time:"0:44",lyric:"是否幸福轻得太沉重"},
            {time:"0:47",lyric:"过度使用不痒不痛 烂熟透红空洞了的瞳孔"},
            {time:"0:55",lyric:"终于掏空 终于有始无终"},
            {time:"0:59",lyric:"得不到的永远在骚动"},
            {time:"1:03",lyric:"被偏爱的 都有恃无恐"},
            {time:"1:06",lyric:"玫瑰的红 容易受伤的梦"},
            {time:"1:10",lyric:"握在手中却流失于指缝"},
            {time:"1:14",lyric:"又落空"},
            {time:"1:29",lyric:"红是朱砂痣烙印心口"},
            {time:"1:33",lyric:"红是蚊子血般平庸"},
            {time:"1:37",lyric:"时间美化那仅有的悸动　也磨平激动"},
            {time:"1:44",lyric:"从背后抱你的时候 期待的却是她的面容"},
            {time:"1:52",lyric:"说来实在嘲讽 我不太懂 片刻望你懂"},
            {time:"1:59",lyric:"是否幸福轻得太沉重"},
            {time:"2:03",lyric:"过度使用 不痒不痛"},
            {time:"2:06",lyric:"烂熟透红空洞了的瞳孔"},
            {time:"2:11",lyric:"终于掏空 终于有始无终"},
            {time:"2:14",lyric:"得不到的永远在骚动"},
            {time:"2:17",lyric:"被偏爱的都有恃无恐"},
            {time:"2:22",lyric:"玫瑰的红 容易受伤的梦"},
            {time:"2:25",lyric:"握在手中却流失于指缝"},
            {time:"2:29",lyric:"又落空"},
            {time:"2:33",lyric:"www.22lrc.com☆x大紫↗ 制作"},
            {time:"2:44",lyric:"是否说爱都太过沉重"},
            {time:"2:47",lyric:"过度使用不痒不痛"},
            {time:"2:52",lyric:"烧得火红 蛇行缠绕心中"},
            {time:"2:55",lyric:"终于冷冻终于有始无终"},
            {time:"2:59",lyric:"得不到的永远在骚动"},
            {time:"3:02",lyric:"被偏爱的都有恃无恐"},
            {time:"3:06",lyric:"玫瑰的红 容易受伤的梦"},
            {time:"3:11",lyric:"握在手中却流失于指缝"},
            {time:"3:14",lyric:"得不到的永远在骚动"},
            {time:"3:18",lyric:"被偏爱的 都有恃无恐"},
            {time:"3:22",lyric:"玫瑰的红 伤口绽放的梦"},
            {time:"3:25",lyric:"握在手中却流失于指缝"},
            {time:"3:29",lyric:"再落空"}]
        },
        {path:'mp3/幸福的错觉.mp3',name:'幸福的错觉',artistan:'任重',duration:'04:36',src:'img/music/rc.png',lyrics:[
            {time:"0:00",lyric:" "},
            {time:"0:01",lyric:"幸福的错觉"},
            {time:"0:02",lyric:" "},
            {time:"0:03",lyric:"演唱：任重"},
            {time:"0:04",lyric:"作曲：祁勃力"},
            {time:"0:06",lyric:"作词：樊凡 孙艺 祁勃力"},
            {time:"0:08",lyric:""},
            {time:"0:18",lyric:"祝福明天"},
            {time:"0:21",lyric:"我不该就这样走远"},
            {time:"0:25",lyric:"假设了千万遍"},
            {time:"0:27",lyric:"又如何能改变"},
            {time:"0:32",lyric:"我们的这些天"},
            {time:"0:35",lyric:"我回想你的脸"},
            {time:"0:37",lyric:"怎么说再见"},
            {time:"0:40",lyric:"画面 冻结在一瞬间"},
            {time:"0:46",lyric:""},
            {time:"0:47",lyric:"时间 留下了无解的思念"},
            {time:"0:55",lyric:"回忆敌不过"},
            {time:"0:58",lyric:"距离的遥远"},
            {time:"1:01",lyric:"那些往昔"},
            {time:"1:04",lyric:"如童话般美丽的记忆"},
            {time:"1:10",lyric:"如今 却已散落一地"},
            {time:"1:16",lyric:""},
            {time:"1:16",lyric:"怎样才可以"},
            {time:"1:19",lyric:"说服了我自己"},
            {time:"1:24",lyric:"我们拥有的曾经"},
            {time:"1:28",lyric:"并不算爱情"},
            {time:"1:31",lyric:"为什么忽然间"},
            {time:"1:35",lyric:"我差一点相信"},
            {time:"1:39",lyric:"完美的结局"},
            {time:"1:41",lyric:"属于我和你"},
            {time:"1:45",lyric:""},
            {time:"1:45",lyric:"怎样才可以"},
            {time:"1:48",lyric:""},
            {time:"1:54",lyric:"彻底把过去"},
            {time:"1:56",lyric:"在心底抹去"},
            {time:"2:00",lyric:"如果说那幸福"},
            {time:"2:04",lyric:"不过都是错觉"},
            {time:"2:09",lyric:"为何有微笑"},
            {time:"2:11",lyric:"留在照片里"},
            {time:"2:15",lyric:" "},
            {time:"2:16",lyric:" "},
            {time:"2:41",lyric:"时间 留下了无解的思念"},
            {time:"2:49",lyric:"回忆敌不过"},
            {time:"2:51",lyric:"距离的遥远"},
            {time:"2:56",lyric:"那些往昔"},
            {time:"2:58",lyric:"如童话般美丽的记忆"},
            {time:"3:04",lyric:"如今 却已散落一地"},
            {time:"3:10",lyric:" "},
            {time:"3:10",lyric:"怎样才可以"},
            {time:"3:13",lyric:"说服了我自己"},
            {time:"3:19",lyric:"我们拥有的曾经"},
            {time:"3:22",lyric:"并不算爱情"},
            {time:"3:25",lyric:"为什么忽然间"},
            {time:"3:29",lyric:"我差一点相信"},
            {time:"3:34",lyric:"完美的结局"},
            {time:"3:35",lyric:"属于我和你"},
            {time:"3:40",lyric:" "},
            {time:"3:40",lyric:"怎样才可以"},
            {time:"3:43",lyric:"说服了我自己"},
            {time:"3:48",lyric:"彻底把过去"},
            {time:"3:51",lyric:"在心底抹去"},
            {time:"3:55",lyric:"如果说那幸福"},
            {time:"3:59",lyric:"不过都是错觉"},
            {time:"4:03",lyric:"为何有微笑"},
            {time:"4:06",lyric:"留在照片里"}]
        },
        {path:'mp3/背影.mp3',name:'背影',artistan:'林宥嘉',duration:'05:54',src:'img/music/lyj.png',lyrics:[
            {time:"0:02",lyric:"背影"},
            {time:"0:13",lyric:"林宥嘉"},
            {time:"0:30",lyric:""},
            {time:"0:31",lyric:"三公分阳光 三公分空气"},
            {time:"0:39",lyric:"堵在眼前像一面 玻璃"},
            {time:"0:46",lyric:"挡住了你表情 剩下 只有脚印"},
            {time:"1:02",lyric:"一直向前走 走不完距离"},
            {time:"1:10",lyric:"一直想后退不出回忆"},
            {time:"1:17",lyric:"很高兴有心事 帮我困住自己"},
            {time:"1:28",lyric:""},
            {time:"1:33",lyric:"你头发上淡淡青草香气"},
            {time:"1:40",lyric:"变成了风才能和我相遇"},
            {time:"1:48",lyric:"你的目光 蒸发成云"},
            {time:"1:56",lyric:"再下成雨我才能够靠近"},
            {time:"2:02",lyric:""},
            {time:"2:02",lyric:"感谢我不可以 住进你的眼睛"},
            {time:"2:10",lyric:"所以才能 拥抱你的背影"},
            {time:"2:18",lyric:"有再多的遗憾 用来牢牢记住"},
            {time:"2:26",lyric:"不完美 的所有美丽"},
            {time:"2:33",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"2:41",lyric:"所以才能 变成你的背影"},
            {time:"2:49",lyric:"躲在安静角落 不用你回头看"},
            {time:"2:59",lyric:"不用珍惜"},
            {time:"3:05",lyric:""},
            {time:"3:33",lyric:"我怀里所有温暖的空气"},
            {time:"3:41",lyric:"变成风也不敢和你相遇"},
            {time:"3:48",lyric:"我的心事 蒸发成云"},
            {time:"3:56",lyric:"再下成雨却舍不得淋湿你"},
            {time:"4:02",lyric:""},
            {time:"4:03",lyric:"感谢我不可以 住进你的眼睛"},
            {time:"4:10",lyric:"所以才能 拥抱你背影"},
            {time:"4:18",lyric:"有再多的遗憾 用来牢牢记住"},
            {time:"4:27",lyric:"不完美 的所有美丽"},
            {time:"4:34",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"4:41",lyric:"所以才能 变成你的背影"},
            {time:"4:49",lyric:"躲在安静角落 不用你回头看"},
            {time:"4:59",lyric:"不用珍惜"},
            {time:"5:04",lyric:""},
            {time:"5:05",lyric:"感谢我不可以 拥抱你的背影"},
            {time:"5:12",lyric:"所以才能 变成你的背影"},
            {time:"5:20",lyric:"躲在安静角落 如果你回头看"},
            {time:"5:30",lyric:"不用在意"},
            {time:"5:35",lyric:""},
            {time:"5:41",lyric:"背影"}
        ]},
        {path:'mp3/情书.mp3',name:'情书',artistan:'张学友',duration:'04:06',src:'img/music/zxy.png',lyrics:[
            {time:"0:01",lyric:"情书"},
            {time:"0:01",lyric:"作词 :姚若龙　作曲 :戚小恋"},
            {time:"0:02",lyric:"演唱：张学友"},
            {time:"0:03",lyric:""},
            {time:"0:23",lyric:"你瘦了憔悴的让我好心疼"},
            {time:"0:27",lyric:"有时候爱情比时间还残忍"},
            {time:"0:32",lyric:"有人变得盲目"},
            {time:"0:34",lyric:"而奋不顾身"},
            {time:"0:35",lyric:"忘了爱 要两个同样　"},
            {time:"0:38",lyric:"用心的人"},
            {time:"0:41",lyric:"你醉了脆弱得藏不住泪痕"},
            {time:"0:46",lyric:"我知道绝望比冬天还寒冷"},
            {time:"0:50",lyric:"你恨自己是个"},
            {time:"0:52",lyric:"怕孤独的人"},
            {time:"0:54",lyric:"偏偏又爱上自由自私的灵魂"},
            {time:"0:59",lyric:""},
            {time:"1:03",lyric:"你带着他唯一写过的情书"},
            {time:"1:07",lyric:"想证明当初爱得并不糊涂"},
            {time:"1:11",lyric:"他曾为了你的逃离颓废痛苦"},
            {time:"1:16",lyric:"也为了破镜重圆抱着你哭"},
            {time:"1:22",lyric:"哦 可惜爱不是几滴眼泪几封情书"},
            {time:"1:27",lyric:"哦 这样的话或许有点残酷"},
            {time:"1:32",lyric:""},
            {time:"1:33",lyric:"等待着别人给幸福的人"},
            {time:"1:36",lyric:"往往过得都不怎么幸福"},
            {time:"1:41",lyric:"哦 可惜爱不是忍着眼泪留着情书"},
            {time:"1:46",lyric:"哦 伤口清醒要比昏迷痛楚"},
            {time:"1:51",lyric:"紧闭着双眼 又拖着错误"},
            {time:"1:55",lyric:"真爱 来临时你又要怎么"},
            {time:"1:59",lyric:"留得住"},
            {time:"2:02",lyric:""},
            {time:"2:19",lyric:"你醉了脆弱得藏不住泪痕"},
            {time:"2:24",lyric:"我知道绝望比冬天还寒冷"},
            {time:"2:28",lyric:"你恨自己是个"},
            {time:"2:31",lyric:"怕孤独的人"},
            {time:"2:32",lyric:"偏偏又爱上自由自私的灵魂"},
            {time:"2:37",lyric:""},
            {time:"2:41",lyric:"你带着他唯一写过的情书"},
            {time:"2:45",lyric:"想证明当初爱得并不糊涂"},
            {time:"2:49",lyric:"他曾为了你的逃离颓废痛苦"},
            {time:"2:55",lyric:"也为了破镜重圆抱着你哭"},
            {time:"3:00",lyric:"哦 可惜爱不是几滴眼泪几封情书"},
            {time:"3:05",lyric:"哦 这样的话或许有点残酷"},
            {time:"3:11",lyric:"等待着别人给幸福的人"},
            {time:"3:15",lyric:"往往过得都不怎么幸福"},
            {time:"3:19",lyric:"哦 可惜爱不是忍着眼泪留着情书"},
            {time:"3:24",lyric:"哦 伤口清醒要比昏迷痛楚"},
            {time:"3:30",lyric:"紧闭着双眼 又拖着错误"},
            {time:"3:33",lyric:"真爱 来临时你又要怎么"},
            {time:"3:37",lyric:"留得住"},
            {time:"3:40",lyric:""}
        ]}
    ];


//获取一系列对象
    var audios = $('#audio');
    var audio = $('audio').get(0);
    var play = $('.jieshuo .control .play');
    var prev = $('.jieshuo .control .prev');
    var next = $('.jieshuo .control .next');
    var index = 0;
    var currentIndex = 0;

// 播放按钮
    play.on('click',function(){
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    });

    audios.on('play',function(){
        play.addClass('active');
    });
    audios.on('pause',function(){
        play.removeClass('active');
    });

// 在播放时调用时间函数
    audio.onplay = function(){
        $(this).triggerHandler('timeupdate');
    };

//上下首切歌
    next.on('click',function(){
        currentIndex ++;
        if(currentIndex>musics.length-1){
            currentIndex = 0;
        }
        audio.src = musics[currentIndex].path;
        dawlist();
        audio.play();
    });
    prev.on('click',function(){
        currentIndex --;
        if(currentIndex<0){
            currentIndex=musics.length-1;
        }
        audio.src=musics[currentIndex].path;
        dawlist();
        audio.play();
    });

//把歌曲遍历到歌曲列表1中
    function dawlist() {
        $('.jieshuo .head .list').empty();
        $.each(musics,function (i,v) {
            if(i === currentIndex){
                $('<li><span1>'+v.name+'</span1><span2>'+v.artistan+'</span2><span4><samp1></samp1><samp2></samp2><samp3></samp3><samp4></samp4></span4></li>').addClass('active').appendTo('.jieshuo .head .list');
            }else{
                $('<li><span1>'+v.name+'</span1><span2>'+v.artistan+'</span2><span4><samp1></samp1><samp2></samp2><samp3></samp3><samp4></samp4></span4></li>').appendTo('.jieshuo .head .list');
            }
        });
    }
    dawlist();

//播放列表点歌
   $('.jieshuo .head .list').on('click',"li",function () {
       currentIndex = $(this).index();
       audio.src = musics[currentIndex].path;
       audio.play();
   });

//处理列表界面
    audios.on('play',function () {
        $('.jieshuo .time .alltime').text(musics[currentIndex].duration);
        $('.jieshuo .swiper-slide:nth-child(1) h3 span').text(musics[currentIndex].artistan);
        $('.jieshuo .swiper-slide:nth-child(1) .img img').attr("src",musics[currentIndex].src).css("animation","rotation 10s linear infinite");
        $('.jieshuo .swiper-slide:nth-child(3) .info li:nth-child(1) img').attr("src",musics[currentIndex].src);
        $('.jieshuo .swiper-slide:nth-child(3) .info li:nth-child(1) span samp').text(musics[currentIndex].artistan);
    });

//删除列表上的歌曲
    $('.jieshuo .head .list li span4 samp2').on('click',function (e) {
        $(this).closest('li').remove();
        e.stopPropagation();
    });

//时间条
    var time = $('.jieshuo .time');
    var Nowtime = $('.jieshuo .time .nowtime');
    var Alltime = $('.jieshuo .time .alltime');
    var timeRegulate = $('.jieshuo .time .time-regulate');
    var timeBar = $('.jieshuo .time .time-regulate .time-bar');
    var timeOp= $('.jieshuo .time .time-regulate .time-op');

//获取时间函数
    function getTime(time){
        if(isNaN(time)){
            return '--:--';
        };
        var min=Math.floor(time/60);
        var sec=parseInt(time%60);
        if(sec<10){
            sec='0'+sec
        }
        if(min<10){
            min='0'+min
        }
        return min+':'+sec;
    }
    function format(v){
        var m = parseInt(v/ 60);
        var s=(parseInt(v) % 60 ) >=10 ? (parseInt(v) % 60 ) : "0"+(parseInt(v) % 60 );
        return m + ":" +s;
    }

//进度条
    audio.ontimeupdate=function () {
        Nowtime.text(getTime(audio.currentTime));
        timeOp.css({left:timeRegulate.width()*(audio.currentTime/audio.duration)});
        timeBar.css({width:timeRegulate.width()*(audio.currentTime/audio.duration)});
        timeOp.on('touchstart',false);

        //歌词滚动
        $(musics[currentIndex].lyrics).each(function(i,v){
            if(format(audio.currentTime) == v.time){
                var a=i;
                $(".lyric").empty();
                if(i -3<=0){
                    i= 0;
                }else{
                    i= i-3
                }
                for(var j=i;j<musics[currentIndex].lyrics.length;j++){
                    $("<p class="+ j +">"+musics[currentIndex].lyrics[j].lyric+"</p>").appendTo(".jieshuo .swiper-slide:nth-child(2) .lyric")
                }
                $("."+a).addClass("active");
            }
        });

    };

    timeRegulate.on('touchstart',function (e) {
        audio.currentTime = parseInt(audio.duration*(e.x+timeOp.width()/2+4)/timeRegulate.width());
        audio.ontimeupdate=function () {
            Nowtime.text(getTime(audio.currentTime));
            timeBar.css({width:timeRegulate.width()*(audio.currentTime/audio.duration)});
            timeOp.css({left:timeRegulate.width()*(audio.currentTime/audio.duration)-timeOp.width()/2});
        };
    });

//拖动进度条
    timeOp.on('touchstart',function(e){
        e.preventDefault();
        $(document).on('touchmove',function(e){
            var ww=(e.x-timeOp.offsetX)/timeRegulate.width()*audio.duration;
            ww=ww>=audio.duration?audio.duration:ww;
            ww=ww<=0?0:ww;
            audio.currentTime=ww;
        });
        $(document).on('touchend',function(){
            $(document).off('touchmove');
            $(document).off('touchend');
        });
    });

});
