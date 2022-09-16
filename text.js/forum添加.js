new Vue({
    el:'#forum',
    data:{
        datalist:['刺客信条奥德赛','赛博朋克2077','巫师3:狂猎','仁王2','APEX:英雄','只狼:影逝二度'],
        mytext:'言吾欲言'
    },
    methods:{
        handleAdd(){
            this.datalist.push(this.mytext)
            this.mytext = ''
        },
        
        handleDel(index){
            console.log('del',index) 

            this.datalist.splice(index,1)
        }

    }
})