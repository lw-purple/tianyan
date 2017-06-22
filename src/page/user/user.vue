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
    import Icon from 'vue-awesome/components/Icon'
    export default {
    data(){
        return {
            message:'sdaf',
            headTitle: 'wifi',
        }
    },
    components:{
        headTop,
        Icon,
        footBottom
    },
}
</script>