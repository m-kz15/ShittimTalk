var alldata = "";
var messageArray = [];
var messageIdx = 0;
var messageHistory = [];
var output = document.getElementById('output');
var form_s = document.forms.students;
var select_afflication = document.getElementById("sel_school");
var select_s = document.getElementById("sel_student");
var position_s = document.getElementsByName("position");
var btn1 = document.getElementById("btn1");

var affiliation_num = 0;
var student_num = 0;
var before = "null";

const not_sel = [
    ["所属を選択してください","",""]
];
const abydos = [
    ["キャラを選択してください","",""],
    ["ホシノ","ホシノ","data:image/webp;base64,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"],
    ["ホシノ_メモリアル","ホシノ","./icon/Abydos/chara.png"]
];
const gehena = [
    ["キャラを選択してください","",""],
    ["ヒナ","ヒナ","./icon/Abydos/chara.png"]
];
const millennium = [
    ["キャラを選択してください","",""],
    ["ノア","ノア","./icon/Abydos/chara.png"]
];
const trinity = [
    ["キャラを選択してください","",""],
    ["ナギサ","ナギサ","./icon/Abydos/chara.png"]
];
const hyakki = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const sankai = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const srt = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const alius = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const varru = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const renpou = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const syare = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const gema = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const mobu = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const sikisai = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
];
const hoka = [
    ["キャラを選択してください","",""],
    ["所属を選択してください","",""]
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

    document.getElementById("create_title").innerText = title;
    document.getElementById("creater_name").innerText = name;

    display();
}

function createStudent(category,flg){
    let name = document.getElementById("input_student_name").value;
    let icon = document.getElementById("input_student_icon").value;
    let message = document.getElementById("input_student_talk").value;
    if(before == name){
        messageArray[messageIdx] = '<p class="gap" id="small"></p>';
    }else{
        messageArray[messageIdx] = '<p class="gap" id="big"></p>';
    }
    before = name;
    messageHistory[messageIdx] = name;
    if(flg == true){
        messageArray[messageIdx] += '\
    <div class="talk_box" id="'+category+'">\n\
        <div class="icon_box">\n\
            <img src="'+icon+'" class="icon">\n\
        </div>\n\
        <div class="frame">\n\
            <div class="name_box">\n\
                <div class="name_area">\n\
                    <p class="name">'+name+'</p>\n\
                </div>\n\
            </div>\n\
            <div class="message_box">\n\
                <div class="message_area" id="'+flg+'">\n\
                    <p class="message">'+split(message)+'</p>\n\
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
                    <p class="message">'+split(message)+'</p>\n\
                </div>\n\
            </div>\n\
        </div>\n\
    </div>\n\
        ';
    }
    //alert(messageArray[messageIdx]);
    messageIdx++;
    display();
}

function createTeacher(category, flg){
    let message = document.getElementById("input_teacher_talk").value;
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
                    <p class="message">'+split(message)+'</p>\n\
                </div>\n\
            </div>\n\
        </div>\n\
    </div>\n\
        ';
    
    messageIdx++;
    display();
}

function createComment(category, flg){
    let message = document.getElementById("input_comment").value;

    before = "comment";
    messageHistory[messageIdx] = "comment";
    messageArray[messageIdx] = '<p class="gap" id="big"></p>';
    messageArray[messageIdx] += '\
    <div class="talk_box" id="'+category+'">\n\
        <div class="frame">\n\
            <div class="message_box">\n\
                <div class="message_area" id="'+flg+'">\n\
                    <p class="message">'+split(message)+'</p>\n\
                </div>\n\
            </div>\n\
        </div>\n\
    </div>\n\
    ';

    messageIdx++;
    display();
}

function createReply(category, flg){
    let message1 = document.getElementById("input_reply1").value;
    let message2 = document.getElementById("input_reply2").value;
    let replyFlg = false;

    before = "reply";
    messageHistory[messageIdx] = "reply";
    if(message1 == "" && message2 != ""){
        replyFlg = true;
        message1 = message2;
    }else if(message1 != "" && message2 == ""){
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
		<p class="disp_line" id="b_blue">──────────────────</p>\n\
		<div class="message_box">\n\
            <div class="shadow">\n\
    ';
    if(replyFlg){
        messageArray[messageIdx] += '\
                <div class="message_area" id="'+flg+'">\n\
				    <p class="message">'+split(message1)+'</p>\n\
		        </div>\n\
        ';
    }else{
        messageArray[messageIdx] += '\
                <div class="message_area" id="'+flg+'">\n\
				    <p class="message">'+split(message1)+'</p>\n\
		        </div>\n\
            </div>\n\
            <div class="shadow">\n\
                <div class="message_area" id="'+flg+'">\n\
				    <p class="message">'+split(message2)+'</p>\n\
		        </div>\n\
        ';
    }
    messageArray[messageIdx] += '\
            </div>\n\
		</div>\n\
	</div>\n\
</div>\n\
    ';
    messageIdx++;
    display();
}

function createBonding(category, flg){
    let message = document.getElementById("input_bonding_name").value;

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
		<p class="disp_line" id="b_pink">──────────────────</p>\n\
		<div class="message_box">\n\
            <div class="shadow">\n\
                <div class="message_area" id="'+flg+'">\n\
                    <p class="message">'+message+'の絆ストーリーへ</p>\n\
                </div>\n\
            </div>\n\
		</div>\n\
	</div>\n\
</div>\n\
    ';
    messageIdx++;
    display();
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
    const file = event.target.files[0]
    var result = event.target.files[0];
    // fileがundefinedの時にreader.readAsDataURL(file)がエラーになるため、
    // !fileがfalseの場合にreturnする。
    if (!file) return

    const reader = new FileReader()

    before = "photo";
    messageHistory[messageIdx] = "photo";

    reader.onload = (event) => {
        document.querySelector('#img').src = event.target.result
    }

    reader.addEventListener('load', function() {
        messageArray[messageIdx] = '\
<div class="talk_box" id="c_p">\n\
	<div class="frame">\n\
		<div class="photo_box">\n\
            <div class="photo_area">\n\
			    <img src="'+reader.result+'" class="photo">\n\
		    </div>\n\
        </div>\n\
	</div>\n\
</div>\n';
        messageIdx++;
        display();
        
    })
    reader.readAsDataURL(file)
})
function split(target){

    let textarea = target;

    return textarea.split('\n').join('<br>');
}
