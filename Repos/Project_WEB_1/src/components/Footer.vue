<template>
    <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">

                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href="/facebook.png"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li><a class="hover-target"
                                        href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpng.is%2Ff%2Flinkedin-with-circle-comments-transparent-background-website-icon%2Fm2H7H7b1d3Z5d3A0-201907240246.html&psig=AOvVaw2cNg8LfRlvKOdC1NN70c9w&ust=1664215425029000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCLDOg97DsPoCFQAAAAAdAAAAABAP"><i
                                            class="fab fa-linkedin-in"></i></a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>Copyright &copy; 2022 All Rights Reserved.</p>
    </footer>
</template>

<style scoped>
section {
    padding: 60px 0;
    /* min-height: 100vh;*/
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.contact-area {
    border-bottom: 1px solid #353C46;
}

.contact-content p {
    font-size: 15px;
    margin: 30px 0 60px;
    position: relative;
}

.contact-content p::after {
    background: #353C46;
    bottom: -30px;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: 80%;
}

.contact-content h6 {
    color: #8b9199;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
}

.contact-content span {
    color: #353c47;
    margin: 0 10px;
}

.contact-social {
    margin-top: 30px;

}

.contact-social>ul {
    display: inline-flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    justify-content: center;
}

.contact-social ul li a {
    border: 1px solid #8b9199;
    color: #8b9199;
    display: flex;
    align-items: center;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 40px;
    justify-content: center;
}

.contact-social ul li a:hover {
    border: 1px solid #FAB702;
    color: #FAB702;
}

.contact-content img {
    max-width: 210px;
}

section,
footer {
    background: #1A1E25;
    color: #868c96;
}

footer p {
    padding: 40px 0;
    text-align: center;
}

footer img {
    width: 44px;
}
</style>