<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center logo">Steve's Ponderings</div>
            <div class="display-1 font-weight-bold white--text text-xs-center slogan">adventures in technology</div>
            <v-btn fab class="mt-5 blue darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'HomeHero'
};
</script>

<style scoped>
.home-hero{
    background: url('../assets/images/home-hero.jpg');
    background-size:cover;
    width: 100%;
    height: 100%;
}
.logo{
    stroke: 5px black solid;
}
</style>