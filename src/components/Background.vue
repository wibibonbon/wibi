<template>
    <div class="bg" ref="bg" v-on:click="emitParticles">
        <slot />
        <canvas id="canvas" v-on:click="emitParticles"></canvas>
    </div>
</template>

<script>
const config = {
    particleNumber: 200,
    maxParticleSize: 20,
    maxSpeed: 30,
    colorVariation: 50,
}
const colorPalette = {
    bg: { r: 0, g: 133, b: 161 }, //turquoise
    matter: [
        { r: 255, g: 255, b: 255 }, // white
        { r: 236, g: 238, b: 239 }, // beige
        { r: 173, g: 17, b: 82 }, // pink
        { r: 52, g: 58, b: 64 }, // grey
    ],
}

class Particle {
    constructor(x, y) {
        // X Coordinate
        this.x = x || Math.round(Math.random() * this.canv.width)
        // Y Coordinate
        this.y = y || Math.round(Math.random() * this.canv.height)
        // Radius of the space dust
        this.r = Math.ceil(Math.random() * config.maxParticleSize)
        // Color of the rock, given some randomness
        this.c = this.colorVariation(
            colorPalette.matter[
                Math.floor(Math.random() * colorPalette.matter.length)
            ],
            true
        )
        // Speed of which the rock travels
        this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7)
        // Direction the Rock flies
        this.d = Math.round(Math.random() * 360)
    }

    colorVariation(color, returnString) {
        let r, g, b, a
        r = Math.round(
            Math.random() * config.colorVariation -
                config.colorVariation / 2 +
                color.r
        )
        g = Math.round(
            Math.random() * config.colorVariation -
                config.colorVariation / 2 +
                color.g
        )
        b = Math.round(
            Math.random() * config.colorVariation -
                config.colorVariation / 2 +
                color.b
        )
        a = Math.random() + 0.5
        if (returnString) {
            return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
        } else {
            return { r, g, b, a }
        }
    }
}

export default {
    data() {
        return {
            particles: [],
            canv: null,
            ctx: null,
        }
    },
    mounted() {
        this.init()
        this.emitParticles()
        this.animate()
    },

    methods: {
        init() {
            this.canv = document.getElementById('canvas')
            this.ctx = this.canv.getContext('2d')
            this.canv.width = window.innerWidth
            this.canv.height = this.$refs.bg.clientHeight
        },

        animate() {
            requestAnimationFrame(this.animate)
            this.drawBg(this.ctx, colorPalette.bg)
            this.particles.map(p => {
                return this.updateParticleModel(p)
            })
            // Draw em'
            this.particles.forEach(p => {
                this.drawParticle(p.x, p.y, p.r, p.c)
            })
        },

        drawBg(ctx, color) {
            ctx.fillStyle =
                'rgb(' + color.r + ',' + color.g + ',' + color.b + ')'
            ctx.fillRect(0, 0, this.canv.width, this.canv.height)
        },

        colorVariation(color, returnString) {
            let r, g, b, a
            r = Math.round(
                Math.random() * config.colorVariation -
                    config.colorVariation / 2 +
                    color.r
            )
            g = Math.round(
                Math.random() * config.colorVariation -
                    config.colorVariation / 2 +
                    color.g
            )
            b = Math.round(
                Math.random() * config.colorVariation -
                    config.colorVariation / 2 +
                    color.b
            )
            a = Math.random() + 0.5
            if (returnString) {
                return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
            } else {
                return { r, g, b, a }
            }
        },

        updateParticleModel(p) {
            var a = 180 - (p.d + 90) // find the 3rd angle
            p.d > 0 && p.d < 180
                ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
                : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s))
            p.d > 90 && p.d < 270
                ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
                : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s))
            return p
        },
        drawParticle(x, y, r, c) {
            this.ctx.beginPath()
            this.ctx.fillStyle = c
            this.ctx.arc(x, y, r, 0, 2 * Math.PI, false)
            this.ctx.fill()
            this.ctx.closePath()
        },
        cleanUpArray() {
            this.particles = this.particles.filter(p => {
                return p.x > -100 && p.y > -100
            })
        },
        initParticles(numParticles, x, y) {
            for (let i = 0; i < numParticles; i++) {
                this.particles.push(new Particle(x, y))
            }
            this.particles.forEach(p => {
                this.drawParticle(p.x, p.y, p.r, p.c)
            })
        },

        emitParticles(event) {
            let x = window.innerWidth / 2
            let y = window.innerHeight / 2
            if (event) {
                x = event.clientX
                y = event.clientY + window.scrollY
            }

            this.cleanUpArray()
            this.initParticles(config.particleNumber, x, y)
        },
        scrollDown(event) {
            this.$emit('scrollToY', window.innerHeight)
        },
    },
}
</script>

<style scoped lang="scss">
.bg {
    z-index: 1;
    height: 100%;
    position: relative;
}
#canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
}
</style>
}