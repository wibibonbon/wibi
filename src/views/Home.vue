<template>
    <div class="home" ref="home">
        <Title @scrollToY="scrollToY" />
        <Navbar ref="nav" />

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
import Navbar from '../components/Navbar'

export default {
    name: 'home',
    components: {
        Title,
        Navbar,
        AboutMe,
        Portfolio,
        Experience,
        Contact,
    },
    methods: {
        scrollToY(y) {
            console.log('scroll down 2: ' + y)
            window.scrollTo({ top: y, behavior: 'smooth' })
        },
    },
    handleScroll() {
        console.log('teeest')
        this.$refs.nav.handleScroll()
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style scoped lang="scss">
.home {
    width: 100vw;
    //height: 100%; //important for scroll down button
    //overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    top: 0;
    z-index: -5;
}
</style>