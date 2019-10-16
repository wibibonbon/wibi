<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <h3 name="header">{{data.short_text}}</h3>

                        <div class="carousel">
                            <div class="image-wrapper">
                                <div class="slide fade">
                                    <img class="img" :src="currentSource" />
                                </div>
                            </div>
                            <!--font-awesome-icon
                                class="button-left"
                                @click="plusSlide(-1)"
                                icon="arrow-alt-circle-left"
                            ></font-awesome-icon>
                            <font-awesome-icon
                                class="button-right"
                                @click="plusSlide(1)"
                                icon="arrow-alt-circle-right"
                            ></font-awesome-icon-->
                        </div>
                    </div>

                    <div class="modal-body">
                        <span name="body" v-html="data.long_text"></span>
                    </div>

                    <div class="modal-footer">
                        <div name="footer">
                            <button class="modal-default-button" @click="$emit('close')">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            currentSlideIndex: 0,
            slideSource: [],
            currentSource: null,
        }
    },
    props: {
        data: Object,
    },
    mounted() {
        this.slideSource = this.data.images
        this.currentSource = this.slideSource[0]
    },
    methods: {
        plusSlide(index) {
            if (this.currentSlideIndex == 0 && index == -1)
                this.currentSlideIndex = this.slideSource.length - 1
            else if (
                this.currentSlideIndex == this.slideSource.length - 1 &&
                index == 1
            ) {
                this.currentSlideIndex = 0
            } else {
                this.currentSlideIndex += index
            }
            this.currentSource = this.slideSource[this.currentSlideIndex]
        },
    },
}
</script>

<style scoped lang="scss">
/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {
        opacity: 0.4;
    }
    to {
        opacity: 1;
    }
}

@keyframes fade {
    from {
        opacity: 0.4;
    }
    to {
        opacity: 1;
    }
}

.button-left,
.button-right {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -20px;
    padding: 0px;
    color: $pink;
    font-weight: bold;
    font-size: 10px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
}
.button-right {
    right: 0;
    border-radius: 3px 0 0 3px;
}
.button-left {
    left: 0;
}
.carousel {
    position: relative;
}
.image-wrapper {
    width: 100%;
    max-height: 250px;
    overflow: hidden;
}
.img {
    max-width: 100%;
    max-height: 250px;
}
.modal-mask {
    position: fixed;
    z-index: 900;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    max-width: 400px;
    margin: 10px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: relative;
    z-index: 950;
    display: inline-block;
}

.modal-header h3 {
    margin-top: 0;
    color: $blue;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    border: none;
    background: $pink;
    border-radius: 0.25em;
    padding: 12px 20px;
    color: #ffffff;
    font-weight: bold;
    float: right;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    appearance: none;
}
.modal-default-button:hover {
    background: $pink-dark;
}
.modal-default-button:focus {
    outline: none;
}
.modal-default-button:active {
    background: $pink-dark;
    transform: scale(0.9);
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>