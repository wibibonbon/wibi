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
    data() {
        return {
            supportsNativeSmoothScroll: false,
        }
    },
    mounted() {
        this.supportsNativeSmoothScroll =
            'scrollBehavior' in document.documentElement.style
    },
    methods: {
        scrollToY(y) {
            if (this.supportsNativeSmoothScroll)
                window.scrollTo({ top: y, behavior: 'smooth' })
            else this.smoothScrollTo(y, 600)
        },
        scrollToItem(item) {
            let x = this.$refs[item].$el.offsetTop
            if (this.supportsNativeSmoothScroll)
                window.scrollTo({ top: x, behavior: 'smooth' })
            else this.smoothScrollTo(x, 600)
        },

        handleScroll() {
            this.$refs.nav.handleScroll()
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },

        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        },

        smoothScrollTo(to, duration) {
            const element =
                    document.scrollingElement || document.documentElement,
                start = element.scrollTop,
                change = to - start,
                startDate = +new Date()

            // t = current time
            // b = start value
            // c = change in value
            // d = duration
            const easeInOutQuad = (t, b, c, d) => {
                t /= d / 2
                if (t < 1) return (c / 2) * t * t + b
                t--
                return (-c / 2) * (t * (t - 2) - 1) + b
            }

            const animateScroll = _ => {
                const currentDate = +new Date()
                const currentTime = currentDate - startDate
                element.scrollTop = parseInt(
                    easeInOutQuad(currentTime, start, change, duration)
                )
                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll)
                } else {
                    element.scrollTop = to
                }
            }
            animateScroll()
        },
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