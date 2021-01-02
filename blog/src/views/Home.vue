<template>
    <span>
        <home-hero></home-hero>
    </span>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero';

export default {
    name: 'home',
    components: {
        HomeHero
    }
};
</script>
