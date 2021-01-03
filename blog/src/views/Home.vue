<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-spotlight></home-spotlight>
    </span>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomeSpotlight from '@/components/HomeSpotlight';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomeSpotlight
    }
};
</script>
