<template>
    <div class="section" ref="portfolio">
        <div class="container">
            <div class="content">
                <h1>Work and fun.</h1>
                <div class="flex-grid">
                    <div
                        class="flip-card grid-item"
                        v-for="(entry, i) in allEntries"
                        :key="entry.short_text"
                        :index="i"
                        :entry="entry"
                    >
                        <div class="flip-card-inner hand" @click="clickedCard(entry)">
                            <div
                                class="flip-card-front"
                                :style="{ backgroundImage: 'url(' + entry.img + ')' }"
                            ></div>
                            <div class="flip-card-back">
                                <div class="card-content">
                                    <h2 v-html="entry.short_text"></h2>
                                    <p v-html="entry.title_sub"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PortModal v-if="showModal" @close="showModal = false" :data="selectedEntry" />
            </div>
        </div>
    </div>
</template>

<script>
import portfolioData from '../assets/data/portfolio-data.json'
import PortModal from './PortModal'
export default {
    components: {
        PortModal,
    },
    data() {
        return {
            allEntries: portfolioData.entries,
            isActive: false,
            activeEntry: null,
            showModal: false,
            selectedEntry: null,
        }
    },
    methods: {
        clickedCard(entry) {
            this.selectedEntry = entry
            this.showModal = true
        },
    },
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
    width: 250px;
    height: 250px;
    border-radius: 50%;
    perspective: 1000px;
    background-color: transparent;
    padding: 20px;
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
    background-color: $primary-color;
    color: $white;
    display: table;
    table-layout: fixed;
    transform: rotateY(180deg);
}
.card-content {
    display: table-cell;
    vertical-align: middle;
}

p {
    margin: 0;
}
@media screen and (max-width: 768px) {
    .grid-item {
        width: 150px;
        height: 150px;
    }
}
</style>