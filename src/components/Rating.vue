<template>
    <div>
        <label>{{title}}</label>
        <div>
            <span v-for="n in value" v-bind:key="n">
                <RatingFull />
            </span>
            <span v-for="n in (max-value)" v-bind:key="n">
                <RatingEmpty />
            </span>
        </div>
    </div>
</template>

<script>
import RatingEmpty from '../assets/icons/ratingEmpty.svg'
import RatingFull from '../assets/icons/ratingFull.svg'
export default {
    components: {
        RatingEmpty,
        RatingFull,
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