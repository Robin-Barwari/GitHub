<script>

export default {
}
</script>

<template>

    <body>
        <div class="flex xs12 sm6 mb-3">
            <div class="card" style="height: auto">
                <div class="container">
                    <div class="layout">
                        <div class="flex pa-3">
                            <h1>About Us</h1>
                            <p class="py-1">
                                We are a platform that serves the people's needs of having someone to carry them
                                through rough times. We offer a variety of offers and the safest way to play with
                                others.
                            </p>
                            <a name="collection"></a>
                            <h2 class="py-1">Cheap & Reliable</h2>
                            <p class="py-1">
                                We are all about having the best price and the best security for our customers and
                                providers. That's why we make sure that transactions happen in a secure way.
                            </p>
                            <a name="paintings"></a>
                            <h2 class="py-1">Teamwork</h2>
                            <p class="py-1">
                                You will be able to find the best teammates for you whether it is to beat a tough
                                level or if it's going to be a competitive game
                            </p>
                            <a name="website"></a>
                            <h2 class="py-1">Coaching</h2>
                            <p class="py-1">
                                The experienced players will be happy to help you towards reaching you potential and
                                increase performace in-game
                            </p>
                            <a name="token"></a>
                            <h2 class="py-1">Carry</h2>
                            <p class="py-1">
                                When you need to win a game in a competitive game there is always someone there for
                                you.
                            </p>
                            <a name="artist"></a>
                            <h2 class="py-1">Casual Talk</h2>
                            <p class="py-1">
                                The providers are able to choose between interests which makes talking with each
                                other easier and could lead to friendship beyond gaming.
                            </p>
                            <!---->
                        </div>
                        <div class="flex pa-3 hidden-sm-and-down">
                            <h2 class="py-1 ma-2">Artist Picks</h2>
                            <img src="/gamer1.jpeg" img-width="100" />
                            <img src="/gamer2.jpeg" img-width="100" />
                            <img src="/gamer3.jpeg" img-width="100" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'montserrat', sans-serif;
    background-color: rgb(241, 130, 45);
}

header {
    width: 100vw;
    background-color: #222;
    padding: 15px;
}

img {
    width: 100%;
}

h1 {
    padding-top: 25px;
    text-align: center;
    font-weight: normal;
    color: white;
}

h2 {
    padding-top: 25px;
    text-align: center;
    font-weight: normal;
    color: white;
}

p {
    color: rgb(220, 220, 220);
}

.container img {
    width: 300px;
    height: 200px;
}

@media screen and (min-width: 601px) {
    h1 {
        padding-top: 25px;
        text-align: center;
        font-weight: normal;
    }

    .container img {
        width: 300px;
    }


    .container p {
        font-size: 20px;
        padding-left: 20px;
        padding-right: 10px;
        font-weight: bold;
    }
}

@media screen and (max-width: 600px) {
    h1 {
        text-align: center;
        font-weight: normal;
    }

    .container img {
        width: 150px;
    }

    .container p {
        font-size: 15px;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 540;
    }
}
</style>

