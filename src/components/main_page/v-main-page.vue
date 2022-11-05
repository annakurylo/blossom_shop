<template>
    <div class="v-main-page">
        <h1>Hello, shop!</h1>
        <p>
            <router-link :to="{name: 'catalog'}">
                to Catalog
            </router-link>
        </p>
    </div>
</template>

<script>
    export default{
        name: 'v-main-page',
        components: {
            
        }, 
        props:{
            
        },
        data(){
            return{

            }
        },
        methods:{
    
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';
    
</style>