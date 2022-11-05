<template>
    <div class="v-select">
        <p 
            @click="areOptionsVisible = !areOptionsVisible"
            class="v-select__title">
        {{selected}}
        </p>
        <div 
            v-if="areOptionsVisible" 
            class="v-select__options">
            <p
                v-for="option in options"
                :key="option.value"
                @click="optionSelect(option)">
                {{option.name}}
            </p>
                
        </div>

    </div>
</template>

<script>
    
    export default{
        name: 'v-select',
        components: {
        }, 
        props:{
            options: {
                type: Array,
                default(){
                    return []
                }
            },
            selected: {
                type: String,
                default(){
                    return ''
                }
            },
            isExpanded: {
                type: Boolean,
                default(){
                    return false
                }
            }
        },
        data(){
            return{
                areOptionsVisible: false
            }
        },
        methods:{
            optionSelect(option){
                this.$emit('select', option),
                this.areOptionsVisible = false
            },
            hideSelect(){
                this.areOptionsVisible = false
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeUnmount() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';
    .v-select{
        position: relative;
        width: 200px;
        //height: 30px;
        cursor: pointer;
        background: #000000;
        color: white;
        
        
        &__title{
            border: solid 1px #aeaeae;
            padding: $padding 0;
        }
        &__options{
            position: absolute;
            top: 40px;
            right: 0;
            border: solid 1px #aeaeae;
            width: 100%;
            p{
                margin: 0 auto;
                background: white;
                color: black;
                padding: $padding 0;
                
            }
            p:hover{
                background: #e7e7e7;
            }
        }
    }

</style>