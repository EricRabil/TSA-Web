<template>
    <div class="container usage-container">
        <div class="card">
            <div class="card-header text-center">
                Safety
            </div>
            <div class="card-body">
                <p class="card-text">
                    Our artifical intelligence deployments should never substitute human monitoring.
                    These deployments are designed to assist in execution of operations and services, however are not 100% reliable and do need redundancies and safeguards.
                    <br>
                    By purchasing a product from <strong>Running Robot</strong>, you agree that you will not:
                    <ul>
                        <li>Solely rely on our technologies</li>
                        <li>Use these technologies to carry out wrongdoings</li>
                        <li>Attempt to use these technologies outside of their scope of operations</li>
                    </ul>
                    <br>
                    Our products, while highly intelligent, are also highly specialized for their scope of operations. As a result, we ask that you do not attempt to use them outside of their scopes. While they may perform fine, they are not designed to work in other fields and may behave abnormally at first.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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