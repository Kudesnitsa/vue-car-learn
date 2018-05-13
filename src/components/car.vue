<template>
    <section class="container">
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
        <b-btn v-b-modal.modalRemove>Launch demo modal</b-btn>

        <b-modal id="modalPrevent"
                 ref="modal"
                 title="Submit your name"
                 @ok="handleOk">

            <carForm :url="url" :config="config" :car="car" :handleOk="handleOkFlag" :state="state"
                     v-on:close-car-form="submitForm($event)"></carForm>

        </b-modal>

        <b-modal id="modalRemove"
                 ref="modalRemove"
                 title="Remove?"
                 @ok="handleOkRemove">

            db adgdag


        </b-modal>

    </section>
</template>
<script>
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
                state: 'edit',
                defaultCar: {
                    "id": "",
                    "name": "",
                    "description": "",
                    "transportType": "",
                    "run": 0,
                    "fuelConsumption": 5,
                    "volume": 0,
                    "fuel": "",
                    "transmission": "",
                    "driveType": "",
                    "city": "",
                    "color": "",
                    "abs": true,
                    "centralLock": true,
                    "airbag": true,
                    "alarms": true,
                    "price": 0,
                    "phone": ""
                },
                handleOkFlag: false
            };
        },
        methods: {
            handleOk (evt) {
                evt.preventDefault();
                this.handleOkFlag = true;
            },
            handleOkRemove (evt){
                evt.preventDefault();
                this.$http.delete(this.url + 'auto/'+ this.car.id, this.config).then(response => {
                    console.log(response.body);
                    this.$emit('remove-car', this.car);
                    this.$router.push('/cars');
                }, error => {
                    console.error(error);
                })
            },
            getCar(id){
                this.$http.get(this.url + 'auto/' + id, this.config).then(response => {
                    this.car = response.body;
                }, error => {
                    console.error(error);
                });
            },
            submitForm(editableCar){
                if (editableCar) {
                    this.car = editableCar;
                    if (this.state === 'add') {
                        this.$emit('create-car', editableCar);
                        this.state = 'edit';
                    }
                }
                this.handleOkFlag = false;
                this.$refs.modal.hide()
            },
            checkId(id){
                if (id === 'add') {
                    this.car = Object.assign({}, this.defaultCar);
                    this.state = 'add';
                }
                else if (isFinite('0x' + id)) {
                    this.getCar(id);
                }
                else {
                    this.$router.push('/cars');
                }
            }
        },
        computed: {
            id(){
                return this.$route.params.id;
            }
        },
        watch: {
            id(){
                this.checkId(this.id);
            }
        },
        created(){
            this.checkId(this.id);
        },
        mounted(){
            if (this.id === 'add') {
                this.$refs.modal.show();
            }
        }
    }
</script>