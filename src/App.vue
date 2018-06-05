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
            mainFooter,

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
                    console.log(response.body.list)
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
    @mainColor: #474747;
    @MCText: #0056b3;

    .ff(@size:1em) {
        font-family: 'Open Sans', sans-serif;
        font-size: @size;
        font-weight: 400;
        font-style: normal;
    }

    .ff-OS-semi-bold(@size:1em) {
        font-family: 'Open Sans', sans-serif;
        font-size: @size;
        font-weight: 600;
        font-style: normal;
    }

    .ff-OS-bold(@size:1em) {
        font-family: 'Open Sans', sans-serif;
        font-size: @size;
        font-weight: 700;
        font-style: normal;
    }

    boby {
        .ff(16px);

    }

    .wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .box_link {
        text-align: center;
    }

    .ic img {
        width: 50px;
        margin: 20px;

    }

    .price {
        text-align: right;
    }

    .run, .price {
        width: 50%;
        float: left;
    }

    .price:after {
        content: "$"
    }
    label,.custom-control.custom-checkbox{
        margin: 1rem;
    }

    .run:after {
        content: "км";
    }

    .navbar.navbar-light {
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

    .item {
        padding: 20px;
        margin: 20px 0;
    }

    .item:hover {
        text-decoration: none !important;
        box-shadow: 0 0 5px #cccccc;
    }

    .item a:hover {
        text-decoration: none !important;
    }

    .car_edit, .car_delete {
        margin: 20px;
    }

    .car {
        margin: 50px auto;
    }
    .info_item {
        .label, .value {
            width: 50%;
            float: left;
            box-sizing: border-box;
        }
    }
    .item_field{
        width: 50%;
        float: left;
        box-sizing: border-box;
    }
    .datum{
        display: block;
        margin-top: 30px;
        border-bottom: 1px solid @mainColor;
    }
    .car_btn{
        margin: 0;
        border-radius:5px 5px 0 0 ;
    }
    .car_btn:hover{
        margin: 0;
        border-radius:2px 2px 0 0 ;
        border: none;
    }
    .name {
        .ff-OS-semi-bold(1.2em);
        color: @mainColor;
        padding: 20px 0;
        text-decoration: none;
    }
    .cars_block .item {
        .price {
            float: right;
            width: 50%;
            text-align: right;
        }
    }
</style>