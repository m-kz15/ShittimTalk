var alldata = "";
var messageArray = [];
var messageIdx = 0;
var messageHistory = [];
var output = document.getElementById('output');
var form_s = document.forms.students;
var select_afflication = document.getElementById("sel_school");
var select_s = document.getElementById("sel_student");
var select_effect = document.getElementById("sel_effect");
var position_s = document.getElementsByName("position");

var affiliation_num = 0;
var student_num = 0;
var before = "null";

const not_sel = [
    ["所属が未選択です","",""]
];
const abydos = [
    ["キャラ未選択","",""],
    ["ホシノ","ホシノ","./icon/Abydos/hoshino01.webp"],
    ["ホシノ_メモリアル","ホシノ","./icon/Abydos/hoshino02.webp"],
    ["シロコ","シロコ","./icon/Abydos/shiroko01.webp"],
    ["シロコ_メモリアル","シロコ","./icon/Abydos/shiroko02.webp"],
    ["ノノミ","ノノミ","./icon/Abydos/nonomi01.webp"],
    ["ノノミ_メモリアル","ノノミ","./icon/Abydos/nonomi02.webp"],
    ["セリカ","セリカ","./icon/Abydos/serika01.webp"],
    ["セリカ_メモリアル","セリカ","./icon/Abydos/serika02.webp"],
    ["アヤネ","アヤネ","./icon/Abydos/ayane01.webp"],
    ["アヤネ_メモリアル","アヤネ","./icon/Abydos/ayane02.webp"],
];
const gehena = [
    ["キャラ未選択","",""],
    ["ヒナ","ヒナ","./icon/Abydos/chara.webp"],
    ["ヒナ_メモリアル","ヒナ","./icon/Abydos/chara.webp"]
];
const millennium = [
    ["キャラ未選択","",""],
    ["ノア","ノア","./icon/Abydos/chara.webp"]
];
const trinity = [
    ["キャラ未選択","",""],
    ["ナギサ","ナギサ","./icon/Abydos/chara.webp"]
];
const hyakki = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const sankai = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const srt = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const alius = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const varru = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const renpou = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const syare = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const gema = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const mobu = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const sikisai = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const hoka = [
    ["キャラ未選択","",""],
    ["未実装","",""]
];
const affiliation = [
    not_sel,
    abydos,
    gehena,
    millennium,
    trinity,
    hyakki,
    sankai,
    srt,
    alius,
    varru,
    renpou,
    syare,
    gema,
    mobu,
    sikisai,
    hoka
];
const effectImage = [
    "",
    "./bag2.png",
    "./.png",
    "./.png",
    "./.png"
];

html2canvas(document.querySelector("#create_area"), {
    allowTaint: true,
    Width: this.captureWidth,
    windowWidth: this.captureWidth,
    height: this.captureHeight,
    windowWidth: this.captureHeight,
    scale: 2,
}).then(canvas => {
    document.getElementById('result').appendChild(canvas).setAttribute("id", "canvas");
    /*document.getElementById('ss').setAttribute("href", canvas.toDataURL());
    document.getElementById('ss').setAttribute("download", "sample.png");*/
    var viewImage = document.createElement('img');
    viewImage.setAttribute("id", "downloadImage");
    document.getElementById('result').appendChild(viewImage);
    document.getElementById('downloadImage').setAttribute("src",canvas.toDataURL());
});

function setCanvas(){
    html2canvas(document.querySelector("#create_area"), {
        allowTaint: true,
        width: this.captureWidth,
        windowWidth: this.captureWidth,
        height: this.captureHeight,
        windowHeight: this.captureHeight,
        scale: 2,
    }).then(canvas => {
        document.getElementById('downloadImage').remove();
        document.getElementById('canvas').remove();
        document.getElementById('result').appendChild(canvas).setAttribute("id", "canvas");
        /*document.getElementById('ss').setAttribute("href", canvas.toDataURL());
        document.getElementById('ss').setAttribute("download", "sample.png");*/
        //alert(document.getElementById('ss').href)
        var viewImage = document.createElement('img');
        viewImage.setAttribute("id", "downloadImage");
        document.getElementById('result').appendChild(viewImage);
        document.getElementById('downloadImage').setAttribute("src",canvas.toDataURL())
    });
    
}
/*入力内容を表示する関数*/
function display() {
    var loop = '';
    loop += '<p class="gap" id="big"></p>';
    messageArray.forEach(function(elment) {
        loop += elment.replaceAll('&nbsp;', '');
    });
    loop += '<p class="gap" id="large"></p>';
    output.innerHTML = loop;
    alldata = loop;
    setCanvas();
}

