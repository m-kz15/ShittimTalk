var alldata = "";
var messageIdx = 0;
var output = document.getElementById('output');
var select_afflication = document.getElementById("sel_school");
var select_s = document.getElementById("sel_student");
var select_effect = document.getElementById("sel_effect");
var position_s = document.getElementsByName("position");

var affiliation_num = 0;
var student_num = 0;
var before = "null";

const schools = [
    "所属未選択",
    "アビドス",
    "ゲヘナ",
    "ミレニアム",
    "トリニティ",
    "百鬼夜行",
    "レッドウィンター",
    "山海経",
    "SRT",
    "アリウス",
    "ヴァルキューレ",
    "連邦生徒会",
    "シャーレ",
    "ゲマトリア",
    "モブ",
    "色彩",
    "その他"
];

const not_sel = [
    ["所属が未選択です","",""]
];
const abydos = [
    ["キャラ未選択","",""],
    ["ホシノ","ホシノ","./images/icon/Abydos/hoshino01.webp"],
    ["ホシノ_メモリアル","ホシノ","./images/icon/Abydos/hoshino02.webp"],
    ["シロコ","シロコ","./images/icon/Abydos/shiroko01.webp"],
    ["シロコ_メモリアル","シロコ","./images/icon/Abydos/shiroko02.webp"],
    ["ノノミ","ノノミ","./images/icon/Abydos/nonomi01.webp"],
    ["ノノミ_メモリアル","ノノミ","./images/icon/Abydos/nonomi02.webp"],
    ["セリカ","セリカ","./images/icon/Abydos/serika01.webp"],
    ["セリカ_メモリアル","セリカ","./images/icon/Abydos/serika02.webp"],
    ["アヤネ","アヤネ","./images/icon/Abydos/ayane01.webp"],
    ["アヤネ_メモリアル","アヤネ","./images/icon/Abydos/ayane02.webp"]
];
const gehena = [
    ["キャラ未選択","",""],
    //  風紀委員
    ["ヒナ","ヒナ","./images/icon/Gehena/hina01.webp"],
    ["ヒナ_メモリアル","ヒナ","./images/icon/Gehena/hina02.webp"],
    ["アコ","アコ","./images/icon/Gehena/ako01.webp"],
    ["アコ_メモリアル","アコ","./images/icon/Gehena/ako02.webp"],
    ["イオリ","イオリ","./images/icon/Gehena/iori01.webp"],
    ["イオリ_メモリアル","イオリ","./images/icon/Gehena/iori02.webp"],
    ["チナツ","チナツ","./images/icon/Gehena/thinatsu01.webp"],
    ["チナツ_メモリアル","チナツ","./images/icon/Gehena/thinatsu02.webp"],
    //  便利屋68
    ["アル","アル","./images/icon/Gehena/aru01.webp"],
    ["アル_メモリアル","アル","./images/icon/Gehena/aru02.webp"],
    ["カヨコ","カヨコ","./images/icon/Gehena/kayoko01.webp"],
    ["カヨコ_メモリアル","カヨコ","./images/icon/Gehena/kayoko02.webp"],
    ["ムツキ","ムツキ","./images/icon/Gehena/mutsuki01.webp"],
    ["ムツキ_メモリアル","ムツキ","./images/icon/Gehena/mutsuki02.webp"],
    ["ハルカ","ハルカ","./images/icon/Gehena/haruka01.webp"],
    ["ハルカ_メモリアル","ハルカ","./images/icon/Gehena/haruka02.webp"],
    //  美食研究会
    ["ハルナ","ハルナ","./images/icon/Gehena/haruna01.webp"],
    ["ハルナ_メモリアル","ハルナ","./images/icon/Gehena/haruna02.webp"],
    ["イズミ","イズミ","./images/icon/Gehena/izumi01.webp"],
    ["イズミ_メモリアル","イズミ","./images/icon/Gehena/izumi02.webp"],
    ["アカリ","アカリ","./images/icon/Gehena/akari01.webp"],
    ["アカリ_メモリアル","アカリ","./images/icon/Gehena/akari02.webp"],
    ["ジュンコ","ジュンコ","./images/icon/Gehena/junko01.webp"],
    ["ジュンコ_メモリアル","ジュンコ","./images/icon/Gehena/junko02.webp"],
    //  万魔殿
    ["マコト","マコト","./images/icon/Gehena/makoto01.webp"],
    ["マコト_メモリアル","マコト","./images/icon/Gehena/makoto02.webp"],
    ["イロハ","イロハ","./images/icon/Gehena/iroha01.webp"],
    ["イロハ_メモリアル","イロハ","./images/icon/Gehena/iroha02.webp"],
    ["イブキ","イブキ","./images/icon/Gehena/ibuki01.webp"],
    ["イブキ_メモリアル","イブキ","./images/icon/Gehena/ibuki02.webp"],
    ["サツキ","サツキ","./images/icon/Gehena/satsuki01.webp"],
    ["チアキ","チアキ","./images/icon/Gehena/thiaki01.webp"],
    //  温泉開発部
    ["カスミ","カスミ","./images/icon/Gehena/kasumi01.webp"],
    ["カスミ_メモリアル","カスミ","./images/icon/Gehena/kasumi02.webp"],
    ["メグ","メグ","./images/icon/Gehena/megu01.webp"],
    ["メグ_メモリアル","メグ","./images/icon/Gehena/megu02.webp"],
    //  給食部
    ["フウカ","フウカ","./images/icon/Gehena/huuka01.webp"],
    ["フウカ_メモリアル","フウカ","./images/icon/Gehena/huuka02.webp"],
    ["ジュリ","ジュリ","./images/icon/Gehena/juri01.webp"],
    ["ジュリ_メモリアル","ジュリ","./images/icon/Gehena/juri02.webp"],
    //  医療部
    ["セナ","セナ","./images/icon/Gehena/sena01.webp"],
    ["セナ_メモリアル","セナ","./images/icon/Gehena/sena02.webp"],
    //  帰宅部
    ["キララ","キララ","./images/icon/Gehena/kirara01.webp"],
    ["キララ_メモリアル","キララ","./images/icon/Gehena/kirara02.webp"],
    ["エリカ","エリカ","./images/icon/Gehena/erika01.webp"]
];
const millennium = [
    ["キャラ未選択","",""],
    //  セミナー
    ["ノア","ノア","./images/icon/Millennium/noa01.webp"],
    ["ノア_メモリアル","ノア","./images/icon/Millennium/noa02.webp"],
    ["ユウカ","ユウカ","./images/icon/Millennium/yuuka01.webp"],
    ["ユウカ_メモリアル","ユウカ","./images/icon/Millennium/yuuka02.webp"],
    ["コユキ","コユキ","./images/icon/Millennium/koyuki01.webp"],
    ["コユキ_メモリアル","コユキ","./images/icon/Millennium/koyuki02.webp"],
    //  ゲーム開発部
    ["モモイ","モモイ","./images/icon/Millennium/momoi01.webp"],
    ["モモイ_メモリアル","モモイ","./images/icon/Millennium/momoi02.webp"],
    ["ミドリ","ミドリ","./images/icon/Millennium/midori01.webp"],
    ["ミドリ_メモリアル","ミドリ","./images/icon/Millennium/midori02.webp"],
    ["ユズ","ユズ","./images/icon/Millennium/yuzu01.webp"],
    ["ユズ_メモリアル","ユズ","./images/icon/Millennium/yuzu02.webp"],
    ["アリス","アリス","./images/icon/Millennium/alice01.webp"],
    ["アリス_メモリアル","アリス","./images/icon/Millennium/alice02.webp"],
    //  エンジニア部
    ["ウタハ","ウタハ","./images/icon/Millennium/utaha01.webp"],
    ["ウタハ_メモリアル","ウタハ","./images/icon/Millennium/utaha02.webp"],
    ["コトリ","コトリ","./images/icon/Millennium/kotori01.webp"],
    ["コトリ_メモリアル","コトリ","./images/icon/Millennium/kotori02.webp"],
    ["ヒビキ","ヒビキ","./images/icon/Millennium/hibiki01.webp"],
    ["ヒビキ_メモリアル","ヒビキ","./images/icon/Millennium/hibiki02.webp"],
    //  特異現象捜査部
    ["ヒマリ","ヒマリ","./images/icon/Millennium/himari01.webp"],
    ["ヒマリ_メモリアル","ヒマリ","./images/icon/Millennium/himari02.webp"],
    ["エイミ","エイミ","./images/icon/Millennium/eimi01.webp"],
    ["エイミ_メモリアル","エイミ","./images/icon/Millennium/eimi02.webp"],
    //  ヴェリタス
    ["ハレ","ハレ","./images/icon/Millennium/hare01.webp"],
    ["ハレ_メモリアル","ハレ","./images/icon/Millennium/hare02.webp"],
    ["コタマ","コタマ","./images/icon/Millennium/kotama01.webp"],
    ["コタマ_メモリアル","コタマ","./images/icon/Millennium/kotama02.webp"],
    ["チヒロ","チヒロ","./images/icon/Millennium/tsihiro01.webp"],
    ["チヒロ_メモリアル","チヒロ","./images/icon/Millennium/tsihiro02.webp"],
    ["マキ","マキ","./images/icon/Millennium/maki01.webp"],
    ["マキ_メモリアル","マキ","./images/icon/Millennium/maki02.webp"],
    //  C&C
    ["ネル","ネル","./images/icon/Millennium/neru01.webp"],
    ["ネル_メモリアル","ネル","./images/icon/Millennium/neru02.webp"],
    ["アスナ","アスナ","./images/icon/Millennium/asuna01.webp"],
    ["アスナ_メモリアル","アスナ","./images/icon/Millennium/asuna02.webp"],
    ["アカネ","アカネ","./images/icon/Millennium/akane01.webp"],
    ["アカネ_メモリアル","アカネ","./images/icon/Millennium/akane02.webp"],
    ["カリン","カリン","./images/icon/Millennium/karin01.webp"],
    ["カリン_メモリアル","カリン","./images/icon/Millennium/karin02.webp"],
    ["トキ","トキ","./images/icon/Millennium/toki01.webp"],
    ["トキ_メモリアル","トキ","./images/icon/Millennium/toki02.webp"],
    //  トレーニング部
    ["スミレ","スミレ","./images/icon/Millennium/sumire01.webp"],
    ["スミレ_メモリアル","スミレ","./images/icon/Millennium/sumire02.webp"],
    //  ビックマザー
    ["リオ","リオ","./images/icon/Millennium/rio01.webp"]
    
];
const trinity = [
    ["キャラ未選択","",""],
    //  ティーパーティ
    ["ナギサ","ナギサ","./images/icon/Trinity/nagisa01.webp"],
    ["ナギサ_メモリアル","ナギサ","./images/icon/Trinity/nagisa02.webp"],
    ["ミカ","ミカ","./images/icon/Trinity/mika01.webp"],
    ["ミカ_メモリアル","ミカ","./images/icon/Trinity/mika02.webp"],
    ["セイア","セイア","./images/icon/Trinity/seia01.webp"],
    //  補修授業部
    ["ヒフミ","ヒフミ","./images/icon/Trinity/hihumi01.webp"],
    ["ヒフミ_メモリアル","ヒフミ","./images/icon/Trinity/hihumi02.webp"],
    ["アズサ","アズサ","./images/icon/Trinity/azusa01.webp"],
    ["アズサ_メモリアル","アズサ","./images/icon/Trinity/azusa02.webp"],
    ["コハル","コハル","./images/icon/Trinity/koharu01.webp"],
    ["コハル_メモリアル","コハル","./images/icon/Trinity/koharu02.webp"],
    ["ハナコ","ハナコ","./images/icon/Trinity/hanako01.webp"],
    ["ハナコ_メモリアル","ハナコ","./images/icon/Trinity/hanako02.webp"],
    //  正義実現員会
    ["ツルギ","ツルギ","./images/icon/Trinity/tsurugi01.webp"],
    ["ツルギ_メモリアル","ツルギ","./images/icon/Trinity/tsurugi02.webp"],
    ["ハスミ","ハスミ","./images/icon/Trinity/hasumi01.webp"],
    ["ハスミ_メモリアル","ハスミ","./images/icon/Trinity/hasumi02.webp"],
    ["マシロ","マシロ","./images/icon/Trinity/mashiro01.webp"],
    ["マシロ_メモリアル","マシロ","./images/icon/Trinity/mashiro02.webp"],
    ["イチカ","イチカ","./images/icon/Trinity/itika01.webp"],
    ["イチカ_メモリアル","イチカ","./images/icon/Trinity/itika02.webp"],
    //  シスターフッド
    ["サクラコ","サクラコ","./images/icon/Trinity/sakurako01.webp"],
    ["サクラコ_メモリアル","サクラコ","./images/icon/Trinity/sakurako02.webp"],
    ["ヒナタ","ヒナタ","./images/icon/Trinity/hinata01.webp"],
    ["ヒナタ_メモリアル","ヒナタ","./images/icon/Trinity/hinata02.webp"],
    ["マリー","マリー","./images/icon/Trinity/mary01.webp"],
    ["マリー_メモリアル","マリー","./images/icon/Trinity/mary02.webp"],
    //  救護騎士団
    ["ミネ","ミネ","./images/icon/Trinity/mine01.webp"],
    ["ミネ_メモリアル","ミネ","./images/icon/Trinity/mine02.webp"],
    ["セリカ","セリカ","./images/icon/Trinity/serika01.webp"],
    ["セリカ_メモリアル","セリカ","./images/icon/Trinity/serika02.webp"],
    ["ハナエ","ハナエ","./images/icon/Trinity/hanae01.webp"],
    ["ハナエ_メモリアル","ハナエ","./images/icon/Trinity/hanae02.webp"],
    //  図書委員会
    ["ウイ","ウイ","./images/icon/Trinity/ui01.webp"],
    ["ウイ_メモリアル","ウイ","./images/icon/Trinity/ui02.webp"],
    ["シミコ","シミコ","./images/icon/Trinity/shimiko01.webp"],
    ["シミコ_メモリアル","シミコ","./images/icon/Trinity/shimiko02.webp"],
    //  放課後スイーツ部
    ["ナツ","ナツ","./images/icon/Trinity/natsu01.webp"],
    ["ナツ_メモリアル","ナツ","./images/icon/Trinity/natsu02.webp"],
    ["カズサ","カズサ","./images/icon/Trinity/kazusa01.webp"],
    ["カズサ_メモリアル","カズサ","./images/icon/Trinity/kazusa02.webp"],
    ["アイリ","アイリ","./images/icon/Trinity/airi01.webp"],
    ["アイリ_メモリアル","アイリ","./images/icon/Trinity/airi02.webp"],
    ["ヨシミ","ヨシミ","./images/icon/Trinity/yoshimi01.webp"],
    ["ヨシミ_メモリアル","ヨシミ","./images/icon/Trinity/yoshimi02.webp"],
    //  トリニティ自警団
    ["スズミ","スズミ","./images/icon/Trinity/suzumi01.webp"],
    ["スズミ_メモリアル","スズミ","./images/icon/Trinity/suzumi02.webp"],
    ["レイサ","レイサ","./images/icon/Trinity/reisa01.webp"],
    ["レイサ_メモリアル","レイサ","./images/icon/Trinity/reisa02.webp"],
];
const hyakki = [
    ["キャラ未選択","",""],
    //  陰陽部
    ["カホ","カホ","./images/icon/Hyakki_Night/kaho01.webp"],
    ["カホ_メモリアル","カホ","./images/icon/Hyakki_Night/kaho02.webp"],
    ["チセ","チセ","./images/icon/Hyakki_Night/thise01.webp"],
    ["チセ_メモリアル","チセ","./images/icon/Hyakki_Night/thise02.webp"],
    ["ニヤ","ニヤ","./images/icon/Hyakki_Night/niya01.webp"],
    //  お祭り運営委員会
    ["シズコ","シズコ","./images/icon/Hyakki_Night/shizuko01.webp"],
    ["シズコ_メモリアル","シズコ","./images/icon/Hyakki_Night/shizuko02.webp"],
    ["フィーナ","フィーナ","./images/icon/Hyakki_Night/fina01.webp"],
    ["フィーナ_メモリアル","フィーナ","./images/icon/Hyakki_Night/fina02.webp"],
    //  修行部
    ["ツバキ","ツバキ","./images/icon/Hyakki_Night/tsubaki01.webp"],
    ["ツバキ_メモリアル","ツバキ","./images/icon/Hyakki_Night/tsubaki02.webp"],
    ["ミモリ","ミモリ","./images/icon/Hyakki_Night/mimori01.webp"],
    ["ミモリ_メモリアル","ミモリ","./images/icon/Hyakki_Night/mimori02.webp"],
    ["カエデ","カエデ","./images/icon/Hyakki_Night/kaede01.webp"],
    ["カエデ_メモリアル","カエデ","./images/icon/Hyakki_Night/kaede02.webp"],
    //  忍術研究部
    ["ミチル","ミチル","./images/icon/Hyakki_Night/mitsiru01.webp"],
    ["ミチル_メモリアル","ミチル","./images/icon/Hyakki_Night/mitsiru02.webp"],
    ["イズナ","イズナ","./images/icon/Hyakki_Night/izuna01.webp"],
    ["イズナ_メモリアル","イズナ","./images/icon/Hyakki_Night/izuna02.webp"],
    ["ツクヨ","ツクヨ","./images/icon/Hyakki_Night/tsukuyo01.webp"],
    ["ツクヨ_メモリアル","ツクヨ","./images/icon/Hyakki_Night/tsukuyo02.webp"],
    //  百花繚乱紛争調停委員会
    ["ナグサ","ナグサ","./images/icon/Hyakki_Night/nagusa01.webp"],
    ["キキョウ","キキョウ","./images/icon/Hyakki_Night/kikyou01.webp"],
    ["キキョウ_メモリアル","キキョウ","./images/icon/Hyakki_Night/kikyou02.webp"],
    ["レンゲ","レンゲ","./images/icon/Hyakki_Night/rennge01.webp"],
    ["レンゲ_メモリアル","レンゲ","./images/icon/Hyakki_Night/rennge02.webp"],
    ["ユカリ","ユカリ","./images/icon/Hyakki_Night/yukari01.webp"],
    ["ユカリ_メモリアル","ユカリ","./images/icon/Hyakki_Night/yukari02.webp"],
    //  停学中
    ["ワカモ","ワカモ","./images/icon/Hyakki_Night/wakamo01.webp"],
    ["ワカモ_メモリアル","ワカモ","./images/icon/Hyakki_Night/wakamo02.webp"],
];
const redwinter = [
    ["キャラ未選択","",""],
    //  事務局
    //  工務部
    //  227号特別クラス
    //  知識解放戦線
    //  出版部
    ["未実装","","./images/icon/Red_Winter/chara.webp"]
]
const sankai = [
    ["キャラ未選択","",""],
    //  玄龍門
    //  錬丹術研究会
    //  梅花園
    //  玄武商会
    ["未実装","","./images/icon/Sankai_Sutra/chara.webp"]
];

