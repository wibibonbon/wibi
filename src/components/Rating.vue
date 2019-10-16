<template>
    <div class="skill">
        <label class="title">{{title}}</label>
        <div class="rating-icons">
            <span v-for="n in value" :key="'rateFull_'+n">
                <font-awesome-icon class="font-awesome-icon" icon="star"></font-awesome-icon>

                <!--RatingFull /-->
            </span>
            <span v-for="m in (max-value)" :key="'rateEmpty_'+m">
                <font-awesome-icon class="font-awesome-icon" :icon="['far', 'star']"></font-awesome-icon>

                <!--RatingEmpty /-->
            </span>
        </div>
    </div>
</template>

<script>
//import RatingEmpty from '../assets/icons/ratingEmpty.svg'
//import RatingFull from '../assets/icons/ratingFull.svg'
export default {
    components: {
        //RatingEmpty,
        //RatingFull,
    },
    props: {
        title: {
            type: String,
            default: 'HAHA',
        },
        value: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 5,
        },
    },
    methods: {},
}
</script>
<style scoped lang="scss">
.title {
    white-space: nowrap;
}
.rating-icons {
    width: max-content;
}
.skill {
    margin-bottom: 10px;
}
.font-awesome-icon {
    color: $pink;
}
</style>