function createMessage(category,flg){
    switch(category){
        case 0:
            createStudent(positionCheck(),flg);
            break;
        case 1:
            createTeacher("r_t",true);
            break;
        case 2:
            createComment("c_c",false);
            break;
        case 3:
            createReply("r_r",false);
            break;
        case 4:
            createBonding("r_b",false);
            break;
    }
}

function setCreater(){
    let title = document.getElementById("input_title").value;
    let name = document.getElementById("input_author").value;

    document.getElementById("create_title").innerText = "作品名："+title;
    document.getElementById("creater_name").innerText = "作者名："+name;

    display();
}

function createStudent(category,flg){
    let name = document.getElementById("input_student_name");
    let icon = document.getElementById("input_student_icon");
    let effect = document.getElementById("input_effect_icon");
    let message = document.getElementById("input_student_talk");
    if(message.value != ""){
        if(before == name.value){
            messageArray[messageIdx] = '<p class="gap" id="small"></p>';
        }else{
            messageArray[messageIdx] = '<p class="gap" id="big"></p>';
        }
        before = name.value;
        messageHistory[messageIdx] = name.value;
        if(flg == true){
            messageArray[messageIdx] += '\
        <div class="talk_box" id="'+category+'">\n\
            <div class="icon_box">\n\
                <img src="'+icon.value+'" class="icon">\n\
            </div>\n\
            ';
            if(effect.value != ""){
                messageArray[messageIdx] += '\
            <div class="icon_box">\n\
                <img src="'+effect.value+'" class="icon">\n\
            </div>\n\
            ';
            }
            messageArray[messageIdx] += '\
            <div class="frame">\n\
                <div class="name_box">\n\
                    <div class="name_area">\n\
                        <p class="name">'+name.value+'</p>\n\
                    </div>\n\
                </div>\n\
                <div class="message_box">\n\
                    <div class="message_area" id="'+flg+'">\n\
                        <p class="message">'+split(message.value)+'</p>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
            ';
        }else{
            messageArray[messageIdx] += '\
        <div class="talk_box" id="'+category+'">\n\
            <div class="frame">\n\
                <div class="message_box">\n\
                    <div class="message_area" id="'+flg+'">\n\
                        <p class="message">'+split(message.value)+'</p>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
            ';
        }
        message.value = "";
        //alert(messageArray[messageIdx]);
        messageIdx++;
        display();
    }
    
}

function createTeacher(category, flg){
    let message = document.getElementById("input_teacher_talk");
    if(message.value != ""){
        if(before == "teacher"){
            messageArray[messageIdx] = '<p class="gap" id="small"></p>';
        }else{
            messageArray[messageIdx] = '<p class="gap" id="big"></p>';
        }
        before = "teacher";
        messageHistory[messageIdx] = "teachar";
        messageArray[messageIdx] += '\
        <div class="talk_box" id="'+category+'">\n\
            <div class="frame">\n\
                <div class="message_box">\n\
                    <div class="message_area" id="'+flg+'">\n\
                        <p class="message">'+split(message.value)+'</p>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
            ';
        message.value = "";

        messageIdx++;
        display();
    }
}

function createComment(category, flg){
    let message = document.getElementById("input_comment");
    if(message.value != ""){
        before = "comment";
        messageHistory[messageIdx] = "comment";
        messageArray[messageIdx] = '<p class="gap" id="big"></p>';
        messageArray[messageIdx] += '\
        <div class="talk_box" id="'+category+'">\n\
            <div class="frame">\n\
                <div class="message_box">\n\
                    <div class="message_area" id="'+flg+'">\n\
                        <p class="message">'+split(message.value)+'</p>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        </div>\n\
        ';
        message.value = "";

        messageIdx++;
        display();
    }
}

