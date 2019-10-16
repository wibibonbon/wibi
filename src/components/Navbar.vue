<template>
    <div class="navbar" :class="[{'sticky': isSticky}, {'show-menu':showMenu}]" ref="navbar">
        <label @click="nav('title')">Home</label>
        <label @click="nav('about')">That's me</label>
        <label @click="nav('portfolio')">Portfolio</label>
        <label @click="nav('timeline')">The past</label>
        <label @click="nav('contact')">Contact</label>
        <font-awesome-icon @click="toggleMenu()" class="font-awesome-icon" icon="bars"></font-awesome-icon>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sticky: null,
            isSticky: false,
            showMenu: false,
        }
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset >= this.sticky) {
                this.isSticky = true
            } else {
                this.isSticky = false
            }
        },
        nav(item) {
            console.log(item)
            this.$emit('scrollToItem', item)
        },
        toggleMenu() {
            this.showMenu = !this.showMenu
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
    height: 40px;
    width: 100%;
    position: relative;
    z-index: 900;
}

/* Navbar links */
.navbar label {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    margin: 5px;
    padding: 5px;
    text-decoration: none;
}
.navbar label:hover {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5%;
}
.navbar label:active {
    background-color: $pink-dark;
    border-radius: 5%;
}
.sticky {
    position: fixed;
    z-index: 900;
    top: 0;
    left: 0;
    right: 0;
}
/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .section {
    padding-top: 60px;
}
.font-awesome-icon {
    display: none;
}

@media screen and (max-width: 768px) {
    .navbar label:not(:first-child) {
        display: none;
    }
    .navbar .font-awesome-icon {
        float: right;
        display: block;
        color: #f2f2f2;
        text-align: center;
        margin: 5px;
        padding: 5px;
        height: 30px;
        width: 30px;
    }
    .navbar .font-awesome-icon:hover {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5%;
    }

    .navbar {
        background-color: $pink;
        height: auto;
        min-height: 40px;
        padding-left: 0px;
    }
    .navbar.show-menu {
    }
    .navbar.show-menu .font-awesome-icon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .navbar.show-menu label {
        float: none;
        display: block;
        text-align: left;
        border-radius: 0;
        margin-left: 0px;
        padding-left: 10px;
        width: 100%;
        height: 100%;
    }
}
</style>