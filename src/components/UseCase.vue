<template>
    <div :id="`usage-${this.usage.identifier}-root`" v-bind:style="this.rootClass">
        <div class="container usage-container">
            <div :class="`card text-white bg-${this.usage.color}`">
                <div class="card-header text-center">
                    Artificial Intelligence in {{this.usage.area}}
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <span v-for="const (description, key) of longerDescription.descriptions" :key="key">
                            {{description}}
                            <br v-if="longerDescription.brIndexes.indexOf(key) !== -1">
                            <br v-if="longerDescription.brIndexes.indexOf(key) !== -1">
                        </span>
                    </p>
                    <span v-if="!!this.usage.testimonials">
                        <strong><h3>What our customers are saying</h3></strong>
                        <div>
                            <div v-for="const (testimonial, key) of this.usage.testimonials" :key="key" class="jumbotron jumbotron-fluid testimonial-jumbotron">
                                <div class="container">
                                    <h1 class="display-4">{{testimonial.person.name}}</h1>
                                    <em><p class="lead">“{{testimonial.memo}}”</p></em>
                                    <div class="rating-container">
                                        <div v-for="n in testimonial.rating" class="testimonial-star">
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
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
        },
        rootClass: function(this: any) {
            const image = this.usage.image;
            return {
                'background-image': `url(${image})`,
                'background-position': 'center',
                'background-size': 'cover'
            }
        }
    }
});
</script>

<style lang="scss">
.testimonial-jumbotron {
    background-color: inherit;
    border-color: rgba(0,0,0,0.125);
    border-width: 1px;
    border-style: groove;
    border-radius: 12.5px;
}

.rating-container {
    display: flex;
    flex-flow: row;
}

.testimonial-star {
    height: 40px;
    width: 40px;
}
</style>