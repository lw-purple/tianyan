<template>
    <header id="head_top">
        <router-link to="/home" v-if="main" >
                <icon name="wifi"  class="head_wifi"></icon>
        </router-link>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <icon name="back"  class="head_wifi"></icon>
        </section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <router-link to="/home" v-if="main" >
            <icon name="search"  class="head_search"></icon>
            </router-link>
            <router-link to="/home" v-if="main" >
            <icon name="camera-retro" class="head_signIn"></icon>
        </router-link>
    </header>
</template>


<script>
    import {mapState, mapActions} from 'vuex'
    import Icon from 'vue-awesome/components/Icon'
    export default {
    	data(){
            return{

            }
        },
        mounted(){
            //获取用户信息
            // this.getUserInfo();

        },
        components:{
            Icon
        },
        props: ['main', 'headTitle', 'goBack'],
        computed: {
            // ...mapState([
            //     'userInfo'
            // ]),
        },
        methods: {
            // ...mapActions([
            //     'getUserInfo'
            // ]),
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #head_top{
        background-color: $red;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
        .head_wifi{
            left:0.4rem;
            font-weight:400;
            @include sc(0.7rem,#fff);
            @include wh(.7rem, 0.7rem);
            @include ct;
        }
        .head_search{
            right:1.5rem;
            @include wh(.7rem, .7rem);
            @include ct;
            @include sc(0.7rem,#fff);
        }
        .head_signIn{
            right:0.4rem;
            font-weight:400;
            @include sc(0.7rem,#fff);
            @include wh(.7rem, 0.7rem);
            @include ct;
        }
    }
    .head_goback{
        left: 0.4rem;
        @include wh(0.6rem, 1rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
</style>
