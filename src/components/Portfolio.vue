<template>
    <div class="section">
        <div class="container">
            <div class="content">
                <div class="selected-item">
                    <img :src="activeEntry.img" />
                    <div>
                        <div class="title">{{activeEntry.short_text}}</div>
                        <div class="info">{{activeEntry.long_text}}</div>
                    </div>
                </div>

                <div class="carousel-inner">
                    <div
                        :class="[{active:isActive},'grid-item item']"
                        v-for="(entry, i) in displayEntries"
                        :key="i"
                        :index="i"
                        :entry="entry"
                        :style="{ backgroundImage: 'url(' + entry.img + ')' }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioData from '../assets/data/portfolio-data.json'
export default {
    data() {
        return {
            allEntries: portfolioData.entries,
            displayEntries: [],
            numEntries: 3,
            interval: null,
            isActive: false,
            activeEntry: null,
        }
    },

    mounted() {
        this.displayEntries = this.allEntries
        this.displayEntries.unshift(
            this.displayEntries[this.displayEntries.length - 1]
        )
        this.displayEntries.pop()
    },
    created() {
        this.rotateEntries()
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        rotateEntries() {
            this.interval = setInterval(() => {
                setTimeout(() => {
                    this.displayEntries.push(this.displayEntries[0])

                    this.isActive = true
                }, 5500)
                setTimeout(() => {
                    this.displayEntries.shift()
                    this.activeEntry = this.displayEntries[4]
                    this.isActive = false
                }, 6500)
            }, 6500)
        },
    },
}
</script>

<style scoped lang="scss">
$itemwidth: 300px;
$itemheight: 200px;
.content {
    //margin:auto;
}
.carousel {
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.carousel-inner {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 10;
    overflow: hidden;
    height: $itemheight;
    justify-content: center;
    display: flex;
    transform: none;
    //transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.item {
    flex: 0 0 33%;
    max-width: 33%;
    height: $itemheight;
    background-color: black;
    margin: 10px;
    z-index: 5;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 50%;
    //background-position-y: 50%;
    filter: grayscale(100%);

    &.active {
        /*
    animation: move 1s ease-in-out;
    -moz-animation: move 1s ease-in-out;
    -webkit-animation: move 1s ease-in-out;*/
    }
}
.short-text {
    vertical-align: text-bottom;
}

.item:first-child {
    background-color: yellow;
    order: 1;
}
.item:nth-child(2) {
    background-color: red;
}
.item:nth-child(3) {
    background-color: green;
}
.item:nth-child(4) {
    background-color: blue;
}
.item:nth-child(5) {
    background-color: orchid;
}

/* Animation with intermediate keyframes */
@keyframes move {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc((((-100% / 3) + 25px) * 2)));
    }
}
</style>