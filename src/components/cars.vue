<template>
    <section class="container">

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
                        <div class="run">
                            {{car.run}}

                        </div>
                        <div class="description">
                            {{car.description}}

                        </div>
                    </div>
                </router-link>

            </div>
        </div>
        <div v-else class="no-items">
            cars not found
        </div>
        <!--<pre>
        <code>

            {{cars}}
        </code>
        </pre>-->
    </section>
</template>
<script>
    export default {
        name: 'Cars',
        props: ['cars'],
        components: {},
        data: function () {
            return {
                title: "",
                sumA: 0,
                sumB: 0,
                n: 1,
                m: 1,
                method: null,
                methodsList: [
                    {
                        title: 'Мінімального елемента',
                        functionName: 'Minimal'
                    },
                    {
                        title: 'Північно-західного кута',
                        functionName: 'NorthWest'
                    },
                    {
                        title: 'Подвійної переваги',
                        functionName: 'Two'
                    }
                ],
                flag: true,
                error: "",
                referencePlanFlag: false,
                data: [],
                state: {
                    a: [],
                    b: [],
                    data: [],
                    u: [],
                    v: [],
                    f: 0,
                    showVU: false,
                    countFullX: 0,
                    title: "Початкові дані",
                    subtitle: "",
                    teor: "",
                    description: "",
                },
                item: {
                    c: null,
                    x: null,
                    d: null
                },
                tempCount: 0,
                defaultData: {
                    n: 3,
                    m: 4,
                    data: [
                        {
                            "a": [
                                "210",
                                "170",
                                "65"
                            ],
                            "b": [
                                "125",
                                "90",
                                "130",
                                "100"
                            ],
                            "showVU": false,
                            "data": [
                                [
                                    {
                                        "c": "5",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "8",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "1",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "2",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    }
                                ],
                                [
                                    {
                                        "c": "2",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "5",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "4",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "9",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    }
                                ],
                                [
                                    {
                                        "c": "9",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "2",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "3",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    },
                                    {
                                        "c": "1",
                                        "x": null,
                                        "d": null,
                                        'minV': false,
                                        'minG': false
                                    }
                                ]
                            ],
                            "u": [
                                null,
                                null,
                                null
                            ],
                            "v": [
                                null,
                                null,
                                null,
                                null
                            ],
                            "f": 0,
                            "countFullX": 0,
                            "title": "Початкові дані",
                            "description": "",
                        }
                    ],
                    method: {
                        title: 'Мінімального елемента',
                        functionName: 'Minimal'

                    }
                }
            }
        },
    }
</script>