function createReply(category, flg){
    let message1 = document.getElementById("input_reply1");
    let message2 = document.getElementById("input_reply2");
    let replyFlg = false;

    if(!(message1.value == "" && message2.value == "")){
        before = "reply";
        messageHistory[messageIdx] = "reply";
        if(message1.value == "" && message2.value != ""){
            replyFlg = true;
            message1.value = message2.value;
        }else if(message1.value != "" && message2.value == ""){
            replyFlg = true;
        }

        messageArray[messageIdx] = '<p class="gap" id="big"></p>';
        messageArray[messageIdx] += '\
    <div class="talk_box" id="'+category+'">\n\
	<div class="frame">\n\
		<div class="title_area">\n\
			<text class="left_line" id="l_blue">┃</text>\n\
			<p class="title">返信する</p>\n\
		</div>\n\
		<p class="disp_line" id="b_blue">───────────────────</p>\n\
		<div class="message_box">\n\
            <div class="shadow">\n\
    ';
        if(replyFlg){
            messageArray[messageIdx] += '\
                <div class="message_area" id="'+flg+'">\n\
				    <p class="message">'+split(message1.value)+'</p>\n\
		        </div>\n\
        ';
        }else{
            messageArray[messageIdx] += '\
                <div class="message_area" id="'+flg+'">\n\
				    <p class="message">'+split(message1.value)+'</p>\n\
		        </div>\n\
            </div>\n\
            <div class="shadow">\n\
                <div class="message_area" id="'+flg+'">\n\
				    <p class="message">'+split(message2.value)+'</p>\n\
		        </div>\n\
        ';
        }
        messageArray[messageIdx] += '\
            </div>\n\
		</div>\n\
	</div>\n\
</div>\n\
    ';
        message1.value = "";
        message2.value = "";

        messageIdx++;
        display();
    }

    
}

function createBonding(category, flg){
    let message = document.getElementById("input_bonding_name");

    if(message.value != ""){
        before = "bonding";
    messageHistory[messageIdx] = "bonding";
    messageArray[messageIdx] = '<p class="gap" id="big"></p>';
    messageArray[messageIdx] += '\
<div class="talk_box" id="'+category+'">\n\
	<div class="frame">\n\
		<div class="title_area">\n\
			<text class="left_line" id="l_pink">┃</text>\n\
			<p class="title">絆イベント</p>\n\
		</div>\n\
		<p class="disp_line" id="b_pink">───────────────────</p>\n\
		<div class="message_box">\n\
            <div class="shadow">\n\
                <div class="message_area" id="'+flg+'">\n\
                    <p class="message">'+splitCheck(message.value)+'の絆ストーリーへ</p>\n\
                </div>\n\
            </div>\n\
		</div>\n\
	</div>\n\
</div>\n\
    ';

        messageIdx++;
        display();
    }

    
}

function deleteMessage(){
    if(messageIdx > 0){
        messageArray.pop();
        messageIdx--;
        before = messageHistory[messageIdx];
        display();
    }
}
document.querySelector('#newChara').addEventListener('change', (event) => {
    const file = event.target.files[0]
    //var result = event.target.files[0];
    // fileがundefinedの時にreader.readAsDataURL(file)がエラーになるため、
    // !fileがfalseの場合にreturnする。
    if (!file) return

    const reader = new FileReader()

    reader.onload = (event) => {
        iconCreate(document.getElementById('input_student_icon'),reader.result,document.getElementById("newIcon"));
        document.getElementById('input_student_name').value = "";
    }
    /*reader.addEventListener('load', function() {
         = canvas.toDataURL();
    })*/
    reader.readAsDataURL(file)
})
/*画像の切り抜き＆base64化*/
function iconCreate(target,sorce,idC){
    var canvas=idC;
    var ctx=canvas.getContext("2d");

    var img=new Image();
    img.onload=start;
    img.src=sorce;
    
    function start(){

        canvas.width=img.width;
        canvas.height=img.height;

        // fill canvas with black
        ctx.fillStyle="rgba(0,0,0,0.0)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        // create clipping region which will display portion of image
        ctx.beginPath();
        ctx.arc(img.width/2,img.height/2,img.width/2,0,Math.PI*2);
        ctx.closePath();
        ctx.clip();

        // draw the image into the clipping region
        ctx.drawImage(img,0,0);
        /*// save the context in its unaltered state
        ctx.save();
        // restore the context to its unaltered state
        ctx.restore();*/
        target.value = canvas.toDataURL();
    }
}

