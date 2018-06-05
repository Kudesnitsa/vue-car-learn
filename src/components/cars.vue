<template>
    <section class="container cars_block">
        <div class="items row" v-if="cars.length">
            <div class="item col-12	col-sm-6 col-lg-4 col-xl-3 " v-for="(car, index) in cars">
                <router-link :to="'car/'+car.id">

                    <div class="photo">
                        <img style="width: 100%" src="http://iceek.ucoz.ru/Avto/SportCar2_salon.jpg"/>
                    </div>
                    <div class="info">
                        <div class="name">
                            {{car.name}}
                        </div>
                        <div class="description">
                            {{car.description}}
                        </div>
                        <div class="run" v-if="car.price !==0">{{car.run/1000}}</div>
                        <div class="price" v-if="car.price !==0">{{car.price}}</div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else class="no-items">
            cars not found, <router-link to="/car/add">Add car</router-link>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'Cars',
        props: ['cars'],
        data: function () {
            return {}
        },
        created(){
            console.log(cars)
        }
    }
</script>