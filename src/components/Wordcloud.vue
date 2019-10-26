<template>
    <div class="wordcloud-wrapper">
        <svg class="wordcloud" />
    </div>
</template>

<script>
import * as d3 from 'd3'
import * as cloud from 'd3-cloud'

const color = d3
    .scaleLinear()
    .domain([0, 1, 2, 3, 4, 5, 6, 10, 15, 20, 100])
    .range([
        '#F7EEF2',
        '#F8CBE0',
        '#FBB0CF',
        '#FB64A3',
        '#FA1977',
        '#BA1358',
        '#ad1152',
        '#7A0C3A',
        '#6E0B34',
        '#540828',
        '#3B061C',
    ])
export default {
    name: 'Wordcloud',
    components: {},
    data() {
        return {}
    },
    props: { wordlist: Array },
    computed: {},
    mounted() {
        cloud()
            .size([800, 300])
            .words(this.wordlist)
            .rotate(0)
            .fontSize(function(d) {
                return d.size
            })
            .on('end', this.draw)
            .start()
    },
    methods: {
        draw(words) {
            d3.select('.wordcloud')
                .append('g')
                .attr('transform', 'translate(320,200)')
                .selectAll('text')
                .data(words)
                .enter()
                .append('text')
                .style('font-size', function(d) {
                    return d.size + 'px'
                })
                .style('fill', function(d, i) {
                    return color(i)
                })
                .attr('transform', function(d) {
                    return (
                        'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'
                    )
                })
                .text(function(d) {
                    return d.text
                })
        },
    },
}
</script>


<style scoped lang="scss">
.wordcloud-wrapper {
    position: relative;
}
.wordcloud {
    position: relative;
    width: 850px;
    height: 350px;
}
</style>