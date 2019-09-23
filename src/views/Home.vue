<template>
    <div class="home">
        <Title />

        <AboutMe />
        <Portfolio />

        <Experience />
        <Contact />
    </div>
</template>

<script>
import Title from '../components/Title'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/PortfolioGrid'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default {
    name: 'home',
    components: {
        Title,
        AboutMe,
        Portfolio,
        Experience,
        Contact,
    },
}
</script>

<style scoped lang="scss">
.home {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    top: 0;
    z-index: -5;
}
</style>