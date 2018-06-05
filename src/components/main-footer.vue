<template>

    <footer class="page-footer font-small indigo pt-0">
        <div class="container">
            <div class="row pt-5 mb-3 text-center d-flex justify-content-center">
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <router-link class="navbar-brand" to="/">About us</router-link>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <router-link class="navbar-brand" to="/cars">Cars</router-link>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <router-link class="navbar-brand" to="/car/add">Add car</router-link>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <router-link class="navbar-brand" to="/">FAQ</router-link>
                    </h6>
                </div>
                <div class="col-md-2 mb-3">
                    <h6 class="text-uppercase font-weight-bold">
                        <router-link class="navbar-brand" to="/">Contact</router-link>
                    </h6>
                </div>
            </div>
            <hr class="rgba-white-light" style="margin: 0 15%;">
            <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
                <div class="col-md-8 col-12 mt-5">
                    <p style="line-height: 1.7rem"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab asperiores aspernatur aut commodi error iste libero minima molestias necessitatibus, nobis odio possimus quibusdam reiciendis rem repudiandae sequi veritatis voluptatibus!</span><span>Ab aliquam assumenda blanditiis et, fugiat illum ipsam iure laudantium maiores modi neque non numquam officia porro quam recusandae soluta ullam vero? Explicabo incidunt molestias perspiciatis quia recusandae reprehenderit repudiandae.</span><span>A eos excepturi nulla possimus repellat soluta tempora. A, ad aperiam, beatae cupiditate eaque earum necessitatibus perspiciatis possimus sequi similique sint veniam voluptas, voluptatibus? Architecto blanditiis esse omnis repellat vel.</span></p>

                </div>
            </div>
            <hr class="clearfix d-md-none rgba-white-light" style="margin: 10% 15% 5%;">
            <div class="row pb-3">
                <div class="col-md-12">
                    <div class="mb-5 flex-center box_link">
                        <a class="fb ic">
                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ5LjY1MiA0OS42NTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5LjY1MiA0OS42NTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjQuODI2LDBDMTEuMTM3LDAsMCwxMS4xMzcsMCwyNC44MjZjMCwxMy42ODgsMTEuMTM3LDI0LjgyNiwyNC44MjYsMjQuODI2YzEzLjY4OCwwLDI0LjgyNi0xMS4xMzgsMjQuODI2LTI0LjgyNiAgICBDNDkuNjUyLDExLjEzNywzOC41MTYsMCwyNC44MjYsMHogTTMxLDI1LjdoLTQuMDM5YzAsNi40NTMsMCwxNC4zOTYsMCwxNC4zOTZoLTUuOTg1YzAsMCwwLTcuODY2LDAtMTQuMzk2aC0yLjg0NXYtNS4wODhoMi44NDUgICAgdi0zLjI5MWMwLTIuMzU3LDEuMTItNi4wNCw2LjA0LTYuMDRsNC40MzUsMC4wMTd2NC45MzljMCwwLTIuNjk1LDAtMy4yMTksMGMtMC41MjQsMC0xLjI2OSwwLjI2Mi0xLjI2OSwxLjM4NnYyLjk5aDQuNTZMMzEsMjUuN3ogICAgIiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                        </a>
                        <a class="tw ic">
                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ5LjY1MiA0OS42NTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5LjY1MiA0OS42NTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjQuODI2LDBDMTEuMTM3LDAsMCwxMS4xMzcsMCwyNC44MjZjMCwxMy42ODgsMTEuMTM3LDI0LjgyNiwyNC44MjYsMjQuODI2YzEzLjY4OCwwLDI0LjgyNi0xMS4xMzgsMjQuODI2LTI0LjgyNiAgICBDNDkuNjUyLDExLjEzNywzOC41MTYsMCwyNC44MjYsMHogTTM1LjkwMSwxOS4xNDRjMC4wMTEsMC4yNDYsMC4wMTcsMC40OTQsMC4wMTcsMC43NDJjMCw3LjU1MS01Ljc0NiwxNi4yNTUtMTYuMjU5LDE2LjI1NSAgICBjLTMuMjI3LDAtNi4yMzEtMC45NDMtOC43NTktMi41NjVjMC40NDcsMC4wNTMsMC45MDIsMC4wOCwxLjM2MywwLjA4YzIuNjc4LDAsNS4xNDEtMC45MTQsNy4wOTctMi40NDYgICAgYy0yLjUtMC4wNDYtNC42MTEtMS42OTgtNS4zMzgtMy45NjljMC4zNDgsMC4wNjYsMC43MDcsMC4xMDMsMS4wNzQsMC4xMDNjMC41MjEsMCwxLjAyNy0wLjA2OCwxLjUwNi0wLjE5OSAgICBjLTIuNjE0LTAuNTI0LTQuNTgzLTIuODMzLTQuNTgzLTUuNjAzYzAtMC4wMjQsMC0wLjA0OSwwLjAwMS0wLjA3MmMwLjc3LDAuNDI3LDEuNjUxLDAuNjg1LDIuNTg3LDAuNzE0ICAgIGMtMS41MzItMS4wMjMtMi41NDEtMi43NzMtMi41NDEtNC43NTVjMC0xLjA0OCwwLjI4MS0yLjAzLDAuNzczLTIuODc0YzIuODE3LDMuNDU4LDcuMDI5LDUuNzMyLDExLjc3Nyw1Ljk3MiAgICBjLTAuMDk4LTAuNDE5LTAuMTQ3LTAuODU0LTAuMTQ3LTEuMzAzYzAtMy4xNTUsMi41NTgtNS43MTQsNS43MTMtNS43MTRjMS42NDQsMCwzLjEyNywwLjY5NCw0LjE3MSwxLjgwNCAgICBjMS4zMDMtMC4yNTYsMi41MjMtMC43MywzLjYzLTEuMzg3Yy0wLjQzLDEuMzM1LTEuMzMzLDIuNDU0LTIuNTE2LDMuMTYyYzEuMTU3LTAuMTM4LDIuMjYxLTAuNDQ0LDMuMjgyLTAuODk5ICAgIEMzNy45ODcsMTcuMzM0LDM3LjAxOCwxOC4zNDEsMzUuOTAxLDE5LjE0NHoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                        </a>
                        <a class="gplus ic">
                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni4zOTIgNDg2LjM5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg2LjM5MiA0ODYuMzkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0yNDMuMTk2LDBDMTA4Ljg5MSwwLDAsMTA4Ljg5MSwwLDI0My4xOTZzMTA4Ljg5MSwyNDMuMTk2LDI0My4xOTYsMjQzLjE5NiAgICAgczI0My4xOTYtMTA4Ljg5MSwyNDMuMTk2LTI0My4xOTZDNDg2LjM5MiwxMDguODYxLDM3Ny41MDEsMCwyNDMuMTk2LDB6IE0xNzUuMzQ0LDQwNi44MzZjLTUzLjgzNywwLTk5LjI1NC0yMS45MTgtOTkuMjU0LTU2LjkzOCAgICAgYzAtMzUuNTM3LDQxLjQzNC02OS44NTgsOTUuMjcyLTY5LjgyOGwxNi44MTEtMC4xNTJjLTcuMzU3LTcuMTQ0LTEzLjE5My0xNS45MjktMTMuMTkzLTI2Ljc4MiAgICAgYzAtNi40NDUsMi4wNjctMTIuNjE2LDQuOTI1LTE4LjExOGwtOC45NjgsMC4zMDRjLTQ0LjIzMSwwLTczLjg0LTMxLjQ2My03My44NC03MC40NjZjMC0zOC4xNTEsNDAuODg3LTcxLjA3NCw4NC4zNTktNzEuMDc0ICAgICBoOTYuOTc0bC0yMS43NjYsMTUuNjg2aC0zMC43MzRjMjAuMzk4LDcuODQzLDMxLjI1MSwzMS42MTUsMzEuMjUxLDU1Ljk5NmMwLDIwLjQ1OS0xMS4zMzksMzguMDkxLTI3LjM2LDUwLjYxNSAgICAgYy0xNS42NTYsMTIuMjUxLTE4LjYwNCwxNy4zNTgtMTguNjA0LDI3Ljc1NWMwLDguODc3LDE2Ljc4MSwyMy45NTUsMjUuNTM2LDMwLjE4N2MyNS42MjcsMTguMTE4LDMzLjg2NSwzNC45MjksMzMuODY1LDYyLjk4OCAgICAgQzI3MC42MTYsMzcyLjAyOSwyMzYuNzIxLDQwNi44MzYsMTc1LjM0NCw0MDYuODM2eiBNMzY0Ljc5NCwyMTMuMzc0djYwLjcwOGgtMzAuMzY5di02MC43MDhoLTYwLjgyOXYtMzAuOTc3aDYwLjgyOXYtNjAuNzk5ICAgICBoMzAuMzY5djYwLjc5OWg2MC43OTl2MzAuOTc3SDM2NC43OTR6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxwYXRoIGQ9Ik0yMDUuNzc0LDI5My4wMjFjLTcuMzU3LTIuMzcxLTE1LjQ3My0zLjgtMjQuMTM3LTMuODkxICAgICBjLTM3LjIwOS0wLjM5NS03MC41MjcsMjIuNjc4LTcwLjUyNyw1MC40MzNjMCwyOC4zMzIsMjYuODczLDUxLjg2MSw2NC4wODIsNTEuODYxYzUyLjMxNywwLDcwLjUyNy0yMi4xMzEsNzAuNTI3LTUwLjQwMiAgICAgYzAtMy40MDUtMC40MjYtNi43NDktMS4xODYtMTAuMDAxQzI0MC40NiwzMTQuOTY5LDIyNS45NTksMzA3LjAzNSwyMDUuNzc0LDI5My4wMjF6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxwYXRoIGQ9Ik0yMjIuMzQyLDE2Ny4zNDljLTQuMzE3LTMyLjc3MS0yOC4wNTktNTkuMDk3LTUzLjAxNy01OS44NTcgICAgIGMtMjQuOTU4LTAuNzMtNDEuNzA4LDI0LjM1LTM3LjM5MSw1Ny4xODFjNC4zMTcsMzIuODAxLDI4LjA1OSw2MC4wMDksNTMuMDQ3LDYwLjczOCAgICAgQzIwOS45MDgsMjI2LjE3MiwyMjYuNjg5LDIwMC4xODEsMjIyLjM0MiwxNjcuMzQ5eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />

                        </a>
                        <a class="li ic">
                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni4zOTIgNDg2LjM5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg2LjM5MiA0ODYuMzkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0yNDMuMTk2LDBDMTA4Ljg5MSwwLDAsMTA4Ljg5MSwwLDI0My4xOTZzMTA4Ljg5MSwyNDMuMTk2LDI0My4xOTYsMjQzLjE5NiAgICAgczI0My4xOTYtMTA4Ljg5MSwyNDMuMTk2LTI0My4xOTZDNDg2LjM5MiwxMDguODYxLDM3Ny41MDEsMCwyNDMuMTk2LDB6IE0xODIuMzk3LDM2MC45OTRoLTYwLjc5OVYxNDguMTk3aDYwLjc5OVYzNjAuOTk0eiAgICAgIE0xNTMuODgyLDEzNS4xNTZjLTE1Ljc0NywwLTI4LjQ4NC0xMi43NjgtMjguNDg0LTI4LjUxNXMxMi43NjgtMjguNTE1LDI4LjQ4NC0yOC41MTVjMTUuNzQ3LDAuMDMsMjguNTE1LDEyLjc5OCwyOC41MTUsMjguNTE1ICAgICBDMTgyLjM5NywxMjIuMzg4LDE2OS42MjksMTM1LjE1NiwxNTMuODgyLDEzNS4xNTZ6IE0zOTUuMTkzLDM2MC45OTRoLTYwLjc5OVYyMjkuNDI1YzAtMTUuNDEzLTQuNDA4LTI2LjIwNC0yMy4zNDctMjYuMjA0ICAgICBjLTMxLjQwMywwLTM3LjQ1MiwyNi4yMDQtMzcuNDUyLDI2LjIwNHYxMzEuNTY5aC02MC43OTlWMTQ4LjE5N2g2MC43OTl2MjAuMzM3YzguNjk0LTYuNjU3LDMwLjM5OS0yMC4zMDcsNjAuNzk5LTIwLjMwNyAgICAgYzE5LjY5OSwwLDYwLjc5OSwxMS43OTUsNjAuNzk5LDgzLjA1MVYzNjAuOTk0eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                        </a>
                        <a class="ins ic">
                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ5LjY1MiA0OS42NTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5LjY1MiA0OS42NTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI0LjgyNSwyOS43OTZjMi43MzksMCw0Ljk3Mi0yLjIyOSw0Ljk3Mi00Ljk3YzAtMS4wODItMC4zNTQtMi4wODEtMC45NC0yLjg5N2MtMC45MDMtMS4yNTItMi4zNzEtMi4wNzMtNC4wMjktMi4wNzMgICAgIGMtMS42NTksMC0zLjEyNiwwLjgyLTQuMDMxLDIuMDcyYy0wLjU4OCwwLjgxNi0wLjkzOSwxLjgxNS0wLjk0LDIuODk3QzE5Ljg1NCwyNy41NjYsMjIuMDg1LDI5Ljc5NiwyNC44MjUsMjkuNzk2eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8cG9seWdvbiBwb2ludHM9IjM1LjY3OCwxOC43NDYgMzUuNjc4LDE0LjU4IDM1LjY3OCwxMy45NiAzNS4wNTUsMTMuOTYyIDMwLjg5MSwxMy45NzUgMzAuOTA3LDE4Ljc2MiAgICAiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHBhdGggZD0iTTI0LjgyNiwwQzExLjEzNywwLDAsMTEuMTM3LDAsMjQuODI2YzAsMTMuNjg4LDExLjEzNywyNC44MjYsMjQuODI2LDI0LjgyNmMxMy42ODgsMCwyNC44MjYtMTEuMTM4LDI0LjgyNi0yNC44MjYgICAgIEM0OS42NTIsMTEuMTM3LDM4LjUxNiwwLDI0LjgyNiwweiBNMzguOTQ1LDIxLjkyOXYxMS41NmMwLDMuMDExLTIuNDQ4LDUuNDU4LTUuNDU3LDUuNDU4SDE2LjE2NCAgICAgYy0zLjAxLDAtNS40NTctMi40NDctNS40NTctNS40NTh2LTExLjU2di01Ljc2NGMwLTMuMDEsMi40NDctNS40NTcsNS40NTctNS40NTdoMTcuMzIzYzMuMDEsMCw1LjQ1OCwyLjQ0Nyw1LjQ1OCw1LjQ1N1YyMS45Mjl6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxwYXRoIGQ9Ik0zMi41NDksMjQuODI2YzAsNC4yNTctMy40NjQsNy43MjMtNy43MjMsNy43MjNjLTQuMjU5LDAtNy43MjItMy40NjYtNy43MjItNy43MjNjMC0xLjAyNCwwLjIwNC0yLjAwMywwLjU2OC0yLjg5NyAgICAgaC00LjIxNXYxMS41NmMwLDEuNDk0LDEuMjEzLDIuNzA0LDIuNzA2LDIuNzA0aDE3LjMyM2MxLjQ5MSwwLDIuNzA2LTEuMjEsMi43MDYtMi43MDR2LTExLjU2aC00LjIxNyAgICAgQzMyLjM0MiwyMi44MjMsMzIuNTQ5LDIzLjgwMiwzMi41NDksMjQuODI2eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                        </a>
                        <a class="pin ic">
                            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwOC41MiA1MDguNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwOC41MiA1MDguNTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTI1NC4yNiwwQzExMy44NDUsMCwwLDExMy44NDUsMCwyNTQuMjZzMTEzLjg0NSwyNTQuMjYsMjU0LjI2LDI1NC4yNiAgICAgczI1NC4yNi0xMTMuODQ1LDI1NC4yNi0yNTQuMjZDNTA4LjUyLDExMy44MTMsMzk0LjY3NSwwLDI1NC4yNiwweiBNMjc0LjA5MiwzMjMuMDA1Yy0xOC41OTMtMS40My0yNi4zNzktMTAuNjQ3LTQwLjkzNi0xOS41MTQgICAgIGMtOC4wMDksNDIuMDE2LTE3Ljc5OCw4Mi4zMTctNDYuNzg0LDEwMy4zMjVjLTguOTYzLTYzLjQ3LDEzLjEyNi0xMTEuMTQzLDIzLjM5Mi0xNjEuNzczICAgICBjLTE3LjQ4LTI5LjQ2MiwyLjA5OC04OC42NzMsMzguOTY1LTc0LjA4NWM0NS4zNTQsMTcuOTU3LTM5LjMxNSwxMDkuNDI3LDE3LjU0NCwxMjAuODY5ICAgICBjNTkuMzM4LDExLjkxOCw4My41ODgtMTAzLjAwNyw0Ni43ODQtMTQwLjM4M2MtNTMuMjA0LTUzLjk2Ny0xNTQuNzgxLTEuMjQtMTQyLjI5LDc2LjAyNGMzLjA1MSwxOC44NzksMjIuNTM0LDI0LjYsNy43ODcsNTAuNjkzICAgICBjLTM0LjAzOS03LjUwMS00NC4yMDktMzQuMzg5LTQyLjkwNi03MC4xNzZjMi4wOTgtNTguNTc1LDUyLjYzMi05OS41NzUsMTAzLjMyNS0xMDUuMjY0ICAgICBjNjQuMTA1LTcuMTgzLDEyNC4yMzgsMjMuNTE5LDEzMi41MzMsODMuODFDMzgwLjg4MSwyNTQuNTc4LDM0Mi41ODMsMzI4LjMxMywyNzQuMDkyLDMyMy4wMDV6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                            <!--<font-awesome-icon :icon="coffee" ></font-awesome-icon>
                            <font-awesome-icon :icon="fax" ></font-awesome-icon>-->
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer-copyright py-3 text-center">
            © 2018 Copyright:
            <router-link class="navbar-brand" to="/">BuyCar</router-link>
        </div>


    </footer>




</template>
<script>
   /* import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
//    import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
    import {book, faFax} from '@fortawesome/fontawesome-free-solid'*/
    export default {
        name: 'mainFooter',
       /* components:{
            FontAwesomeIcon
        },*/
        computed:{},
        data: function () {
            return {
               /* coffee:faFacebook,
                fax:faFax*/
            }
        },
    }

</script>