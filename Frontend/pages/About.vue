<template>
    <div class="container">
        <div class="hero">
            <h1 class="title">OPTIMAL<br>SHOPPING<br>ONLINE STORE</h1>
        </div>
        <div class="info">
            <div class="sub-container have-image">
                <img src="../assets/Images/about_us.png" alt="" :style="{height: '150px'}" class="about-img">
            </div>
            <div class="sub-container have-social">
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum massa orci ut consectetur ac, fermentum egestas. Urna ipsum, magna scelerisque facilisi sit tincidunt. Pulvinar turpis massa nibh odio aliquam. </p>
                <div>
                    <a-icon type="facebook" class="icons" />  
                    <a-icon type="instagram" class="icons"/>
                    <a-icon type="mail" class="icons"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100vh - 64px) ;
}

.hero {
    background-image: url('../assets/Images/about_bg.png');
    background-size: cover;
    background-position: center;
    height: 50vh;
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;

}

.info {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex:1;
}

.title {
    color: #fff;
    font-weight: bold;
    font-size: 5vw;
    margin: 0 0 0 70px;
}

.sub-container {
    display: flex;
    height: 100%;
    width: 50vw;
}

.have-social {
    justify-content: center;
    flex-direction: column;
}

.icons {
    font-size: 18px;
    margin-right:10px ;
}

.have-image {   
    align-items: center;
}

.about-img {
    margin-left: 70px;
}

.description {
    max-width: 500px;
    margin-right:40px ;
}

@media (max-width: 801px) {
    .have-image {
        width: 20vw;
        margin: 0;
    }

    .have-social {
        width: 80vw;
    }

    .about-img {
        margin: 0 auto;
    }

    .title {
        font-size: 9vw;
        margin-left: 30px;
    }
}


</style>