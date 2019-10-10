<template>
    <div class="section">
        <h1>Happy to meet you.</h1>
        <h2>Just write me an Email...</h2>
        <FormEmail />
        <h2>...or connect on...</h2>
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
</style>