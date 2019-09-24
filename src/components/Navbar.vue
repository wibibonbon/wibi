<template>
    <div class="navbar" :class="{'sticky': isSticky}" ref="navbar">
        <label @click="nav('title')">Home</label>
        <label @click="nav('about')">That's me</label>
        <label @click="nav('portfolio')">Portfolio</label>
        <label @click="nav('timeline')">The past</label>
        <label @click="nav('contact')">Contact</label>
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
        nav(item) {
            this.$emit('scrollToItem', item)
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
    padding-left: 14px;
    height: 40px;
    width: 100vw;
    position: relative;
    z-index: 100;
}

/* Navbar links */
.navbar label {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 14px;
    padding-right: 14px;

    text-decoration: none;
}
.navbar label:hover {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5%;
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