<template>
    <div>
        new slider
    </div>
</template>
<script>
    export default {
        name: 'Slider',
        components:{
        },
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