<template>
    <div v-if="isVisible" class="toast">
        <div :class="[statustype,'container']">
            <h3 class="title">{{title}}</h3>
            <p>{{body}}</p>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            isVisible: false,
            statustype: 'success',
        }
    },
    props: {
        status: {
            type: String,
            validator: val => ['error', 'success'].includes(val),
            default: 'success',
        },
        title: {
            type: String,
            default: 'Toast Title',
        },
        body: {
            type: String,
            default: 'Toast Body',
        },
        duration: {
            type: Number,
            default: 4000,
        },
    },
    methods: {
        show() {
            this.statustype = this.status
            this.isVisible = true
            setTimeout(() => (this.isVisible = false), this.duration)
        },
    },
}
</script>

<style scoped lang="scss">
.toast {
    position: fixed;
    z-index: 950;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}
.container {
    width: 300px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    position: relative;
    z-index: 950;
    display: block;
    border-width: 1px;
    border-style: solid;
    &.success {
        border-color: #155724;
    }
    &.success > h3 {
        background-color: rgb(195, 230, 203);
        border-color: #155724;
        color: #155724;
    }
    &.error > h3 {
        background-color: rgb(248, 215, 218);
        border-color: #721c24;
        color: #721c24;
    }
    &.success > p {
        background-color: rgb(230, 245, 233);
        color: #155724;
    }
    &.error > p {
        background-color: rgb(245, 198, 203);
        color: #721c24;
    }
}
h3 {
    padding: 10px 20px;
    margin: 0px;
    border-bottom: solid;
    border-width: 1px;
}
p {
    padding: 20px;
    margin: 0px;
}
</style>