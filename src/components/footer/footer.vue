<template>
    <section id="foot_bottom">
        <section  class="foot_item" @click="gotoPage('/wifi')">
        	<icon name="wifi"></icon>
            <span>连接</span>
        </section>
        <section  class="foot_item" @click="gotoPage('/refresh')">
        	<icon name="refresh"></icon>
            <span>刷新</span>
        </section>
        <section  class="foot_item" @click="gotoPage('/video')">
        	<icon name="play-circle-o"></icon>
            <span>视频</span>
        </section>
        <section  class="foot_item" @click="gotoPage('/user')">
        	<icon name="user-o"></icon>
            <span>我的</span>
        </section>
    </section>
</template>
<script>
    import {mapState} from 'vuex';
    import Icon from 'vue-awesome/components/Icon'
    export default{
        data(){
            return{

            }
        },
        mounted(){

        },
        components:{
            Icon
        },
        methods:{
            gotoPage(path){
                this.$router.push(path)
            }
        }
    }
    // scoped 限制样式只在本页面使用
</script>
<style lang="scss" scoped>
@import '../../style/mixin';
    #foot_bottom{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 1.95rem);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    .foot_item{
        flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;
        svg{
			margin-top: .3rem; 
            @include wh(.8rem, .8rem);
        }
        span{
            @include sc(.50rem, #666);
        }
    }
</style>