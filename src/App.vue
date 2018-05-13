<template>

    <div class="wrapper">
        <main-header></main-header>
        <main>
            <router-view :cars="cars" :url="url" :config="config" ></router-view>
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
                url:this.$parent.url,
                config:this.$parent.config,
                cars: []
            }
        },
        methods: {
            getCars(){
                this.$http.get(this.url+'auto',this.config).then(response => {
                    this.cars = response.body.list;
                }, error => {
                    console.error(error);
                });
            }
        },
        created(){
            this.getCars();
        }
    }
</script>
<style lang="scss">
    .wrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    main {
        flex: 1;
    }

    footer {
        background: #122b40;
        color: white;
        display: flex;
        justify-content: flex-end;
    }
</style>