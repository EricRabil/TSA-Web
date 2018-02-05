<template>
    <div v-if="!!this.title || !!this.body || !!this.buttonText" class="card-body">
        <h4 v-if="!!this.title" class="card-title">
            {{this.title}}
        </h4>
        <p v-if="!!this.body" class="card-text" v-html="this.parsedBody">
        </p>
        <a v-if="!!this.buttonText && !this.buttonRouter" :href="this.buttonLink || '#'" :class="`btn btn-${this.buttonType}`">
            {{this.buttonText}}
        </a>
        <router-link v-else-if="!!this.buttonText && !!this.buttonRouter" :class="`btn btn-${this.buttonType}`" tag="a" :to="this.buttonLink">
            {{this.buttonText}}
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ["title", "body", "buttonText", "buttonLink", "buttonType", "buttonRouter"],
    computed: {
        type(): string {
            return this.buttonType || "primary";
        },
        parsedBody(): string {
            return typeof this.body === "string" ? this.body : this.body.join("<br>");
        }
    }
})
</script>