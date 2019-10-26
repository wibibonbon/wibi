<template>
    <div class="section" ref="me">
        <h1>Yep, that's me.</h1>
        <div class="content">
            <div class="col">
                <div class="head">
                    <img class="img" src="images/Wibke.jpg" align="left" />
                    <h2>Hi there. I'm Wibke, a creative software developer who is passionate about computer visualisations.</h2>
                </div>
                <div class="text">
                    <p>It all started during my bachelor degree in Architecture where I used Photoshop and Cinema 4D to create meaningful images about my construction designs. After this, I switched to a bachelor and master degree in Computervisualistics where I finally felt home. The two things I like the most are creating beautiful animations and processing images.</p>
                    <p>I especially enjoyed animations and shader design with OpenGL, WebGL, and Canvas but since I started to work with Vue.js I also like the little transitions and animations you can do with CSS and Javascript.</p>
                    <p>When it comes to image processing, I like working not only on regular RGB or gray images but also on infrared and multispectral images. Their analysation with machine learning algorithms is one of my favourite fields.</p>
                </div>
            </div>
            <Wordcloud :wordlist="words" />
            <!--div class="skills">
                <div class="col">
                    <h2>Fields</h2>
                    <div v-for="(skill, i) in skills" :key="'skill_'+i">
                        <Rating :title="skill.title" :value="skill.value" />
                    </div>
                </div>
                <div class="col">
                    <h2>Technologies</h2>
                    <div v-for="(skill,i) in technologies" :key="'technology_'+i">
                        <Rating :title="skill.title" :value="skill.value" />
                    </div>
                </div>
                <div class="col">
                    <h2>Other</h2>
                    <div v-for="(skill,i) in other" :key="'other_'+i">
                        <Rating :title="skill.title" :value="skill.value" />
                    </div>
                </div>
            </div-->
        </div>
    </div>
</template>

<script>
//import Rating from './Rating'
//import Skills from '../assets/data/skills-data.json'
import Wordcloud from './Wordcloud'
import { frequency_list } from '../assets/data/skills-wordcloud-data.js'

export default {
    components: {
        Wordcloud,
        //Rating,
    },
    data() {
        return {
            words: frequency_list,
            //skills: Skills.skills,
            //technologies: Skills.technologies,
            //other: Skills.other,
        }
    },
}
</script>

<style scoped lang="scss">
.content {
    //display: flex;
    color: $sand;
}

.col {
    text-align: justify;
    margin-left: 40px;
    margin-right: 40px;
}
.col::after {
    content: '';
    flex: auto;
}
.skills {
    display: flex;
    justify-content: center;

    flex-flow: wrap;
}

.head {
    display: flex;
    align-items: center;
    float: left;
    text-align: left;
}

.img {
    width: 120px;
    min-width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 20px;
}
h2 {
    text-align: center;
}
@media screen and (max-width: 768px) {
    .head {
        display: grid;
    }
    .img {
        margin: auto;
    }
    h2 {
    }
}
</style>