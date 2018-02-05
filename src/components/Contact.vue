<template>
    <div class="container usage-container">
        <div v-if="this.isShowingSuccessAlert && !this.isShowingErrorAlert" class="alert alert-success" role="alert">
            Thank you! Expect a response within 48 hours. We look forward to talking to you.
        </div>
        <div v-if="this.isShowingErrorAlert && !this.isShowingSuccessAlert" class="alert alert-danger" role="alert">
            {{this.errorMessage}}
        </div>
        <h3>Contact Us</h3>
        <form v-on:submit="this.handleFormSubmit">
            <div class="form-group">
                <label>Your name</label>
                <input type="text" class="form-control" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label>Your e-mail *</label>
                <input type="email" class="form-control" placeholder="Enter email" required>
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label>What would you like to talk to us about? *</label>
                <textarea class="form-control" required>
                </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <small class="form-text text-muted">* These fields are required.</small>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

const suffix = /\s?\*/g;

export default Vue.extend({
    data: function() {
        return {
            isShowingSuccessAlert: false,
            isShowingErrorAlert: false,
            errorMessage: "",
        };
    },
    methods: {
        handleFormSubmit(event: Event) {
            event.preventDefault();
            const form = event.srcElement as HTMLFormElement;
            const inputChildren: Array<HTMLInputElement> = Array.from(form.children) as any;
            const missingElements: string[] = inputChildren.filter(child => child.required).filter(child => child.value.trim().length === 0).map(child => {
                const labelElement = child.previousElementSibling as HTMLLabelElement;
                if (!(labelElement instanceof HTMLLabelElement)) {
                    return null;
                }
                const labelText = labelElement.innerText.replace(suffix, "");
                return labelText;
            }).filter(value => !!value) as string[];
            if (missingElements.length !== 0) {
                this.isShowingErrorAlert = true;
                this.isShowingSuccessAlert = false;
                let errorMessage = `Please answer the required field${missingElements.length === 1 ? "" : "s"}:`;
                missingElements.forEach(element => {
                    errorMessage += `\n\\B7${element}`;
                });
                this.errorMessage = errorMessage;
                return;
            }
            form.reset();
            this.isShowingSuccessAlert = true;
        }
    },
    mounted() {
        Array.from(document.getElementsByClassName("tsa-footer")).forEach(element => element.classList.add("tsa-footer-mixin-bottom"));
    },
    destroyed() {
        Array.from(document.getElementsByClassName("tsa-footer-mixin-bottom")).forEach(element => element.classList.remove("tsa-footer-mixin-bottom"));
    }
});
</script>

<style lang="scss">
.usage-container {
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>