const srt = [
    ["キャラ未選択","",""],
    //  ラビット
    //  フォックス
    ["未実装","","./images/icon/SRT/chara.webp"]
];
const arius = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Arius/chara.webp"]
];
const valkyrie = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Valkyrie/chara.webp"]
];
const renpou = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Renpou/chara.webp"]
];
const schale = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Schale/chara.webp"]
];
const gematria = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Gematria/chara.webp"]
];
const mob = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Mob/chara.webp"]
];
const hue = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Hue/chara.webp"]
];
const another = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Another/chara.webp"]
];
const kaiser = [
    ["キャラ未選択","",""],
    ["未実装","","./images/icon/Kaiser/chara.webp"],
]
const affiliation = [
    not_sel,
    abydos,
    gehena,
    millennium,
    trinity,
    hyakki,
    redwinter,
    sankai,
    srt,
    arius,
    valkyrie,
    renpou,
    schale,
    gematria,
    mob,
    kaiser,
    hue,
    another
];
const effectImage = [
    "",
    "./images/ui/bag2.png",
    "./images/ui/blood2.png",
    "./images/ui/blood3.png",
    "./images/ui/blood1.png"
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
        document.getElementById('ss').setAttribute("href", canvas.toDataURL());
        document.getElementById('ss').setAttribute("download", "sample.png");
        //alert(document.getElementById('ss').href)
        var viewImage = document.createElement('img');
        viewImage.setAttribute("id", "downloadImage");
        document.getElementById('result').appendChild(viewImage);
        document.getElementById('downloadImage').setAttribute("src",canvas.toDataURL())
    });
}

