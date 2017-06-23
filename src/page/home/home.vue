<template>
    <div>
        <head-top :head-title="headTitle" main="true">
             
        </head-top>
        <section id="main">
            <div>
                <tabs flag='true' :tabsParam='tabsParam'></tabs>
                <div class="tabs-body">
                    <div v-if="tabsParam[0].showFlag > 0" >
                        111
                    </div>
                    <div v-if="tabsParam[1].showFlag > 0">
                        222
                    </div>
                    <div v-if="tabsParam[2].showFlag > 0">
                        33
                    </div>
                    <div v-if="tabsParam[3].showFlag > 0">
                        111
                    </div>
                </div>
            </div>
        </section>
        <foot-bottom></foot-bottom>
    </div>
</template>

<script>
import headTop from '../../components/header/head';
import footBottom from '../../components/footer/footer';
import tabs from '../../components/common/tabs'
    export default {
    data(){
        return {
            message:'sdaf',
            headTitle: '',
            tabsParam:[
                {
                    key:'推荐',
                    showFlag:1
                },{
                    key:'热点',
                    showFlag:-1
                },{
                    key:'视频',
                    showFlag:-1
                },{
                    key:'娱乐',
                    showFlag:-1
                },{
                    key:'体育',
                    showFlag:-1
                },{
                    key:'上海',
                    showFlag:-1
                },{
                    key:'搞笑',
                    showFlag:-1
                },{
                    key:'财经',
                    showFlag:-1
                },{
                    key:'科技',
                    showFlag:-1
                },{
                    key:'汽车',
                    showFlag:-1
                },{
                    key:'美图',
                    showFlag:-1
                },{
                    key:'段子',
                    showFlag:-1
                },
            ]
        }
    },
    created(){
    	this.initData();
    },
    components:{
        headTop,
        footBottom,
        tabs
    },
    methods:{
        initData(){
            this.headTitle='头条'
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabs-body{
        background:#fff;
    }
    
</style>