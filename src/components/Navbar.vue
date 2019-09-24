<template>
    <div class="navbar" :class="{'sticky': isSticky}" ref="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sticky: null,
            isSticky: false,
        }
    },
    methods: {
        handleScroll() {
            console.log('scrollling')
            if (window.pageYOffset >= this.sticky) {
                this.$refs.navbar.classList.add('sticky')
            } else {
                this.$refs.navbar.classList.remove('sticky')
            }
        },
    },
    mounted() {
        this.sticky = this.$refs.navbar.offsetTop
        window.addEventListener('scroll', this.handleScroll)
    },

    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>

<style scoped lang="scss">
/* Style the navbar */
.navbar {
    background-color: $pink;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 60px;
}

/* Navbar links */
.navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    margin: 0;
    padding: 14px;
    text-decoration: none;
}
.sticky {
    position: fixed;
    top: 0;
    width: 100vw;
}
/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .section {
    padding-top: 60px;
}
</style>