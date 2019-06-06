<template>
	<div class="container">
		<div id="timeline">
			<TimeLineEntry
				v-for="(entry, i) in entries"
				:key="i"
        :index="i"
        :entry="entry"
			/>
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
		mounted(){
			console.log(experienceData)
		}
}
</script>

<style scoped lang="scss">


// Variables
$bg-body: #f9f9f9;

$primary-color: $blue;
$secondary-color: $blue;


// Typography
$base-font: helvetica, arial, tahoma, verdana;
$base-font-title: "Dosis", arial, tahoma, verdana;

$base-font-color: #726f77;

// Timeline
$timeline-color: $primary-color;


// Mixins and Placeholders
%clearfix {
	&:after, &:before {
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
*, *:before, *:after {
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
}

body, html {
	height: 100%;
}
body {
	background: $bg-body;
	background-size: cover;
	margin: 0;
	padding: 0;
	font-family: $base-font;
	line-height: 20px;
	font-size: 14px;
	color: $base-font-color;
}

.container {
	max-width: 1100px;
	margin: 0 auto;
}


// Timeline
#timeline {
	width: 100%;
  margin: 30px auto;
	position: relative;
  padding: 0 10px;
	@include prefix(transition, all .4s ease);

	&:before {
		content:"";
		width: 3px;
		height: 100%;
		background: $timeline-color;
		left: 50%;
		top: 0;
		position: absolute;
	}

	&:after {
		content: "";
		clear: both;
		display: table;
		width: 100%;
	}
}


@media screen and (max-width: 768px) {
	#timeline {
		margin: 30px;
		padding: 0px;
    width: 90%;
		&:before {
			left: 0;
		}
	}
}

</style>