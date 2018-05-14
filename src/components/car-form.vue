<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <b-form-input v-for="(field, index) in editableFields" :key="index" :type="field.type"
                          :placeholder="'Enter your ' + field.name"
                          v-model="editableCar[field.name]"></b-form-input>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'CarForm',
        props: ['url', 'config', 'car', 'handleOk', 'state'],
        components: {},
        data: function () {
            return {
                editableCar: Object.assign({}, this.car),
                editableFields: [
                    {
                        name: 'name',
                        type: 'text'
                    },
                    {
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'transportType',
                        type: 'text'
                    },
                    {
                        name: 'run',
                        type: 'text'
                    },
                    {
                        name: 'fuelConsumption',
                        type: 'text'
                    },
                    {
                        name: 'volume',
                        type: 'text'
                    },
                    {
                        name: 'fuel',
                        type: 'text'
                    },
                    {
                        name: 'transmission',
                        type: 'text'
                    },
                    {
                        name: 'driveType',
                        type: 'text'
                    },
                    {
                        name: 'city',
                        type: 'text'
                    },
                    {
                        name: 'color',
                        type: 'text'
                    },
                    {
                        name: 'abs',
                        type: 'text'
                    },
                    {
                        name: 'centralLock',
                        type: 'text'
                    },
                    {
                        name: 'airbag',
                        type: 'text'
                    },
                    {
                        name: 'alarms',
                        type: 'text'
                    },
                    {
                        name: 'price',
                        type: 'text'
                    },
                    {
                        name: 'phone',
                        type: 'text'
                    }
                ]
            };
        },
        methods: {
            handleSubmit () {
                if (this.state === 'add') {
                    this.addCar();
                }
                else {
                    this.editCar(this.editableCar.id);
                }
            },
            editCar(id){
                this.$http.put(this.url + 'auto/' + id, this.editableCar, this.config).then(response => {
                    this.$emit('close-car-form', response.body);
                }, error => {
                    console.error(error);
                    this.$emit('close-car-form');
                })

            },
            addCar(){
                this.$http.post(this.url + 'auto', this.editableCar, this.config).then(response => {
                    this.$emit('close-car-form', response.body);
                }, error => {
                    console.error(error);
                    this.$emit('close-car-form');
                })
            }
        },
        watch: {
            car(){
                this.editableCar = Object.assign({}, this.car);
            },
            handleOk(){
                if (this.handleOk) {
//                    todo check your fields
//                    todo check validate fields
                    this.handleSubmit()
                }
            }
        }
    }
</script>