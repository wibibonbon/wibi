<template>
    <div class="section">
        <div class="wrapper">
            <div class="content">
                <label>Hello, I'm Wibke. Welcome to my site.</label>
                <div class="button" @click="scrollDown">Take a look.</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollDown(event) {
            this.$emit('scrollToY', window.innerHeight)
        },
    },
}
</script>

<style scoped lang="scss">
.button {
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 10px;
    margin-top: 40px;
    padding: 20px;
    color: $pink;
    border-radius: 5px;
    width: fit-content;
}
.button:hover {
    background-color: $pink;
    color: white;
}
.section {
    position: relative;
    padding: 0;
}
.wrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 50;
    display: flex;
}
.content {
    margin: auto;
    display: grid;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    color: white;
    font-size: 40px;
    z-index: 50;
    position: relative;
}

h1 {
    display: inline-block;
    padding: 0.3em;
    font-family: 'Megrim', cursive;
    position: absolute;
    top: 50%;
    left: 50%;
    user-select: none;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.68);
    border: 0.075em solid rgba(255, 255, 255, 0.1);
}
</style>
}