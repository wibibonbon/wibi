<template>
    <div class="section" ref="timeline">
        <div class="container">
            <div class="content">
                <div class="wrapper">
                    <h1>The road so far.</h1>

                    <div id="timeline">
                        <TimeLineEntry
                            v-for="(entry, i) in entries"
                            :key="i"
                            :index="i"
                            :entry="entry"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import experienceData from '../assets/data/experience-data.json'
import TimeLineEntry from '../components/TimeLineEntry'

export default {
    components: {
        TimeLineEntry,
    },
    data() {
        return {
            entries: experienceData.entries,
        }
    },
    mounted() {},
}
</script>

<style scoped lang="scss">
// Timeline
$timeline-color: $white;

// Mixins and Placeholders

@mixin prefix($prop, $val) {
    @each $prefix in '-webkit-', '-moz-', '-ms-', '' {
        #{$prefix}#{$prop}: $val;
    }
}

// Timeline
#timeline {
    width: 100%;
    margin: 30px auto;
    position: relative;
    @include prefix(transition, all 0.4s ease);
    //middle line

    &:before {
        content: '';
        width: 3px;
        height: 100%;
        background: $sand;
        left: 50%;
        top: 0;
        position: absolute;
    }

    &:after {
        content: '';
        clear: both;
        display: table;
        width: 100%;
    }
}
.wrapper {
    margin-left: 40px;
    margin-right: 40px;
    position: relative;
}
@media screen and (max-width: 768px) {
    #timeline {
        margin: 30px;
        width: 90%;
        &:before {
            left: 0;
        }
    }
}
</style>