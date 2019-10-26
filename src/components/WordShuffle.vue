<template>
    <transition name="translate">
        <div class="view-container" @click="goNext()">
            <div class="greetings-container">
                <div
                    v-for="greeting in greetings"
                    :key="greeting.language"
                    class="greeting"
                >{{ greeting }}</div>
            </div>
            <div class="explore">
                <div class="tap">Touch anywhere to begin</div>

                <svg class="circle" width="140" height="140">
                    <circle
                        cx="70"
                        cy="70"
                        r="30"
                        stroke="white"
                        stroke-width="4"
                        fill="0"
                        fill-opacity="0"
                    />
                    <circle cx="70" cy="70" r="16" stroke="white" stroke-width="4" fill="white" />
                </svg>
            </div>
        </div>
    </transition>
</template>

<script>
import GREETINGS from '../list-of-greetings'

export default {
    name: 'SelectGreeting',
    components: {},
    data() {
        return {
            greetings: [], //list of displayed greetings
            greetings_count: 8, //how much greetings should be displayed maximal
            current_greetings_index: 0, //current greeting that should be animated
            current_greetings_list_index: 0, //current greeting from all available greetings
            current_greeting: '', //current readable greeting that should be finished
            current_length: 0,
            fadeBuffer: false,
            codeletters: [],
            intervalid1: '',
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.greetings = new Array(this.greetings_count).fill('  ')
            this.codeletters = 'abcdefghijklmnobqrstuvwxyz'

            this.current_msg = ''
            this.current_greeting = GREETINGS[this.current_greetings_list_index]

            setTimeout(() => {
                this.animatetexts()
                this.intervalid1 = setInterval(() => {
                    this.animatetexts()
                }, 2000) //delay to start next text animation
            }, 750) //initial delay for animation
        })
    },
    beforeDestroy() {
        clearInterval(this.intervalid1)
    },
    methods: {
        goNext() {
            Analytics.beginUserFlow()
            this.stoploop = true
            this.$root.goTo('select-country')
        },

        animatetexts() {
            setTimeout(() => {
                this.animateTextIn()
            }, 100)

            setTimeout(() => {
                //edit/reset greetings indices
                this.current_greetings_index++
                this.current_greetings_list_index++
                if (this.current_greetings_index >= this.greetings_count)
                    this.current_greetings_index = 0
                if (this.current_greetings_list_index >= GREETINGS.length)
                    this.current_greetings_list_index = 0
                this.current_length = 0
                var currentGreeting =
                    GREETINGS[this.current_greetings_list_index]
                this.current_greeting = currentGreeting
                this.fadeBuffer = false
            }, 2000)
        },

        //animation start, generate random text and then scramble into content
        animateTextIn() {
            //grow random text into place
            if (this.current_length < this.current_greeting.length) {
                this.current_length = this.current_length + 2
                if (this.current_length > this.current_greeting.length) {
                    this.current_length = this.current_greeting.length
                }
                const message = this.generateRandomString(this.current_length)
                const newArray = [...this.greetings]
                newArray[this.current_greetings_index] = message
                this.greetings = newArray
                //random text maybe needs to grow more, so get another round
                setTimeout(this.animateTextIn, 20)
            } else {
                //random text can get unscrambled
                setTimeout(this.animateFadeBuffer, 20)
            }
        },
        //create random string from specified codeletters with specific text_length
        generateRandomString(text_length) {
            var random_text = ''
            while (random_text.length < text_length) {
                random_text += this.codeletters.charAt(
                    Math.floor(Math.random() * this.codeletters.length)
                )
            }
            return random_text
        },
        //animate the unscrambling from random text into content
        animateFadeBuffer() {
            var do_cycles = false

            if (this.fadeBuffer === false) {
                this.fadeBuffer = []
                for (let i = 0; i < this.current_greeting.length; i++) {
                    this.fadeBuffer.push({
                        c: Math.floor(Math.random() * 12) + 1,
                        l: this.current_greeting.charAt(i),
                    })
                }
            }
            var message = ''

            for (let i = 0; i < this.fadeBuffer.length; i++) {
                var fader = this.fadeBuffer[i]
                if (fader.c > 0) {
                    do_cycles = true
                    fader.c--
                    message += this.codeletters.charAt(
                        Math.floor(Math.random() * this.codeletters.length)
                    )
                } else {
                    message += fader.l
                }
            }
            setTimeout(() => {
                const newArray = [...this.greetings]
                newArray[this.current_greetings_index] = message
                this.greetings = newArray
                if (do_cycles === true) {
                    this.animateFadeBuffer()
                }
            }, 50)
        },
    },
}
</script>

<style scoped lang="scss">
.greetings-container {
    margin-top: 400px;
    width: 100vw;
}
.greeting {
    font-family: Matter-SemiBold;
    font-size: 80px;
    line-height: 120px;
    color: #ffffff;
}
.explore {
    width: 100vw;
    position: absolute;
    bottom: 100px;
    margin-top: 350px;
    font-family: Matter-SemiBold;
    color: #ffffff;
    font-size: 30px;
}
.tap {
    margin-top: 170px;
    margin-bottom: -10px;
    font-size: 26px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
</style>