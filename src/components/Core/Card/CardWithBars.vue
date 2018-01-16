<template>
    <div :class="`card ${this.style}`">
        <card-header v-if="!!this.header" :text="this.header"></card-header>
        <card-body v-if="!!this.title || !!this.body || !!this.buttonText"
            :body="this.body"
            :title="this.title"
            :buttonText="this.buttonText"
            :buttonLink="this.buttonLink"
            :buttonType="this.buttonType"
            :buttonRouter="this.buttonRouter"
            ></card-body>
        <card-footer v-if="!!this.footer" :title="this.footer"></card-footer>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import CardHeader from "./Components/CardHeader.vue";
import CardBody from "./Components/CardBody.vue";
import CardFooter from "./Components/CardFooter.vue";

export default Vue.extend({
    components: {CardHeader, CardBody, CardFooter},
    props: ["centered", "header", "title", "body", "buttonText", "buttonLink", "buttonType", "buttonRouter", "footer", "theme"],
    computed: {
        style(): string {
            const positioning = (this.centered === true) ? `text-center ` : ``;
            const coloring = this.theme ? ` text-white bg-${this.theme}` : ``;
            return positioning + coloring;
        }
    }
})
</script>