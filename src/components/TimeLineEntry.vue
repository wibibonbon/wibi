<template>
			<div class="timeline-item">
				<div class="timeline-icon">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">
<g>
	<path fill="#FFFFFF" d="M17.92,3.065l-1.669-2.302c-0.336-0.464-0.87-0.75-1.479-0.755C14.732,0.008,7.653,0,7.653,0v5.6
		c0,0.096-0.047,0.185-0.127,0.237c-0.081,0.052-0.181,0.06-0.268,0.02l-1.413-0.64C5.773,5.183,5.69,5.183,5.617,5.215l-1.489,0.65
		c-0.087,0.038-0.19,0.029-0.271-0.023c-0.079-0.052-0.13-0.141-0.13-0.235V0H2.191C1.655,0,1.233,0.434,1.233,0.97
		c0,0,0.025,15.952,0.031,15.993c0.084,0.509,0.379,0.962,0.811,1.242l2.334,1.528C4.671,19.905,4.974,20,5.286,20h10.307
		c1.452,0,2.634-1.189,2.634-2.64V4.007C18.227,3.666,18.12,3.339,17.92,3.065z M16.42,17.36c0,0.464-0.361,0.833-0.827,0.833H5.341
		l-1.675-1.089h10.341c0.537,0,0.953-0.44,0.953-0.979V2.039l1.459,2.027V17.36L16.42,17.36z"/>
</g>
</svg>

				</div>
				<div :class="`timeline-content ${side}`">
					<h2 v-html="entry.title"></h2>
					<p v-html="entry.summary">
					</p>
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

.container {
	max-width: 1100px;
	margin: 0 auto;
}




	
	.timeline-item {
		margin-bottom: 50px;
		position: relative;
		@extend %clearfix;

		.timeline-icon {
			background: $timeline-color;
			width: 50px;
			height: 50px;
			position: absolute;
			top: 0;
			left: 50%;
			overflow: hidden;
			margin-left: -23px;
			@include prefix(border-radius, 50%);

			svg {
				position: relative;
				top: 14px;
			}
		}

		.timeline-content {
			width: 45%;
			background: #fff;
			padding: 20px;
			@include prefix(box-shadow, 0 3px 0 rgba(0,0,0,0.1));
			@include prefix(border-radius, 5px);
			@include prefix(transition, all .3s ease);

			h2 {
				padding: 15px;
				background: $timeline-color;
				color: #fff;
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
				border-left:7px solid $timeline-color; 
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


@media screen and (max-width: 768px) {

		
		.timeline-item {
			.timeline-content {
				width: 90%;
				float: right;
				
				&:before, &.right:before {
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
	}


</style>