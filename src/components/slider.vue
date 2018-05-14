<template>
    <div class="container-fluid">
        <carousel>
            <slide v-for="i in 10">
                <div  >
                    <img src="https://www.enterprise.com/content/dam/ecom/utilitarian/common/Meet%20the%20Fleet/suv_santa_fe.png.wrend.1280.720.png"/>
                </div>
            </slide>
        </carousel>
    </div>
</template>
<script>
    import {Carousel, Slide} from 'vue-carousel';
    export default {
        name: 'Slider',
        components: {
            Carousel,
            Slide
        },
        data: function () {
            return {}
        },
    }
</script>