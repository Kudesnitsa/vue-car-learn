<template>
    <div class="wrapper">
        <div v-if="flag">
            <label>
                <!--Кількіть виробників A(кількість рядків)-->
                Кількіcть виробників A:
                <input type="number" min="1" class="input-sm form-control" v-model="n">
            </label>

            <label>
                <!--Кількіть споживачів B(кількість стовців)-->
                Кількіcть споживачів B:
                <input type="number" min="1" class="input-sm form-control" v-model="m">
            </label>
            <label>
                Метод:
                <select v-model="method" class="form-control">
                    <option v-for="method in methodsList" :value="method">{{method.title}}</option>
                </select>
            </label>
            <button class="btn btn-success" @click="checkEnteredData();">Обчислити
            </button>

            <h3 class="has-error">{{error}}</h3>
            <p> A<sub>i</sub> - кількість одиниць продукції, виготовленої виробниками.
                B<sub>j</sub> - кількість одиниць продукції, яку потребують споживачі.
                С<sub>ij</sub> - ціна за перевесення одиниці продукції.</p>
            <p>A<sub>i</sub>>0, B<sub>j</sub>>0, С<sub>ij</sub>>0.</p>
            <table class="table table-bordered">
                <tr>
                    <th>A\B</th>
                    <th v-for="(item, index) in data[0].b">
                        <label>
                            B<sub>{{index + 1}}</sub>=
                            <input type="number" min="1" v-model="data[0].b[index]">
                        </label>
                    </th>
                </tr>
                <tr v-for="(row, i) in data[0].data">
                    <td>
                        <label>
                            A<sub>{{i + 1}}</sub>=
                            <input type="number" min="1" v-model="data[0].a[i]">
                        </label>
                    </td>
                    <td v-for="(item, j) in row">
                        <label>
                            C<sub>{{i + 1}}{{j + 1}}</sub>=
                            <input type="number" min="1" v-model="data[0].data[i][j].c">
                        </label>
                    </td>
                </tr>
            </table>
        </div>

        <div v-else>
            <button class=" btn btn-success button" @click="edit()">Змінити умову</button>
            <button class="btn badge-pill" @click="print()">Друк</button>
            <div v-for="state in data">
                <h2 v-html="state.title">{{state.title}}</h2>
                <h4 v-html="state.subtitle">{{state.subtitle}}</h4>
                <h6 v-html="state.teor">{{state.teor}}</h6>
                <div v-html="state.description">{{state.description}}</div>
                <table class="table table-bordered">
                    <tr>
                        <th>A \ B</th>
                        <th v-for="(item, index) in state.b">
                            <label>
                                B<sub>{{index + 1}}</sub>= {{item}}
                            </label>
                        </th>
                        <th v-if="state.showVU">U</th>
                    </tr>
                    <tr v-for="(row, i) in state.data">
                        <td>
                            <label>
                                A<sub>{{i + 1}}</sub>= {{state.a[i]}}
                            </label>
                        </td>
                        <td class="cell" v-for="(item, j) in row" v-bind:class="{
                            baz:(item.x !== null),
                            onecheck:item.minV,
                            twocheck:item.minG
                        }">
                            <div>
                                C<sub>{{i + 1}}{{j + 1}}</sub>={{item.c}}
                                <div v-if="item.x !== null">X<sub>{{i + 1}}{{j + 1}}</sub>={{item.x}}</div>
                                <!--<div v-else>&thinsp;&ensp;&nbsp; &emsp;&emsp;</div>-->
                                <div v-if="item.d !== null">D<sub>{{i + 1}}{{j + 1}}</sub>={{item.d}}</div>
                            </div>
                        </td>
                        <td v-if="state.showVU">
                            <label>
                                U<sub>{{i + 1}}</sub>= {{state.u[i]}}
                            </label>
                        </td>
                    </tr>
                    <tr v-if="state.showVU">
                        <th>V</th>
                        <td v-for="(item, index) in state.v">
                            <label>
                                V<sub>{{index + 1}}</sub>= {{item}}
                            </label>
                        </td>
                    </tr>
                </table>
            </div>
            <template v-if="data[data.length-1].f!==0">

                <h1> Вартість доставки продукції: {{data[data.length - 1].f}}</h1>
                <table class="table table-bordered" v-bind="state=data[data.length-1]">
                    <tr>
                        <th>A\B</th>
                        <th v-for="(item, index) in state.b">
                            <label>
                                B<sub>{{index + 1}}</sub>= {{item}}
                            </label>
                        </th>
                    </tr>
                    <tr v-for="(row, i) in state.data">
                        <td>
                            <label>
                                A<sub>{{i + 1}}</sub>= {{state.a[i]}}
                            </label>
                        </td>
                        <td class="cell" v-for="(item, j) in row" >
                                <div v-if="item.x !== null">{{item.x}}</div>
                                <div v-else>0</div>
                        </td>
                    </tr>
                </table>

            </template>
            <button class=" btn btn-success button" @click="edit()">Змінити умову</button>
            <button class="btn badge-pill" @click="print()">Друк</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
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
        created: function () {
            for (let key in this.defaultData) {
                this[key] = JSON.parse(JSON.stringify(this.defaultData[key]));
            }
        },
