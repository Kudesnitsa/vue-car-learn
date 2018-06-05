<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="item_field" v-for="(field, index) in editableFields">
            <label v-if="field.type!=='checkbox'" >
                {{field.label}}
                <b-form-input :key="index" :type="field.type"
                              :placeholder=" field.label"
                              v-model="editableCar[field.name]"></b-form-input>
            </label>
            <b-form-checkbox v-else :id="'checkbox'+[field.name]"
                             v-model="editableCar[field.name]"
            >
                {{field.label}}
            </b-form-checkbox>
            </div>


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
                        type: 'text',
                        label: "Назва"
                    },
                    {
                        name: 'description',
                        type: 'text',
                        label: "Опис"

                    },
                    {
                        name: 'transportType',
                        type: 'text',
                        label: "тип"
                    },
                    {
                        name: 'run',
                        type: 'number',
                        label: "Пробіг"
                    },
                    {
                        name: 'fuelConsumption',
                        type: 'text',
                        label: "Витрати пального"
                    },
                    {
                        name: 'volume',
                        type: 'text',
                        label: "Об'єс"
                    },
                    {
                        name: 'fuel',
                        type: 'text',
                        label: "Паливо"
                    },
                    {
                        name: 'transmission',
                        type: 'text',
                        label: "Тип передач"
                    },
                    {
                        name: 'driveType',
                        type: 'text',
                        label: "Тип проиводу"
                    },
                    {
                        name: 'city',
                        type: 'text',
                        label: "Місто"
                    },
                    {
                        name: 'color',
                        type: 'text',
                        label: "Колір"
                    },
                    {
                        name: 'price',
                        type: 'text',
                        label: "Ціна"
                    },
                    {
                        name: 'phone',
                        type: 'text',
                        label: "Ваш телефон"
                    },
                    {
                        name: 'abs',
                        type: 'checkbox',
                        label: "ABS"
                    },
                    {
                        name: 'centralLock',
                        type: 'checkbox',
                        label: "Центральний замок"
                    },
                    {
                        name: 'airbag',
                        type: 'checkbox',
                        label: "Подушка безпеки"
                    },
                    {
                        name: 'alarms',
                        type: 'checkbox',
                        label: "Сигналізація"
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
        updated: function () {
          console.log(this.editableCar)
        },
        watch: {
            car(){
                this.editableCar = Object.assign({}, this.car);
            },
            handleOk(){
                if (this.handleOk) {
                    this.handleSubmit()
                }
            }
        }
    }
</script>