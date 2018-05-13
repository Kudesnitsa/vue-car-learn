<template>
    <section class="container">
        <button class="btn btn-dark" @click="showForm=true">
            edit{{showForm}}
        </button>
        <div class="items row" v-if="car">
            <div class="item col-12	col-sm-6 col-lg-4 col-xl-3 ">
                <div class="photo">
                    <img style="width: 100%" src="http://iceek.ucoz.ru/Avto/SportCar2_salon.jpg"/>
                </div>
                <div class="info">
                    <div class="name">
                        {{car.name}}
                    </div>
                    <div class="run">
                        {{car.run}}

                    </div>
                    <div class="description">
                        {{car.description}}

                    </div>
                </div>

            </div>
        </div>
        <div v-else class="no-items">
            car not found
        </div>
        <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>
        <!-- Main UI -->
        <div class="mt-3 mb-3">
            Submitted Names:
            <ul>
                <li v-for="n in names">{{n}}</li>
            </ul>
        </div>
        {{name}}
        <!-- Modal Component -->
        <b-modal id="modalPrevent"
                 ref="modal"
                 title="Submit your name"
                 @ok="handleOk"
                 @shown="clearName">

            <carForm :url="url" :config="config" :car="car" :handleOk="handleOkFlag" v-on:close-car-form="submitForm($event)"></carForm>

        </b-modal>


        <transition>
        </transition>
    </section>
</template>
<script>
    import  router from '@/router';
    import carForm from './car-form.vue';
    export default {
        name: 'Car',
        props: ['url', 'config'],
        components: {
            carForm,
        },
        data: function () {
            return {
                car: {},
                router,
                showForm: false,
                name: '',
                names: [],
                handleOkFlag: false
            };
        },
        methods: {
            clearName () {
                this.name = ''
            },
            handleOk (evt) {
                evt.preventDefault();
                this.handleOkFlag = true;
            },


            getCar(id){
                this.$http.get(this.url + 'auto/' + id, this.config).then(response => {
                    this.car = response.body;
                }, error => {
                    console.error(error);
                });
            },
            submitForm(editableCar){
                console.log('close')
                console.log(editableCar)
                this.$refs.modal.hide()
            }
        },
        created(){

            let id = this.$route.params.id;
            if (isFinite('0x' + id)) {
                this.getCar(id);
            }
            else {
                this.router.push('/cars');
            }
        }

    }
</script>