<template>
    <footer class="container tsa-footer text-white">
        <p class="tsa-footer-left">
            &#169; 2017 WHS TSA <span class="tsa-footer-separator"></span> <a href="https://git.ericrabil.com/">Source Code</a>
        </p>
        <p class="tsa-footer-right">
            <a href="#">Back to top</a>
        </p>
    </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style lang="scss">
@media(min-width: 630px) {
    .tsa-footer {
        background-color: #3c424c;
        height: 100px;
        line-height: 100px;
        min-width: 100%;
        position: absolute;
        padding: 0 100px;
        & p {
            margin-bottom: 0;
        }
        & .tsa-footer-left {
            float: left!important;
        }
        & .tsa-footer-right {
            float: right!important;
        }
        & .tsa-footer-separator:before {
            content: '·';
        }
    }
}
@media(max-width: 629px) {
    .tsa-footer {
        background-color: #3c424c;
        height: fit-content;
        line-height: 50px;
        min-width: 100%;
        position: absolute;
        text-align: center;
        & p {
            margin-bottom: 0;
            & > a {
                display: block;
            }
        }
    }
}
</style>