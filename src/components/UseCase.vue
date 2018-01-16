<template>
    <div class="container usage-container">
        <div :class="`card text-white bg-${this.usage.color}`">
            <div class="card-header text-center">
                {{this.usage.area}}
            </div>
            <div class="card-body">
                <p class="card-text">
                    <span v-for="const (description, key) of longerDescription.descriptions" :key="key">
                        {{description}}
                        <br v-if="longerDescription.brIndexes.indexOf(key) !== -1">
                        <br v-if="longerDescription.brIndexes.indexOf(key) !== -1">
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ["usage", "usages"],
    computed: {
        longerDescription() {
            const getDescriptions: () => string[] = (): string[] => {
                const longerDescription: string[] = this.usage.longerDescription;
                const fallbackDescription: string = this.usage.description;
                if (longerDescription) {
                    return longerDescription;
                }
                return [`(there was no longer description! shame on you) ${fallbackDescription}`];
            };
            const descriptions = getDescriptions();
            const brIndexes = descriptions.map((_, index) => index).filter((index) => index !== (descriptions.length - 1));
            return {
                descriptions,
                brIndexes
            };
        }
    }
});
</script>

<style lang="scss">
.usage-container {
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>