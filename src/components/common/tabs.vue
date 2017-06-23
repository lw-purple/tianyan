<template>
    <div class="tabs" v-if="flag">
        <div class="tabs-nav">
            <ul>
                <li class="tabs-nav-item" v-for="(tab,index) in tabsParam" :class="{active:tab.showFlag >= 0 }" @click="toggleTags(index)"><a href="#">{{tab.key}}</a></li>
            </ul>
        </div>
        
        <div class="tabs-content">
           <slot>2</slot> 
       </div>
    </div>
</template>
<script>
    export default {
        props:{
            flag:{
                type:String,
                required:true,
                twoWay:true    
            },
            tabsParam:{
                type:Array,
                required:true
            },
            
        },
        methods:{
            toggleTags:function (index) {
               let _this = this
               _this.tabsParam.forEach(function(item){
                   item.showFlag = -1;
               })
               _this.tabsParam[index].showFlag = 1;
            }
        },
        data(){
            return {
                
            }
        }
    }
</script>
<style lang="scss" scoped>
 @import '../../style/mixin';
    .active a{
        color:red;
    }
    ul{
        white-space:nowrap;
        @include wh(100%,1.6rem);
        background:#f5f5f5;
        @include cl;
        overflow-x:auto;
    }
   .tabs-nav-item{
        display:inline-block;
        @include wh(2.4rem,100%);
        text-align:center;
        a{
            font-size:0.8rem;
        }
    }
</style>