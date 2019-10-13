<template>
    <div>
        <form class="vue-form" id="form" @submit.prevent="submit">
            <fieldset>
                <div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                        v-model="name"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        required
                        :class="{ email , error: !email.valid }"
                        v-model="email.value"
                    />
                </div>

                <div>
                    <textarea
                        class="message"
                        name="textarea"
                        id="textarea"
                        placeholder="Message"
                        required
                        v-model="message.text"
                    ></textarea>
                </div>
                <div>
                    <input type="submit" value="Send" />
                </div>
            </fieldset>
        </form>
        <Toast ref="toast" :title="toastTitle" :body="toastBody" :status="toastStatus" />
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
import Toast from './Toast'

// Regular expression from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
export default {
    components: {
        Toast,
    },
    data() {
        return {
            name: '',
            email: {
                value: '',
                valid: true,
            },
            message: {
                text: '',
            },
            templateParams: {
                from_name: 'from_name',
                reply_to_mail: 'reply_to_mail',
                message_html: 'message_html',
            },
            toastTitle: 'Success',
            toastBody: 'Email sent successfully.',
            toastStatus: 'success',
        }
    },
    mounted() {},
    methods: {
        submit() {
            this.templateParams.from_name = this.name
            this.templateParams.reply_to_mail = this.email.value
            this.templateParams.message_html = this.message.text

            emailjs
                .send(
                    'gmail',
                    'template_7VN4XCBU',
                    this.templateParams,
                    'user_pPLnn50PHL4LsLnga8sxc'
                )
                .then(
                    response => {
                        this.toastTitle = 'Success'
                        this.toastBody = 'Email sent successfully.'
                        this.toastStatus = 'success'
                        this.$refs.toast.show()

                        console.log(
                            'Email send successfully.',
                            response.status,
                            response.text
                        )
                        this.name = ''
                        this.email = ''
                        this.message = ''
                        this.templateParams.from_name = ''
                        this.templateParams.reply_to_mail = ''
                        this.templateParams.message_html = ''
                    },
                    error => {
                        this.toastTitle = 'Error'
                        this.toastBody = 'Email sent successfully.'
                        this.toastStatus = 'error'
                        this.$refs.toast.show()

                        console.log('Failed to send Email', error)
                    }
                )
        },
        validate(type, value) {
            if (type === 'email') {
                this.email.valid = this.isEmail(value)
            }
        },
        isEmail(value) {
            return emailRegExp.test(value)
        },
    },
}
</script>
<style scoped lang="scss">
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    color: #2c3e50;
    text-decoration: none;
}

header {
    position: relative;
    height: 150px;
    padding-top: 100px;
}

header h1 {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 300;
}

.vue-form {
    font-size: 16px;
    width: 500px;
    padding: 15px;
    border-radius: 4px;
    margin: 0 auto;
    width: 500px;
    background-color: $blue;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.vue-form fieldset {
    margin: 0;
    padding: 0 15px;
    border: none;
}
.vue-form legend {
    padding-bottom: 10px;
}
.vue-form div {
    position: relative;
    margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
    color: #94aab0;
    margin-bottom: 10px;
}
.vue-form .label {
    display: block;
}

.vue-form input[type='text'],
.vue-form input[type='email'],
.vue-form textarea,
.vue-form legend {
    display: block;
    width: 100%;
    appearance: none;
}
.vue-form input[type='text'],
.vue-form input[type='email'],
.vue-form textarea {
    padding: 12px;
    border: 1px solid #cfd9db;
    background-color: #ffffff;
    border-radius: 0.25em;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type='text']:focus,
.vue-form input[type='email']:focus,
.vue-form textarea:focus {
    outline: none;
    border-color: #2c3e50;
    box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
.vue-form .select {
    position: relative;
}
.vue-form .select::after {
    content: '';
    position: absolute;
    z-index: 1;
    right: 16px;
    top: 50%;
    margin-top: -8px;
    display: block;
    width: 16px;
    height: 16px;

    pointer-events: none;
}
.vue-form select {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    cursor: pointer;
}
.vue-form select::-ms-expand {
    display: none;
}
.vue-form .vue-form-list {
    margin-top: 16px;
}
.vue-form .vue-form-list::after {
    clear: both;
    content: '';
    display: table;
}
.vue-form .vue-form-list li {
    display: inline-block;
    position: relative;
    user-select: none;
    margin: 0 26px 16px 0;
    float: left;
}

.vue-form textarea {
    min-height: 120px;
    resize: vertical;
    overflow: auto;
}
.vue-form input[type='submit'] {
    border: none;
    background: $pink;
    border-radius: 0.25em;
    padding: 12px 20px;
    color: #ffffff;
    font-weight: bold;
    float: right;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    appearance: none;
}
.vue-form input[type='submit']:hover {
    background: $pink-dark;
}
.vue-form input[type='submit']:focus {
    outline: none;
}
.vue-form input[type='submit']:active {
    background: $pink-dark;
    transform: scale(0.9);
}

.debug {
    border-radius: 4px;
    margin: 50px auto;
    width: 500px;
    background-color: #000;
    padding: 50px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.debug pre {
    color: #ffffff;
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
    white-space: pre-wrap;
}
</style>