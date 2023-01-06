<template>
    <div class="v-popup-wrapper" ref="popup_wrapper">
        <div class="v-popup">
            <div class="v-popup__header">
                <span>{{popupTitle}}</span>
                <span>
                    <menu-icon
                        class="material-icon"
                        @click="closePopup"
                    >
                        close
                    </menu-icon>
                </span>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <div class="v-popup__footer">
                <button
                    class="close_modal"
                    @click="closePopup"
                >
                    Close
                </button>
                <button
                    class="submit_btn"
                    @click="rightBtnAction"
                >
                    {{rightBtnTitle}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import MenuIcon from 'vue-material-design-icons/Close.vue';
    export default{
        name: 'v-popup',
        components: {
            MenuIcon
        }, 
        props:{
            rightBtnTitle: {
                type: String,
                default(){
                    return "Ok"
                }
            },
            popupTitle: {
                type: String,
                default(){
                    return "Popup Title"
                }
            }
            
        },
        data(){
            return{

            }
        },
        methods:{
            closePopup(){
                this.$emit('closePopup')
            },
            rightBtnAction(){
                this.$emit('rightBtnAction')
            }
            
        },
        mounted(){
            let vm = this;
            document.addEventListener("click", function(item){
                if(item.target === vm.$refs['popup_wrapper']){
                    vm.closePopup()
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';
    .v-popup-wrapper{
        background: rgba(64,64,64,.4);//????????????????????????????????? =-)
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .v-popup{
        padding: 16px;
        position: fixed;
        top: 100px;
        width: 400px;
        background: #ffffff;
        box-shadow: 0 0 8px 0 #e0e0e0;
        z-index: 10;

        div{
            margin: 5px;
        }

        &__header, &__footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content{
            display: flex;
            justify-content: space-around;
            align-items: center;
        
        }
        .submit_btn{
            padding: 8px;
            color: #ffffff;
            border: none;
            background-color: #FF13A7;
        }
        .close_modal{
            padding: 8px;
            color: #ffffff;
            background-color: #000000;
        }
    
        
    }
 

</style>