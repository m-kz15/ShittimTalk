var Repository = {

    keyName : "",

    data: {
        Title: "",
        UserName: "",
        MsgList: [],                //メッセージリスト
        MsgHistory: []              //履歴リスト
    },

    restore: function() {
        var storageData = WebStorage.get(this.keyName);
        if (storageData != null) {
            this.data = storageData;
        }else{
            this.data = {
                Title: "",
                UserName: "",
                MsgList: [],
                MsgHistory: []
            }
        }
    },
    save: function() {
        WebStorage.save(this.keyName, this.data);
    },
    isRestored : function() {
        return this.data.MsgList.length > 0;
    },
    initialize : function () {
        this.restore();
    },
    remove: function() {
        WebStorage.remove(this.keyName);
        /*this.data = {
            Title: "",
            UserName: "",
            MsgList: [],
            MsgHistory: []
        }*/
    },
    getTitle : function(){
        return this.data.Title;
    },
    getUserName : function(){
        return this.data.UserName;
    },
    getMsgList : function(){
        return this.data.MsgList;
    },
    getHistory: function(){
        return this.data.MsgHistory;
    }
    /*getCircleName : function(cd) {
        var item = getItemfromList(this.data.CircleNameList, 'xxxxx', cd);
        return item == null ? '': item.yyyyyy + '：' + item.zzzzzz;
    },
    getSaenaiSikyKish: function (sikyKishKbn) {
        return getItemfromList(this.data.SaenaiKishList, 'kishKbn', sikyKishKbn);
    },
    getComboboxItem: function (comboboxName, valueFieldName, value) {
        var list = this.data.combobox[comboboxName];
        return getItemfromList(list || [], valueFieldName, value);
    },
    getshinkanInfo: function(){
        return this.data.shinkanInfo;
    }*/
}