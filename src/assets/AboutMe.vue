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
            <div class="col">
                <h2>Skills</h2>
                <div>
                    <label>Object Oriented Programming</label>
                    <svg x="0px" y="0px" width="25" height="20" viewBox="0 0 25 20">
                        <polygon
                            fill="#ffffff"
                            stroke="#6e0b34"
                            points="22.04,7.32 0.78,7.32 3.331,12.952 
		0.78,18.5 22.04,18.5 24.875,12.91 	"
                        />
                    </svg>
                    <svg x="0px" y="0px" width="25" height="20" viewBox="0 0 25 20">
                        <polygon
                            fill="#ad1152"
                            stroke="#6e0b34"
                            points="22.04,7.32 0.78,7.32 3.331,12.952 
		0.78,18.5 22.04,18.5 24.875,12.91 	"
                        />
                    </svg>
                    <label>4</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.content {
    display: flex;
    color: $sand;
}

.col {
    text-align: justify;
    margin-left: 20px;
    margin-right: 20px;
}
.head {
    display: flex;
    align-items: center;
    float: left;
    text-align: left;
}

.img {
    width: 150px;
    min-width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
}
</style>