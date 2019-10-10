<template>
    <div class="timeline-item">
        <div class="timeline-icon">
            <font-awesome-icon class="font-awesome-icon" icon="coffee"></font-awesome-icon>
        </div>

        <div :class="`timeline-content ${side}`">
            <h3 :class="`timeline-dates ${side}`" v-html="entry.dates"></h3>
            <h2 v-html="entry.title"></h2>

            <!--p v-html="entry.summary"></p-->
        </div>
    </div>
</template>

<script>
export default {
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
        color: $primary-color;
        @include prefix(border-radius, 50%);

        .font-awesome-icon {
            position: relative;
            top: 14px;
        }
    }

    .timeline-content {
        width: 45%;
        background: $sand;
        padding: 20px;
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

        &:before {
            content: '';
            position: absolute;
            left: 45%;
            top: 20px;
            width: 0;
            height: 0;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
            border-left: 7px solid $timeline-color;
        }

        &.right {
            float: right;

            &:before {
                content: '';
                right: 45%;
                left: inherit;
                border-left: 0;
                border-right: 7px solid $timeline-color;
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
                border-right: 7px solid $timeline-color;
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