<template>
    <div class="timeline-item">
        <div class="timeline-icon">
            <font-awesome-icon class="font-awesome-icon" :icon="icon"></font-awesome-icon>
        </div>

        <div :class="`timeline-content ${side}`">
            <h3 :class="`timeline-dates ${side}`" v-html="entry.dates"></h3>
            <h2 v-html="entry.title" class="hand" @click="toggleEntry()"></h2>
            <p v-if="isExpanded" v-html="entry.institution" class="institution"></p>
            <p v-if="isExpanded" v-html="entry.summary"></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
        }
    },
    props: {
        entry: {
            type: Object, // See timeline-data.js for entry type
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    computed: {
        side() {
            return this.index % 2 == 1 ? 'left' : 'right'
        },
        icon() {
            switch (this.entry.type) {
                case 'work':
                    return 'laptop-code'
                case 'travel':
                    return 'globe-asia'
                case 'school':
                    return 'coffee'
                case 'life':
                    return 'home'
                default:
                    return 'coffee'
            }
        },
    },
    mounted() {
        if (this.index == 0) {
            this.isExpanded = true
        }
    },
    methods: {
        toggleEntry() {
            this.isExpanded = !this.isExpanded
        },
    },
}
</script>

<style scoped lang="scss">
// Variables
$bg-body: $sand;

$primary-color: $blue;
$secondary-color: $blue;

// Typography
$base-font: helvetica, arial, tahoma, verdana;
$base-font-title: 'Dosis', arial, tahoma, verdana;

$base-font-color: #726f77;

// Timeline
$timeline-color: $sand;

// Mixins and Placeholders
%clearfix {
    &:after,
    &:before {
        content: '';
        display: block;
        width: 100%;
        clear: both;
    }
}

@mixin prefix($prop, $val) {
    @each $prefix in '-webkit-', '-moz-', '-ms-', '' {
        #{$prefix}#{$prop}: $val;
    }
}
*,
*:before,
*:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

.timeline-item {
    margin-bottom: 50px;
    position: relative;
    @extend %clearfix;
    .timeline-icon {
        background: $white;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 50%;
        overflow: hidden;
        margin-left: -23px;
        color: $pink;
        @include prefix(border-radius, 50%);

        .font-awesome-icon {
            position: relative;
            top: 10px;
            height: 30px;
            width: 30px;
        }
    }

    .timeline-content {
        width: 45%;
        background: $sand;
        padding: 20px;
        padding-bottom: 0px;
        @include prefix(box-shadow, 0 3px 0 rgba(0, 0, 0, 0.1));
        @include prefix(border-radius, 5px);
        @include prefix(transition, all 0.3s ease);

        h2 {
            padding: 15px;
            background: $white;
            color: $primary-color;
            margin: -20px -20px 0 -20px;
            font-weight: 300;
            @include prefix(border-radius, 3px 3px 0 0);
        }
        p {
            text-align: justify;
            padding-bottom: 14px;
        }
        //triangles
        &:before {
            content: '';
            position: absolute;
            left: 45%;
            top: 20px;
            width: 0;
            height: 0;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 7px solid white;
        }

        &.right {
            float: right;
            p {
                padding-bottom: 0px;
            }
            //triangles
            &:before {
                content: '';
                right: 45%;
                left: inherit;
                border-left: 0;
                border-right: 7px solid white;
            }
        }
    }
}

.timeline-dates {
    font-size: 12px;
    position: relative;
    margin-top: -15px;
    margin-left: -5px;
    color: gray;
    float: left;
    &.right {
        float: right;
        margin-right: -10px;
    }
}
.institution {
    color: $pink;
    font-weight: bold;
    padding-bottom: 0px !important;
}
@media screen and (max-width: 768px) {
    .timeline-item {
        .timeline-content {
            width: 90%;
            float: right;
            &:before,
            &.right:before {
                left: 10%;
                margin-left: -6px;
                border-left: 0;
                border-right: 7px solid white;
            }
        }

        .timeline-icon {
            left: 0;
        }
    }
    .timeline-dates {
        float: right;
    }
}
</style>