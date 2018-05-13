<template>
    <div >
        <form @submit.prevent="handleSubmit">

        <b-form-input type="text"
                      placeholder="Enter your name"
                      v-model="editableCar.name"></b-form-input>
        </form>
    </div>
</template>
<script>
    import  router from '@/router';

    export default {
        name: 'CarForm',
        props: ['url', 'config', 'car','handleOk'],
        components: {},
        data: function () {
            return {
                editableCar:this.car
            };
        },
        methods: {
            handleSubmit () {
                this.$emit('close-car-form', this.editableCar);
            },
        },
        watch: {
            car(){
                this.editableCar = Object.assign({}, this.car);
            },
            handleOk(){
                if(this.handleOk){
//                    todo check your fields
                    this.handleSubmit()
                }
            }
        }
    }
</script>