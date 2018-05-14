<template>
    <div class="wrapper">
        <main-header v-on:search="search=$event"></main-header>
        <main>
            <router-view :cars="$route.name==='Cars'?filteredCars:[]" :url="url" :config="config"
                         v-on:create-car="cars.push($event)"
                         v-on:remove-car="cars.splice(cars.indexOf($event),1)"></router-view>
        </main>

        <main-footer></main-footer>
    </div>
</template>

<script>
    import mainHeader from './components/main-header.vue';
    import mainFooter from './components/main-footer.vue';

    export default {
        name: 'app',
        components: {
            mainHeader,
            mainFooter
        },
        data: function () {
            return {
                url: this.$parent.url,
                config: this.$parent.config,
                cars: [],
                filteredFields: [
                    'name', 'description', 'transportType', 'run', 'fuelConsumption', 'volume', 'fuel', 'transmission',
                    'driveType', 'city', 'color', 'abs', 'centralLock', 'airbag', 'alarms', 'price', 'phone'
                ],
                searchableFields: [
                    'name', 'description', 'transportType', 'fuel', 'transmission',
                    'driveType', 'city', 'color'
                ],
                search: ''
            }
        },
        methods: {
            getCars(){
                this.$http.get(this.url + 'auto', this.config).then(response => {
                    this.cars = response.body.list;
                }, error => {
                    console.error(error);
                });
            },
        },
        computed: {
            filteredCars(){
                let searchLower = this.search.toLowerCase(),
                    fields = this.searchableFields;
                return this.cars.filter(car => {
                    for (let field of fields) {
                        if (car[field].toLowerCase().includes(searchLower)) {
                            return true;
                        }
                    }
                    return false;
                });
            }
        },
        created(){
            this.getCars();
        }
    }
</script>
<style lang="less">
    @mainColor:#474747;
    .wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .navbar.navbar-light{
        background: white;
        box-shadow: 0 0 12px #eeeeee;
        padding: 0;
    }

    main {
        flex: 1;
    }

    footer {
        background: @mainColor;
        color: white;
       /* display: flex;
        justify-content: flex-end;*/
    }
</style>