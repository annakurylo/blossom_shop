<template>
    <div class="v-header">
        <router-link :to="{name: 'mainPage'}">
            <img src="../../assets/images/logo.jpg" alt=""/>
        </router-link>

        <div class="search-fieled">
            <input 
                type="text"
                v-model="searchValue"
            >
            <button class="search_btn">
                <menu-icon
                    @click="search(searchValue)"
                >
                    magnify
                </menu-icon>
            </button>
            <button class="search_btn">
                <menu-icon-close
                    @click="clearSearch"
                >
                    close
                </menu-icon-close>
            </button>
        </div>
    </div>
</template>

<script>
    import MenuIcon from 'vue-material-design-icons/Magnify.vue';
    import { mapActions, mapGetters } from 'vuex';
    import MenuIconClose from 'vue-material-design-icons/Close.vue';

    export default{
        name: 'v-header',
        components: {
            MenuIcon,
            MenuIconClose
        }, 
        props:{
            
        },
        data(){
            return{
                searchValue: ""
            }
        },
        computed: {
            ...mapGetters([
                'SEARCH_PRODUCT'
            ]),
        },
        methods:{
            ...mapActions([
                'GET_SEARCH_PRODUCT_TO_VUEX'
            ]),
            search(value){
                this.GET_SEARCH_PRODUCT_TO_VUEX(value);
                if(this.$route.path !== '/catalog'){
                    this.$router.push('/catalog')
                }
            },
            clearSearch(){
                this.searchValue = '';
                this.GET_SEARCH_PRODUCT_TO_VUEX();
                if(this.$route.path !== '/catalog'){
                    this.$router.push('/catalog')
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';
    .v-header{
        z-index: 8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $background;
        padding: 16px;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        img{
            width: 50px;
        }
        .search-fieled{
            padding: 16px;
            position: relative;
            right: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .search_btn{
            margin-left: 16px;
            background: transparent;
            border: none;
        }
    }
</style>