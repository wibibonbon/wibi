<template>
    <div class="section" ref="portfolio">
        <div class="container">
            <div class="content">
                <div classs="title">Portfolio</div>
                <div class="flex-grid">
                    <div
                        class="flip-card grid-item"
                        v-for="(entry, i) in allEntries"
                        :key="i"
                        :index="i"
                        :entry="entry"
                    >
                        <div class="flip-card-inner">
                            <div
                                class="flip-card-front"
                                :style="{ backgroundImage: 'url(' + entry.img + ')' }"
                            >
                                <!--img :class="[{active:isActive},'grid-item item']" :src="entry.img" /-->
                            </div>
                            <div class="flip-card-back">
                                <h1>John Doe</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that guy</p>
                            </div>
                        </div>
                    </div>
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
            isActive: false,
            activeEntry: null,
        }
    },

    methods: {},
}
</script>

<style scoped lang="scss">
.flex-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
}

.grid-item {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    perspective: 1000px;
    background-color: transparent;
    padding: 10px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    backface-visibility: hidden;
}
.flip-card-front {
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 50%;
}
.flip-card-back {
    display: grid;
    align-content: center;
    background-color: $primary-color;
    color: $white;
    transform: rotateY(180deg);
}
p {
    margin: 0;
}
</style>