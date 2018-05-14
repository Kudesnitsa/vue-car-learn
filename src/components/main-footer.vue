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
                    <div class="mb-5 flex-center">
                        <a class="fb-ic">
                            <
                            <icon name="ban"> </icon>
                            <i class="fa fa-facebook fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="tw-ic">
                            <i class="fa fa-twitter fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="gplus-ic">
                            <i class="fa fa-google-plus fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="li-ic">
                            <i class="fa fa-linkedin fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="ins-ic">
                            <i class="fa fa-instagram fa-lg white-text mr-md-4"> </i>
                        </a>
                        <a class="pin-ic">
                            <i class="fa fa-pinterest fa-lg white-text"> </i>
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
    export default {
        name: 'mainFooter',
        data: function () {
            return {

            }
        },
    }

</script>