function positionCheck(){
    //　ラジオボタンの数だけ判定を繰り返す（ボタンを表すインプットタグがあるので１引く）
    for(var i=0; i<position_s.length;i++){
        // i番目のラジオボタンがチェックされているかを判定
        if(position_s[i].checked){ 
            return position_s[i].value;
        }
    }
}
/*所属を選択すると自動入力をする関数*/
select_afflication.onchange = function(e){
    var result = e.target.value;
    var resultValue = parseFloat(result);

    affiliation_num = resultValue;
    // option要素を削除（方法はいろいろありますが）
    while (0 < select_s.length) {
        select_s.remove(0);
    }

    // option要素を生成
    let idx = 0;
    while (idx < affiliation[affiliation_num].length){
        let option = document.createElement('option');
        option.value = idx;
        option.text = affiliation[affiliation_num][idx][0];
        select_s.appendChild(option);
        idx++;
    }
}
/*エフェクトを選択すると自動入力をする関数*/
select_effect.onchange = function(e){
    var result = e.target.value;
    var resultValue = parseFloat(result);

    document.getElementById('input_effect_icon').value = effectImage[resultValue];
}
/*生徒を選択すると自動入力をする関数*/
select_s.onchange = function(e){
    var result = e.target.value;
    var resultValue = parseFloat(result);
    student_num = resultValue;
   
    iconCreate(document.getElementById('input_student_icon'),affiliation[affiliation_num][student_num][2],document.getElementById("newIcon"));
    document.getElementById('input_student_name').value = affiliation[affiliation_num][student_num][1];
    document.getElementById('input_student_icon').value = affiliation[affiliation_num][student_num][2];
    document.getElementById('input_bonding_name').value = affiliation[affiliation_num][student_num][1];
}

document.querySelector('#input_photo').addEventListener('change', (event) => {
    const file = event.target.files[0];
    var result = event.target.files[0];
    // fileがundefinedの時にreader.readAsDataURL(file)がエラーになるため、
    // !fileがfalseの場合にreturnする。
    if (!file) return

    const reader = new FileReader()

    before = "photo";
    messageHistory[messageIdx] = "photo";

    reader.onload = (event) => {
        document.querySelector('#img').src = event.target.result;
    }

    reader.addEventListener('load', function() {
        messageArray[messageIdx] = '<p class="gap" id="big"></p>';
        messageArray[messageIdx] += '\
<div class="talk_box" id="c_p">\n\
	<div class="frame">\n\
		<div class="photo_box">\n\
            <div class="photo_area">\n\
			    <img src="'+reader.result+'" class="photo">\n\
		    </div>\n\
        </div>\n\
	</div>\n\
</div>\n';
        messageArray[messageIdx] += '<p class="gap" id="big"></p>';
        
        messageIdx++;
        display();
        
    })
    reader.readAsDataURL(file);
})
function split(target){

    let textarea = target;
    textarea = splitCheck(textarea);
    textarea = splitColor(textarea);
    textarea = splitSize(textarea);

    return textarea.split('\n').join('<br>');
}
function inputColor(target,color){
    document.getElementById(target).value += "|"+color+"||End|";
}
function splitColor(target){

    let textarea = target;
    textarea = textarea.split('|Red|').join('<font color=#ff0000>');
    textarea = textarea.split('|Green|').join('<font color=#00ff00>');
    textarea = textarea.split('|Blue|').join('<font color=#0000ff>');
    textarea = textarea.split('|Love|').join('<font color=#ffefef style="text-shadow: 0vw 0vw 1vw #f99, 0vw 0vw 2vw #f99;">');
    textarea = textarea.split('|Blood|').join('<font color=#dd0000 style="text-shadow: 3px 3px 20px #900, -3px -3px 20px #900, -3px 3px 20px #900, 3px -3px 20px #900;">');
    textarea = textarea.split('|Black|').join('<font color=#000 style="text-shadow: 0 0 0.25em #fff, 0 0 0.5em #fff;">');
    textarea = textarea.split('|Glitch|').join('<font color=#fff style="text-shadow: 2.5px 0.5px 0.5px rgba(255, 0, 255, .8), -2.5px -0.5px 0.5px rgba(0, 255, 255, .8)">');
    
    return textarea.split('|End|').join('</font>');
}
function splitCheck(target){

    let textarea = target;
    textarea = textarea.split('<').join('＜');
    textarea = textarea.split('>').join('＞');
    textarea = textarea.split('\\').join('￥');
    
    return textarea;
}
function inputSize(target,size){
    document.getElementById(target).value += "{"+size+"}{End}";
}
function splitSize(target){

    let textarea = target;
    textarea = textarea.split('{Big}').join('<font size="+3">');
    textarea = textarea.split('{Large}').join('<font size="+5">');
    
    return textarea.split('{End}').join('</font>');
}