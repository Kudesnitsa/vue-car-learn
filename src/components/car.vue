<template>
    <section class="container one_car">
        <div class="row" v-if="car">
            <div class="table">

            </div>
            <div class="col-xl-6 car col-12	col-sm-12 col-lg-6 col-xl-6">
                <div class="photo ">
                    <b-btn v-b-modal.modalPrevent class="car_btn">Edit</b-btn>
                    <b-btn v-b-modal.modalRemove class="car_btn">Delete</b-btn>
                    <img style="width: 100%" src="http://iceek.ucoz.ru/Avto/SportCar2_salon.jpg"/>
                </div>

                <div class="info">
                    <div class="name">
                        {{car.name}}
                    </div>
                    <div class="description">
                        {{car.description}}
                    </div>
                    <div class="run">{{car.run}}</div>
                    <div class="price">{{car.price}}</div>
                    <div class="info_item">
                        <div class="label">Телефон власника</div>
                        <a :href="'tel:'+car.phone" class="value">{{car.phone}}</a>
                    </div>
                    <div class="datum">Характеристика</div>
                    <div class="info_item">
                        <div class="label">Двигун</div>
                        <div class="value">{{car.fuelConsumption}}л.</div>
                    </div>
                    <div class="info_item">
                        <div class="label">Об'єм</div>
                        <div class="value">{{car.volume}}</div>
                    </div>
                    <div class="info_item">
                        <div class="label">Тип</div>
                        <div class="value">{{car.transportType}}</div>
                    </div>
                    <div class="info_item">
                        <div class="label">Паливо</div>
                        <div class="value">{{car.fuel}}</div>
                    </div>
                    <div class="info_item">
                        <div class="label">Тип коробки передач</div>
                        <div class="value">{{car.transmission}}</div>
                    </div>
                    <div class="info_item">
                        <div class="label">типу компоновки</div>
                        <div class="value">{{car.driveType}}</div>
                    </div>
                    <div class="info_item">
                        <div class="label">Місто</div>
                        <div class="value">{{car.city}}</div>
                    </div>
                    <div class="info_item">
                        <div class="label">Коляр</div>
                        <div class="value">{{car.color}}</div>
                    </div>
                    <div v-if="car.abs" class="info_item">
                        <div class="label">ABS</div>
                        <div class="value">має</div>
                    </div>
                    <div v-if="car.centralLock" class="info_item">
                        <div class="label">Центральний замок</div>
                        <div class="value">має</div>
                    </div>
                    <div v-if="car.airbag" class="info_item">
                        <div class="label">Подушки безпеки</div>
                        <div class="value">має</div>
                    </div>
                    <div v-if="car.alarms" class="info_item">
                        <div class="label">Сигналізація</div>
                        <div class="value">має</div>
                    </div>
                </div>

            </div>
        </div>
        <div v-else class="no-info_items">
            car not found
        </div>

        <b-modal id="modalPrevent"
                 ref="modal"
                 title="Ведіть дані"
                 @ok="handleOk">

            <carForm :url="url" :config="config" :car="car" :handleOk="handleOkFlag" :state="state"
                     @close-car-form="submitForm($event)"></carForm>

        </b-modal>

        <b-modal id="modalRemove"
                 ref="modalRemove"
                 title="Remove?"
                 @ok="handleOkRemove">


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
                this.$http.delete(this.url + 'auto/' + this.car.id, this.config).then(response => {
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