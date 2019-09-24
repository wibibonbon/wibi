<template>
    <div class="home" ref="home">
        <Background>
            <Title @scrollToY="scrollToY" ref="title" />
            <Navbar ref="nav" @scrollToItem="scrollToItem" />
            <AboutMe ref="about" />
            <Portfolio ref="portfolio" />
            <Experience ref="timeline" />
            <Contact ref="contact" />
        </Background>
    </div>
</template>

<script>
import Title from '../components/Title'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/PortfolioGrid'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Background from '../components/Background'

export default {
    name: 'home',
    components: {
        Title,
        Navbar,
        AboutMe,
        Portfolio,
        Experience,
        Contact,
        Background,
    },
    methods: {
        scrollToY(y) {
            console.log('scroll down 2: ' + y)
            window.scrollTo({ top: y, behavior: 'smooth' })
        },
        scrollToItem(item) {
            //console.log('scroll item: ' + this.$refs[item].tagName)
            let x = this.$refs[item].$el.offsetTop
            console.log(item)
            console.log(x)
            window.scrollTo({ top: x, behavior: 'smooth' })
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