window.onload = function(){
    // option要素を削除（方法はいろいろありますが）
    while (0 < select_afflication.length) {
        select_afflication.remove(0);
    }
    for(let i = 0; i < schools.length; i++){
        let option = document.createElement('option');
        option.value = i;
        option.text = schools[i];
        select_afflication.appendChild(option);
    }
    for(let i = 1; i <= 3; i++){
        Repository.keyName = "Shittim_data"+i.toString();
        Repository.restore();
        if(Repository.data.MsgList.length != 0){
            document.getElementById("data"+i.toString()).innerText = Repository.data.Title;
        }else{
            document.getElementById("data"+i.toString()).innerText = "データ無し";
        }
        
    }
    Repository.keyName = '';
    Repository.data = {
        Title: "",
        UserName: "",
        MsgList: [],
        MsgHistory: []
    }
}

/*入力内容を表示する関数*/
function display() {
    var loop = '';
    loop += '<p class="gap" id="big"></p>';
    Repository.data.MsgList.forEach(function(elment) {
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
    Repository.data.Title = document.getElementById("input_title").value;
    Repository.data.UserName = document.getElementById("input_author").value;

    document.getElementById("create_title").innerText = "作品名："+Repository.data.Title;
    document.getElementById("creater_name").innerText = "作者名："+Repository.data.UserName;

    display();
}

function createStudent(category,flg){
    let name = document.getElementById("input_student_name");
    let icon = document.getElementById("input_student_icon");
    let effect = document.getElementById("input_effect_icon");
    let message = document.getElementById("input_student_talk");
    if(message.value != ""){
        if(before == category+":"+name.value){
            Repository.data.MsgList[messageIdx] = '<p class="gap" id="small"></p>';
        }else{
            Repository.data.MsgList[messageIdx] = '<p class="gap" id="big"></p>';
        }
        before = category+":"+name.value;
        Repository.data.MsgHistory[messageIdx] = category+":"+name.value;
        if(flg == true){
            Repository.data.MsgList[messageIdx] += '\
        <div class="talk_box" id="'+category+'">\n\
            <div class="icon_box">\n\
                <img src="'+icon.value+'" class="icon">\n\
            </div>\n\
            ';
            if(effect.value != ""){
                Repository.data.MsgList[messageIdx] += '\
            <div class="icon_box">\n\
                <img src="'+effect.value+'" class="icon">\n\
            </div>\n\
            ';
            }
            Repository.data.MsgList[messageIdx] += '\
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
            Repository.data.MsgList[messageIdx] += '\
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
        //alert(Repository.data.MsgList[messageIdx]);
        messageIdx++;
        display();
    }
    
}

function createTeacher(category, flg){
    let message = document.getElementById("input_teacher_talk");
    if(message.value != ""){
        if(before == "teacher"){
            Repository.data.MsgList[messageIdx] = '<p class="gap" id="small"></p>';
        }else{
            Repository.data.MsgList[messageIdx] = '<p class="gap" id="big"></p>';
        }
        before = "teacher";
        Repository.data.MsgHistory[messageIdx] = "teacher";
        Repository.data.MsgList[messageIdx] += '\
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
        Repository.data.MsgHistory[messageIdx] = "comment";
        Repository.data.MsgList[messageIdx] = '<p class="gap" id="big"></p>';
        Repository.data.MsgList[messageIdx] += '\
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
        Repository.data.MsgHistory[messageIdx] = "reply";
        if(message1.value == "" && message2.value != ""){
            replyFlg = true;
            message1.value = message2.value;
        }else if(message1.value != "" && message2.value == ""){
            replyFlg = true;
        }

        Repository.data.MsgList[messageIdx] = '<p class="gap" id="big"></p>';
        Repository.data.MsgList[messageIdx] += '\
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
            Repository.data.MsgList[messageIdx] += '\
                <div class="message_area" id="'+flg+'">\n\
				    <p class="message">'+split(message1.value)+'</p>\n\
		        </div>\n\
        ';
        }else{
            Repository.data.MsgList[messageIdx] += '\
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
        Repository.data.MsgList[messageIdx] += '\
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
    Repository.data.MsgHistory[messageIdx] = "bonding";
    Repository.data.MsgList[messageIdx] = '<p class="gap" id="big"></p>';
    Repository.data.MsgList[messageIdx] += '\
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
        Repository.data.MsgList.pop();
        messageIdx--;
        if(messageIdx > 0){
            before = Repository.data.MsgHistory[messageIdx-1];
        }else{
            before = "null";
        }
        
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
    Repository.data.MsgHistory[messageIdx] = "photo";

    reader.onload = (event) => {
        document.querySelector('#img').src = event.target.result;
    }

    reader.addEventListener('load', function() {
        Repository.data.MsgList[messageIdx] = '<p class="gap" id="large"></p>';
        Repository.data.MsgList[messageIdx] += '\
<div class="talk_box" id="c_p">\n\
	<div class="frame">\n\
		<div class="photo_box">\n\
            <div class="photo_area">\n\
			    <img src="'+reader.result+'" class="photo">\n\
		    </div>\n\
        </div>\n\
	</div>\n\
</div>\n';
        Repository.data.MsgList[messageIdx] += '<p class="gap" id="big"></p>';
        Repository.data.MsgList[messageIdx] += '<p class="gap" id="small"></p>';
        
        messageIdx++;
        display();
        
    })
    reader.readAsDataURL(file);
})
function split(target){

    let textarea = target;
    
    textarea = splitCheck(textarea);
    textarea = displace(textarea);
    textarea = splitColor(textarea);
    textarea = splitSize(textarea);
    textarea = splitFont(textarea);
    
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
    textarea = textarea.split('|Black|').join('<font color=#000 style="text-shadow: 0 0 0.1em #fff, 0 0 0.2em #fff, 0 0 1em #fff, 0 0 1.5em #fff;">');
    textarea = textarea.split('|Glitch|').join('<font color=#fff style="text-shadow: 2.5px 0.5px 0.5px rgba(255, 0, 255, .8), -2.5px -0.5px 0.5px rgba(0, 255, 255, .8)">');
    textarea = textarea.split('|Vibrate|').join('<font color=#fff style="text-shadow: 2.5px 0.1em rgba(255, 255, 255, .4), -2.5px -0.2em rgba(200, 200, 200, .4), 0.2em 0.05em rgba(255, 255, 255, .4)">');
    
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
function inputFont(target,type){
    document.getElementById(target).value = "["+type+"]"+document.getElementById(target).value+"[End]";
}
function splitFont(target){

    let textarea = target;
    textarea = textarea.split('[serif]').join('<font face="serif" style="font-weight:bold;">');
    textarea = textarea.split('[sans-serif]').join('<font face="sans-serif" style="font-weight:bold;">');
    
    return textarea.split('[End]').join('</font>');
}
function inputDisplace(target){
    document.getElementById(target).value = "(!dis!)"+document.getElementById(target).value;
}
function displace(target){
    if(target.includes('(!dis!)')){

        target = target.split('(!dis!)').join('');
        target = target.split('|Red|').join('');
        target = target.split('|Blue|').join('');
        target = target.split('|Green|').join('');
        target = target.split('|Love|').join('');
        target = target.split('|Blood|').join('');
        target = target.split('|Black|').join('');
        target = target.split('|Glitch|').join('');
        target = target.split('|Vibrate|').join('');
        target = target.split('|End|').join('');
        target = target.split('{Big}').join('');
        target = target.split('{Large}').join('');
        target = target.split('{End}').join('');
        target = target.split('[serif]').join('');
        target = target.split('[sans-serif]').join('');
        target = target.split('[End]').join('');

        let ary = target.split('');
        let result = "";

        for(let i = 0; i < ary.length; i++){
            ary[i] = '<font style="transform:rotate('+(Math.floor(Math.random() * 30) - 15)+'deg); font-size:'+(Math.floor(Math.random() * 12) + 14)+'px;">'+ary[i]+'</font>';
            result += ary[i];
        }
        return result;
    }else{
        return target;
    }
    
}

window.onbeforeunload = function () {
    return "";
}
function setKey(num){
    Repository.keyName = "Shittim_data"+num;
    document.getElementById("now").innerHTML = "選択されているデータ：<font color=#ff0000>"+num+"</font>";
}
document.getElementById('save').addEventListener('click', function() {
    if(Repository.keyName == ''){
        alert("保存先が選択されていません。");
    }else if(Repository.data.MsgList.length == 0){
        alert("なにも入力されてません。")
    }else if(Repository.data.Title == "" || Repository.data.UserName == ""){
        alert("作品名または作者名が入力されていません。")
    }else{
        let n = Repository.keyName;
        Repository.save();
        for(let i = 1; i <= 3; i++){
            Repository.keyName = "Shittim_data"+i.toString();
            Repository.restore();
            if(Repository.data.MsgList.length != 0){
                document.getElementById("data"+i.toString()).innerText = Repository.data.Title;
            }else{
                document.getElementById("data"+i.toString()).innerText = "データ無し";
            }
        }
        Repository.keyName = n;
        Repository.restore();
        alert("データを保存しました。");
    }
    
    /*const blob = new Blob([alldata], {
        "type": "text/plain"
    });
    document.getElementById('save').href = window.URL.createObjectURL(blob);*/
})

document.getElementById('load').addEventListener('click', function() {
    if(Repository.keyName == ""){
        alert("復元先が選択されていません。");
    }else{
        Repository.restore();
        if(Repository.data.MsgList.length == 0){
            alert("復元できるデータがありません。")
        }else{
            
            messageIdx = Repository.data.MsgList.length;
            //alert(Repository.data.MsgHistory[messageIdx-1])
            before = Repository.data.MsgHistory[messageIdx-1];
            document.getElementById("create_title").innerText = "作品名："+Repository.data.Title;
            document.getElementById("creater_name").innerText = "作者名："+Repository.data.UserName;
            display();
            alert("データを復元しました。");
        }
        
    }
    
    /*const blob = new Blob([alldata], {
        "type": "text/plain"
    });
    document.getElementById('save').href = window.URL.createObjectURL(blob);*/
})
document.getElementById('remove').addEventListener('click', function() {
    if(Repository.keyName == ""){
        alert("削除対象が選択されていません。");
    }else{
        if(confirm("本当に削除しますか？\r\n削除すると復元ができなくなります。")){
            Repository.remove();
            let n = Repository.keyName;
            for(let i = 1; i <= 3; i++){
                Repository.keyName = "Shittim_data"+i.toString();
                Repository.restore();
                if(Repository.data.MsgList.length != 0){
                    document.getElementById("data"+i.toString()).innerText = Repository.data.Title;
                }else{
                    document.getElementById("data"+i.toString()).innerText = "データ無し";
                }
            }
            Repository.keyName = n;
            Repository.restore();
            alert("データを削除しました。");
        }
    }
})
/*document.getElementById('load').addEventListener('change', function(e) {
    var result = e.target.files[0];
    var reader = new FileReader();
    reader.readAsText(result);
    reader.addEventListener('load', function() {
        messageIdx = 0;
        Repository.data.MsgList[messageIdx] = reader.result;
        display();
        messageIdx++;
    })
})*/


