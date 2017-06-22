<template>
    <div>
        <head-top :head-title="headTitle" main="true">
             
        </head-top>
        <foot-bottom></foot-bottom>
    </div>
</template>

<script>
import headTop from '../../components/header/head';
import footBottom from '../../components/footer/footer';

    export default {
    data(){
        return {
            message:'sdaf',
            headTitle: '',
        }
    },
    created(){
    	this.initData();
    },
    components:{
        headTop,
        footBottom
    },
    methods:{
        initData(){
            this.headTitle='头条'
        }
    }
}
</script>
<style lang="scss" scoped>
    
    
</style>