//            created: function () {
//                this.data.push(O B<sub>j</sub>ect.assign({}, this.state));
//                this.data[0].title = "Початкові дані";
//                for (let i = 0; i < this.n; i += 1) {
//                    this.data[0].a.push(null);
//                    this.data[0].u.push(null);
//                    this.data[0].data.push([]);
//                    for (let j = 0; j < this.m; j += 1) {
//                        this.data[0].data[i].push(Object.assign({}, this.item));
//                    }
//                }
//                for (let j = 0; j < this.m; j += 1) {
//                    this.data[0].b.push(null);
//                    this.data[0].v.push(null);
//                }
//            },
        methods: {
            edit: function () {
                this.data = [this.data[0]];
                this.flag = true;
            },
            print: function () {
                window.print();
            },
            checkEnteredData: function () {
                this.sumA = 0;
                this.sumB = 0;
                let a, b, c;

                for (let j = 0; j < this.m; j += 1) {
                    b = parseInt(this.data[0].b[j], 10);
                    if (isNaN(b) || b <= 0) {
                        this.error = "Задача незбалансована або не всі дані введені!";
                        this.flag = true;
                        return;
                    }
                    this.data[0].b[j] = b;
                    this.sumB += b;
                }

                for (let i = 0; i < this.n; i += 1) {
                    a = parseInt(this.data[0].a[i], 10);
                    if (isNaN(a) || a <= 0) {
                        this.error = "Задача незбалансована або не всі дані введені3!";
                        this.flag = true;
                        return;
                    }
                    this.data[0].a[i] = a;
                    this.sumA += a;

                    for (let j = 0; j < this.m; j += 1) {
                        c = parseInt(this.data[0].data[i][j].c, 10);
                        if (isNaN(c) || c <= 0) {
                            this.error = "Задача незбалансована або не всі дані введені2!";
                            this.flag = true;
                            return;
                        }
                        this.data[0].data[i][j].c = c;
                    }
                }

                if (this.sumB !== this.sumA || this.sumB === 0 || this.sumA === 0) {
                    this.error = "Задача незбалансована або не всі дані введені1!";
                    this.flag = true;
                    return;
                }
                this.error = "";
                this.flag = false;
                this.referencePlan();
            },
            referenceTwoPlan: function (k) {
                let currentIndex = this.data.length - 1;
                k += 1;
                this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                currentIndex = this.data.length - 1;
                this.data[currentIndex].subtitle = "Крок     " + k;
                if (k === 1) {
                    this.data[currentIndex].title = "Будуємо опорний план методом подвійної переваги";
                }


                this.data[currentIndex].teor = "В кожному рядку відмічаємо галочкою клітинку з найменшою ціною, так само в стовчиках.";
                for (let i = 0; i < this.n; i += 1) {

                    let minC = {
                        value: null,
                        indexJ: null,
                        indexI: null,
                    };
                    for (let j = 0; j < this.m; j += 1) {
                        if (minC.value === null || minC.value > this.data[currentIndex].data[i][j].c) {
                            if (this.data[currentIndex].data[i][j].x === null &&
                                this.data[currentIndex].a[i] !== 0 &&
                                this.data[currentIndex].b[j] !== 0) {
                                minC.value = this.data[currentIndex].data[i][j].c;
                                minC.indexI = i;
                                minC.indexJ = j;
                            }
                        }
                    }
                    this.data[currentIndex].data[minC.indexI][minC.indexJ].minV = true;
                }
                for (let j = 0; j < this.m; j += 1) {
                    let minC = {
                        value: null,
                        indexJ: null,
                        indexI: null,
                    };
                    for (let i = 0; i < this.n; i += 1) {
                        if (minC.value === null || minC.value > this.data[currentIndex].data[i][j].c) {
                            if (this.data[currentIndex].data[i][j].x === null &&
                                this.data[currentIndex].a[i] !== 0 &&
                                this.data[currentIndex].b[j] !== 0) {
                                minC.value = this.data[currentIndex].data[i][j].c;
                                minC.indexI = i;
                                minC.indexJ = j;
                            }
                        }
                    }
                    this.data[currentIndex].data[minC.indexI][minC.indexJ].minG = true;
                }
                this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                currentIndex = this.data.length - 1;
                k += 1;
                this.data[currentIndex].subtitle = "Крок     " + k;
                this.data[currentIndex].title = "";
                this.data[currentIndex].teor = "Клітинки, які мають дві галочки заповнюємо першими. X<sub>ij</sub>=min{A<sub>i</sub>; B<sub>j</sub>}, " +
                    "A<sub>i</sub>=A<sub>i</sub>-X<sub>ij</sub>, B<sub>j</sub>=B<sub>j</sub>-X<sub>ij</sub>.";

                for (let i = 0; i < this.n; i += 1) {
                    for (let j = 0; j < this.m; j += 1) {
                        if (this.data[currentIndex].data[i][j].minV && this.data[currentIndex].data[i][j].minG) {
                            if (this.data[currentIndex].data[i][j].x === null &&
                                this.data[currentIndex].a[i] !== 0 &&
                                this.data[currentIndex].b[j] !== 0) {
                                this.data[currentIndex].data[i][j].x = Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]);
                                this.data[currentIndex].a[i] = this.data[currentIndex].a[i] - this.data[currentIndex].data[i][j].x;
                                this.data[currentIndex].b[j] = this.data[currentIndex].b[j] - this.data[currentIndex].data[i][j].x;
                                this.sumA = this.sumA - this.data[currentIndex].data[i][j].x;
                                this.sumB = this.sumB - this.data[currentIndex].data[i][j].x;
                                this.data[currentIndex].countFullX += 1;

                            }
                        }
                    }
                }
                this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                currentIndex = this.data.length - 1;
                k += 1;
                this.data[currentIndex].subtitle = "Крок    " + k;

                this.data[currentIndex].teor = "Клітинки, які мають одну галочки заповнюємо наступними. X<sub>ij</sub>=min{A<sub>i</sub>;B<sub>j</sub>}, " +
                    "A<sub>i</sub>=A<sub>i</sub>-X<sub>ij</sub>, B<sub>j</sub>=B<sub>j</sub>-X<sub>ij</sub>.";
                for (let i = 0; i < this.n; i += 1) {
                    for (let j = 0; j < this.m; j += 1) {
                        if (this.data[currentIndex].data[i][j].minV || this.data[currentIndex].data[i][j].minG) {
                            if (this.data[currentIndex].data[i][j].x === null &&
                                this.data[currentIndex].a[i] !== 0 &&
                                this.data[currentIndex].b[j] !== 0) {
                                this.data[currentIndex].data[i][j].x = Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]);
                                this.data[currentIndex].a[i] = this.data[currentIndex].a[i] - this.data[currentIndex].data[i][j].x;
                                this.data[currentIndex].b[j] = this.data[currentIndex].b[j] - this.data[currentIndex].data[i][j].x;
                                this.sumA = this.sumA - this.data[currentIndex].data[i][j].x;
                                this.sumB = this.sumB - this.data[currentIndex].data[i][j].x;
                                this.data[currentIndex].countFullX += 1;

                            }
                        }
                    }
                }

                this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                currentIndex = this.data.length - 1;
                k += 1;
                this.data[currentIndex].subtitle = "Крок    " + k;

                if (this.sumA !== 0 || this.sumB !== 0) {
                    this.data[currentIndex].teor ="";
                    this.data[currentIndex].description = "Опорний план ще не побудований. Далі розподіляємо Х за методом мінімальних елементів";
                    this.referenceMinimalPlan(k);

                }


                return true;
            },
            referenceMinimalPlan: function (k) {
                let referencePlanFlag = true;
                let currentIndex = this.data.length - 1;

                while (referencePlanFlag) {
                    k += 1;
                    this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                    currentIndex = this.data.length - 1;
                    let minC = {
                        value: null,
                        indexJ: null,
                        indexI: null,
                    };
                    if (k === 1) {
                        this.data[currentIndex].title = "Будуємо опорний план методом мінімального елемента";
                    }
                    else {
                        this.data[currentIndex].title = "";
                    }

                    this.data[currentIndex].subtitle = "Крок     " + k;

                    for (let i = 0; i < this.n; i += 1) {
                        for (let j = 0; j < this.m; j += 1) {
                            if (minC.value === null || minC.value > this.data[currentIndex].data[i][j].c) {
                                if (this.data[currentIndex].data[i][j].x === null &&
                                    this.data[currentIndex].a[i] !== 0 &&
                                    this.data[currentIndex].b[j] !== 0) {
                                    minC.value = this.data[currentIndex].data[i][j].c;
                                    minC.indexI = i;
                                    minC.indexJ = j;
                                }
                            }
                        }
                    }

                    this.data[currentIndex].teor = "Для побудови опорного планy потрібно " +
                        "знайти найменшу ціну  (С<sub>ij</sub>) з незаповнених клітинок, а також A<sub>i</sub> >0 i B<sub>j</sub> >0." +
                        " Тоді в X<sub>ij</sub>=min{A<sub>i</sub>; B<sub>j</sub>} і A<sub>i</sub>=A<sub>i</sub>-X<sub>ij</sub> ," +
                        " B<sub>j</sub>=B<sub>j</sub>-X<sub>ij</sub>.";
                    this.data[currentIndex].description = "Найменша ціна з клітинок, які не містить Х - це С<sub>" +
                        parseInt(minC.indexI + 1) + "  " + parseInt(minC.indexJ + 1) + "</sub>=" +
                        this.data[currentIndex].data[minC.indexI][minC.indexJ].c + " в  клітинці [" + parseInt(minC.indexI + 1) + ";" + parseInt(minC.indexJ + 1) + "]. " +
                        "Заповнюємо X<sub>" + parseInt(minC.indexI + 1) + "  " + parseInt(minC.indexJ + 1) + "</sub>= min{" + this.data[currentIndex].a[minC.indexI] + ";" + this.data[currentIndex].b[minC.indexJ]
                        + "}. А також  змінюємо значення  A<sub>" +
                        parseInt(minC.indexI + 1) + "</sub>=" + this.data[currentIndex].a[minC.indexI] + "-" + Math.min(this.data[currentIndex].a[minC.indexI],
                            this.data[currentIndex].b[minC.indexJ]) + " i  B<sub>" + parseInt(minC.indexJ + 1) + "</sub>=" + this.data[currentIndex].b[minC.indexJ] + "-"
                        + Math.min(this.data[currentIndex].a[minC.indexI], this.data[currentIndex].b[minC.indexJ]) + ".";


                    this.data[currentIndex].countFullX += 1;
                    this.data[currentIndex].data[minC.indexI][minC.indexJ].x = Math.min(this.data[currentIndex].a[minC.indexI], this.data[currentIndex].b[minC.indexJ]);
                    this.data[currentIndex].a[minC.indexI] -= this.data[currentIndex].data[minC.indexI][minC.indexJ].x;
                    this.data[currentIndex].b[minC.indexJ] -= this.data[currentIndex].data[minC.indexI][minC.indexJ].x;
                    this.sumA -= this.data[currentIndex].data[minC.indexI][minC.indexJ].x;
                    this.sumB -= this.data[currentIndex].data[minC.indexI][minC.indexJ].x;


                    if (this.sumA === 0 && this.sumB === 0) {

                        referencePlanFlag = false;
                    }
                    else if (this.sumA === 0 || this.sumB === 0) {
                        referencePlanFlag = false;
                        this.error.notReferencePlan = true;
                    }
                }
                return true;
            },
            referenceNorthWestPlan: function (k) {
                let currentIndex = this.data.length - 1;
                for (let i = 0; i < this.n; i += 1) {
                    for (let j = 0; j < this.m; j += 1) {
                        if (this.data[currentIndex].data[i][j].x === null &&
                            this.data[currentIndex].a[i] !== 0 &&
                            this.data[currentIndex].b[j] !== 0) {
                            k += 1;
                            this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                            currentIndex = this.data.length - 1;
                            if (k === 1) {
                                this.data[currentIndex].title = "Будуємо опорний план методом північно-західного кута";
                                this.data[currentIndex].teor = "На першому кроці заповнюємо клітинку [1;1] " +
                                    "X<sub>11</sub>=min{A<sub>1</sub>;B<sub>1</sub>}, " + " B<sub>1</sub>=B<sub>1</sub>-X<sub>11</sub>," +
                                    " A<sub>1</sub>=A<sub>1</sub>-X<sub>11</sub>. " +
                                    " Далі є 3 варіанти :<br>" +
                                    " Якщо A<sub>i</sub>< B<sub>j</sub>, то в X<sub>ij</sub>=A<sub>i</sub>, " +
                                    "B<sub>j</sub>=B<sub>j</sub>-A<sub>i</sub>, " +
                                    "A<sub>i</sub>=0, та стовчик j не розглядаємо в подальшому; <br> " +
                                    " Якщо A<sub>i</sub> > B<sub>j</sub>, то в X<sub>ij</sub>=B<sub>i</sub>, " +
                                    "A<sub>j</sub>=A<sub>j</sub>-B<sub>i</sub>, " +
                                    "B<sub>i</sub>=0 та рядoк і не розглядаємо в подальшому;<br>" +
                                    " Якщо A<sub>i</sub> = B<sub>j</sub>, то в X<sub>ij</sub>=B<sub>i</sub>, " +
                                    "A<sub>j</sub>=0, B<sub>i</sub>=0 та рядок і та стовпчик j не розглядаємо в подальшому;<br>";
                                this.data[currentIndex].description = "Покладемо в клітинку [1;1]  X<sub>" +
                                    "11</sub>=min{" + this.data[currentIndex].a[i] + ";" + this.data[currentIndex].b[j] + "}=" +
                                    Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]) + ", B<sub>" + (j + 1) + "</sub>=" + this.data[currentIndex].b[j] +
                                    "-" + (Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j])) + "=" +
                                    (this.data[currentIndex].b[j] - Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]) ) +
                                    ", A<sub>" + (i + 1) + "</sub>=" + this.data[currentIndex].a[i] +
                                    "-" + (Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j])) + "=" +
                                    (this.data[currentIndex].a[i] - Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]) );
                            }
                            else {
                                this.data[currentIndex].title = "";
                            }

                            if (this.data[currentIndex].a[i] === this.data[currentIndex].b[j] && k !== 1) {
                                this.data[currentIndex].description = "B<sub>" + (j + 1) + "</sub> = A<sub>" + (i + 1) + "</sub>. Отже " +
                                    "Х<sub>" + (i + 1) + " " + (j + 1) + "</sub>=" + this.data[currentIndex].b[j] + ", A<sub>" + (i + 1) + "</sub>=0, " +
                                    "B<sub>" + (j + 1) + "</sub>=0,  та стовпчик " + (j + 1) + "i рядок " + (i + 1) + " не розглядаємо в подальшому;";
                            } else if (this.data[currentIndex].a[i] === Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]) && k !== 1) {
                                this.data[currentIndex].description = "A<sub>" + (i + 1) + "</sub> < B<sub>" + (j + 1) +
                                    "</sub>. Отже Х<sub>" + (i + 1) + " " + (j + 1) + "</sub> =" + this.data[currentIndex].a[i] + ", " +
                                    "B<sub>" + (j + 1) + "</sub>=" + this.data[currentIndex].b[j] + "-" +
                                    this.data[currentIndex].a[i] + "=" + (this.data[currentIndex].b[j] - this.data[currentIndex].a[i]) +
                                    ", A<sub>" + (i + 1) + "</sub>=0, та рядок " + (i + 1) + " не розглядаємо в подальшому;";

                            } else if (this.data[currentIndex].b[j] === Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]) && k !== 1) {
                                this.data[currentIndex].description = "B<sub>" + (j + 1) + "</sub> < A<sub>" + (i + 1) + "</sub>. Отже Х<sub>"
                                    + (i + 1) + " " + (j + 1) + "</sub>=" + this.data[currentIndex].b[j] + ", A<sub>" + (i + 1) + "</sub>=" + this.data[currentIndex].a[i] + "-" +
                                    this.data[currentIndex].b[j] + "=" + (this.data[currentIndex].a[j] - this.data[currentIndex].b[j]) +
                                    ", B<sub>" + (j + 1) + "</sub>=0,  та стовпчик " + (j + 1) + " не розглядаємо в подальшому;";
                            }
                            this.data[currentIndex].subtitle = "Крок     " + k;

                            this.data[currentIndex].data[i][j].x = Math.min(this.data[currentIndex].a[i], this.data[currentIndex].b[j]);
                            this.data[currentIndex].a[i] = this.data[currentIndex].a[i] - this.data[currentIndex].data[i][j].x;
                            this.data[currentIndex].b[j] = this.data[currentIndex].b[j] - this.data[currentIndex].data[i][j].x;
                            this.sumA = this.sumA + this.data[currentIndex].data[i][j].x;
                            this.sumB = this.sumB + this.data[currentIndex].data[i][j].x;
                            this.data[currentIndex].countFullX += 1;
                        }
                    }
                }
                if (this.sumA !== this.sumB) {
                    this.error.notReferencePlan = true;
                }
                return true;
            },
            referencePlan: function () {
                if (this['reference' + this.method.functionName + 'Plan'](0)) {
                    this.optimalPlan();
                }
            },
            findUV: function () {

                let currentIndex = this.data.length - 1;
                this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                currentIndex += 1;
                this.data[currentIndex].showVU = true;
                this.data[currentIndex].title = "Обчислюємо значення потенціалів";
                this.data[currentIndex].subtitle = "";
                this.data[currentIndex].teor = "Заповнюємо U<sub>i</sub> та V<sub>j</sub>. Покладемо U<sub>1</sub>=0," +
                    " та рахуємо інші U<sub>i</sub> та V<sub>j</sub> за формули  U<sub>i</sub> + V<sub>j</sub>=C<sub>ij</sub>,  C<sub>ij</sub> рухаючись  базисними клітинким. " +
                    " U<sub>i</sub> =C<sub>ij</sub>-V<sub>j</sub> та V<sub>j</sub>=C<sub>ij</sub>-U<sub>i</sub>.";
                this.data[currentIndex].description = "";
                this.findU(currentIndex, 0, null);
            },
            findU: function (currentIndex, currentI, currentJ) {
                if (currentJ === null) {
                    this.data[currentIndex].u[currentI] = 0;
                    this.findV(currentIndex, currentI, currentJ);
                    return null;
                }
                else {
                    for (let i = 0; i < this.n; i += 1) {
                        if (this.data[currentIndex].data[i][currentJ].x !== null && i !== currentI && this.data[currentIndex].u[i] === null) {
                            this.data[currentIndex].u[i] = this.data[currentIndex].data[i][currentJ].c - this.data[currentIndex].v[currentJ];
                            this.data[currentIndex].description = this.data[currentIndex].description + "U<sub>" + (i + 1) + "</sub> = " +
                                this.data[currentIndex].data[i][currentJ].c + "-" + this.data[currentIndex].v[currentJ] +
                                " = " + (this.data[currentIndex].data[i][currentJ].c - this.data[currentIndex].v[currentJ]) + ";     ";
                            this.findV(currentIndex, i, currentJ);
                        }
                    }
                }

            },
            findV: function (currentIndex, currentI, currentJ) {
                for (let j = 0; j < this.m; j += 1) {
                    if (this.data[currentIndex].data[currentI][j].x !== null && this.data[currentIndex].v[j] === null) {
                        this.data[currentIndex].v[j] = this.data[currentIndex].data[currentI][j].c - this.data[currentIndex].u[currentI];
                        this.data[currentIndex].description = this.data[currentIndex].description + "V<sub>" + (j + 1) + "</sub> = " +
                            this.data[currentIndex].data[currentI][j].c + "-" + this.data[currentIndex].u[currentI] +
                            " = " + (this.data[currentIndex].data[currentI][j].c - this.data[currentIndex].u[currentI]) + ";     ";
                        currentJ = j;
                        this.findU(currentIndex, currentI, currentJ)
                    }
                }
            },
            optimalPlan: function () {
                this.findUV();

                let currentIndex = this.data.length - 1;


                this.data.push(JSON.parse(JSON.stringify(this.data[currentIndex])));
                currentIndex += 1;
                this.data[currentIndex].title = "Перевіряємо чи план оптимальний";
                this.data[currentIndex].teor = "Для перевірки плану на оптимальність шукаємо D<sub>ij</sub> для незаповнених клітинок за " +
                    " формулою D<sub>ij</sub>=C<sub>ij</sub>-V<sub>j</sub>-U<sub>i</sub>. Якщо всі D>=0 то план оптимальний, в іншому випадку вибираємо найменше D і вводим його в базис. ";
                this.data[currentIndex].description = "";


                if (this.data[currentIndex].countFullX === (parseInt(this.n) + parseInt(this.m) - 1)) {
                    let min = null,
                        minI = null,
                        minJ = null;
                    this.data[currentIndex].f=0;
                    for (let i = 0; i < this.n; i += 1) {
                        for (let j = 0; j < this.m; j += 1) {
                            if (this.data[currentIndex].data[i][j].x === null) {
                                this.data[currentIndex].data[i][j].d = this.data[currentIndex].data[i][j].c - this.data[currentIndex].v[j] - this.data[currentIndex].u[i];
                                this.data[currentIndex].description = this.data[currentIndex].description +
                                    "D<sub>" + (i + 1) + " " + (j + 1) + "</sub>=" + this.data[currentIndex].data[i][j].c + "-" + this.data[currentIndex].v[j] + "-" + this.data[currentIndex].u[i] + "=" + this.data[currentIndex].data[i][j].d + ";   ";

                                if (min === null || this.data[currentIndex].data[i][j].d < min) {
                                    min = this.data[currentIndex].data[i][j].d;
                                    minI = i;
                                    minJ = j;
                                }

                            }
                            else {
                                this.data[currentIndex].f += this.data[currentIndex].data[i][j].x * this.data[currentIndex].data[i][j].c

                            }
                        }
                    }

                    if (min <= 0) {
                        this.data[currentIndex].description = this.data[currentIndex].description + "<br>   ПЛАН НЕ ОПТИМАЛЬНИЙ!!!  Вводим в базис клітинку [" + (minI + 1) + "," + (minJ + 1) + "]  ";
                        this.base(currentIndex, minI, minJ);

                    } else {
                        this.data[currentIndex].description = this.data[currentIndex].description + "<br>   ПЛАН ОПТИМАЛЬНИЙ";

                    }
                }
                else {
                    console.error('error');
                }
            },
            base: function (currentIndex, startI, startJ) {
                let tempCells = [{
                        'data': this.data[currentIndex].data[startI][startJ],
                        'i': startI,
                        'j': startJ
                    }],
                    cells = this.baseHorizontal(currentIndex, tempCells, startI, startJ, startI, startJ);
                this.reBase(currentIndex, cells);
                return null;
            },
            baseHorizontal: function (currentIndex, cells, currentI, currentJ, startI, startJ) {
                for (let j = 0; j < this.m; j += 1) {
                    if (this.data[currentIndex].data[currentI][j].x !== null && j !== currentJ) {
                        let temp = {'data': this.data[currentIndex].data[currentI][j], 'i': currentI, 'j': j},
                            tempCells = this.baseVertical(currentIndex, cells.concat([temp]), currentI, j, startI, startJ);

                        if (tempCells.length) {
                            return tempCells;
                        }
                    }
                }
                return [];
            },
            baseVertical: function (currentIndex, cells, currentI, currentJ, startI, startJ) {
                if (currentJ === startJ) {
                    return cells;
                }
                for (let i = 0; i < this.n; i += 1) {

                    if (this.data[currentIndex].data[i][currentJ].x !== null && i !== currentI) {
                        let temp = {'data': this.data[currentIndex].data[i][currentJ], 'i': i, 'j': currentJ},
                            tempCells = this.baseHorizontal(currentIndex, cells.concat([temp]), i, currentJ, startI, startJ);

                        if (tempCells.length) {
                            return tempCells;
                        }
                    }
                }
                return [];
            },
            reBase: function (currentIndex, cells) {

                let state = JSON.parse(JSON.stringify(this.state));
                state.countFullX = this.data[currentIndex].countFullX;
                state.a = Object.assign([], this.data[0].a);
                state.b = Object.assign([], this.data[0].b);
                state.u = Object.assign([], this.data[0].u);
                state.v = Object.assign([], this.data[0].v);
                state.data = JSON.parse(JSON.stringify(this.data[currentIndex].data));

                for (let i = 0; i < this.n; i += 1) {
                    for (let j = 0; j < this.m; j += 1) {
                        state.data[i][j].d = null;
                    }
                }
                this.data.push(state);
                currentIndex += 1;

                this.data[currentIndex].title = "Вводимо в базис клітинку";
                this.data[currentIndex].teor = "Вводимо клітинку в базис та ставимо значення Х=0. Будуємо цикл по базисних клітинках починаючи з клітинки, яку " +
                    "ми ввели в базис. Потім  по черзі додаємо і віднімаємо, значення яке вираховується" +
                    " мінімальне  значення серед клітинок, від яких потрібно віднімати.";
                for (let k = 0; k < cells.length; k += 1) {
                    this.data[currentIndex].description = this.data[currentIndex].description + "X<sub>" + (cells[k].i + 1) + " " + (cells[k].j + 1) + "</sub> ";
                    if (k !== cells.length - 1) {
                        this.data[currentIndex].description = this.data[currentIndex].description + "->";
                    }
                }
                this.data[currentIndex].description = this.data[currentIndex].description + "рахуємо значення, яке будемо віднімати min{";
                this.data[currentIndex].data[cells[0].i][cells[0].j].x = 0;
                let min = null;
                for (let k = 1; k < cells.length; k += 2) {
                    this.data[currentIndex].description = this.data[currentIndex].description + cells[k].data.x;
                    if (k !== cells.length - 1) {
                        this.data[currentIndex].description = this.data[currentIndex].description + ",";
                    }
                    if (min === null || cells[k].data.x < min) {
                        min = cells[k].data.x;


                    }
                }
                this.data[currentIndex].description = this.data[currentIndex].description + "}=" + min + ". Записуємо нові значення X:  ";
                for (let k = 0; k < cells.length; k += 1) {
                    if (k % 2 === 0) {
                        this.data[currentIndex].description = this.data[currentIndex].description + "X<sub>" + (cells[k].i + 1) +
                            " " + (cells[k].j + 1) + "</sub>=" + this.data[currentIndex].data[cells[k].i][cells[k].j].x + "+" + min + "=" + (this.data[currentIndex].data[cells[k].i][cells[k].j].x += min) + ";  ";

                    } else {
                        this.data[currentIndex].description = this.data[currentIndex].description + "X <sub>" + (cells[k].i + 1) +
                            " " + (cells[k].j + 1) + "</sub>=" + this.data[currentIndex].data[cells[k].i][cells[k].j].x + "-" + min + "=" + (this.data[currentIndex].data[cells[k].i][cells[k].j].x -= min) + ";  ";
                        if (this.data[currentIndex].data[cells[k].i][cells[k].j].x === 0) {

                            this.data[currentIndex].data[cells[k].i][cells[k].j].x = null;

                        }
                    }

                }
                this.data[currentIndex].description = this.data[currentIndex].description + "Виводимо з базису клітинку, де X=0. Знову перевіряємо чи план оптимальний.";

                this.optimalPlan();


            }

        },
        watch: {
            n: function () {
                let lengthA = this.data[0].a.length;
                if (this.n > lengthA) {
                    for (let i = lengthA; i < this.n; i += 1) {
                        this.data[0].a.push(null);
                        this.data[0].u.push(null);
                        this.data[0].data.push([]);
                        for (let j = 0; j < this.m; j += 1) {
                            this.data[0].data[i].push(Object.assign({}, this.item));
                        }
                    }
                }
                else {
                    this.data[0].a.splice(this.n, lengthA - this.n);
                    this.data[0].data.splice(this.n, lengthA - this.n);
                    this.data[0].v.splice(this.n, lengthA - this.n);


                }
            },
            m: function () {
                let lengthB = this.data[0].b.length;
                if (this.m > lengthB) {
                    for (let j = 0; j < this.m - lengthB; j += 1) {
                        this.data[0].b.push(null);
                        this.data[0].v.push(null);
                    }
                    for (let i = 0; i < this.n; i += 1) {
                        for (let j = 0; j < this.m - lengthB; j += 1) {
                            this.data[0].data[i].push(Object.assign({}, this.item));
                        }
                    }

                }
                else {
                    this.data[0].b.splice(this.m, lengthB - this.m);
                    this.data[0].v.splice(this.m, lengthB - this.m);
                    for (let i = 0; i < this.n; i += 1) {
                        this.data[0].data[i].splice(this.m, lengthB - this.m);
                    }
                }
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    table input {
        max-width: 50px;
    }

    .has-error {
        color: red;

    }

    .cell {
        position: relative;
    }

    .baz {
        background-color: #9fcdff;
    }

    .onecheck:after {
        position: absolute;
        top: 0;
        right: 25px;
        content: "\2713";
    }

    .twocheck:before {
        position: absolute;
        top: 0;
        right: 20px;
        content: "\2713";
    }

    .wrapper {
        width: 100%;
        max-width: 1440px;
        padding: 15px;
        box-sizing: border-box;
    }
    .btn.badge-pill{
        padding:5px 50px;
    }

</style>