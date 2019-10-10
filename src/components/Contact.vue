<template>
    <div class="section">
        <h1>Happy to meet you.</h1>
        <h2>Just write me an Email...</h2>
        <FormEmail />
        <h2>...or connect on...</h2>
        <div class="socialmedia">
            <a href="https://t.me/baudach" target="_blank">
                <font-awesome-icon class="font-awesome-icon" :icon="['fab', 'telegram-plane']"></font-awesome-icon>
            </a>
            <a href="https://www.linkedin.com/in/baudach/" target="_blank">
                <font-awesome-icon class="font-awesome-icon" :icon="['fab', 'linkedin-in']"></font-awesome-icon>
            </a>
            <a href="https://www.xing.com/profile/Wibke_Baudach/cv" target="_blank">
                <font-awesome-icon class="font-awesome-icon" :icon="['fab', 'xing']"></font-awesome-icon>
            </a>
        </div>
    </div>
</template>

<script>
import FormEmail from './FormEmail'
export default {
    components: {
        FormEmail,
    },
}
</script>
<style scoped lang="scss">
h2 {
    margin-bottom: 25px;
    margin-top: 50px;
}

.font-awesome-icon {
    margin: 10px;
    height: 60px;
    width: 60px;
    background: $pink;
    border-radius: 50%;
    padding: 12px;
    color: white;
}
.font-awesome-icon:hover {
    background: $pink-dark;
}
.font-awesome-icon:active {
    transform: scale(0.9);
}
</style>