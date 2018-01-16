<template>
    <div :id="this.id" class="carousel slide" data-ride="carousel">
        <ol v-if="this.carouselItems.length > 1" class="carousel-indicators">
            <li v-for="(element, key) in this.carouselItems" :key="key" :data-target="`#${this.id}`" :data-slide-to="key" :class="element.classes.indicator"></li>
        </ol>
        <div class="carousel-inner">
            <carousel-item v-for="(element, key) in this.carouselItems" :key="key" :itemData="element"></carousel-item>
        </div>
        <a v-if="this.carouselItems.length > 1" class="carousel-control-prev" :href="`#${this.id}`" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a v-if="this.carouselItems.length > 1" class="carousel-control-next" :href="`#${this.id}`" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import CarouselItem from "./Carousel/CarouselItem.vue";

export type CarouselItemData = {
    url: string,
    imageAlt: string,
    classes?: {
        indicator: string,
        image: string,
    },
    text?: {
        title: string,
        caption?: string,
    }
}

function parseCarouselItem(rawItem: any, index: number): CarouselItemData {
    const url = rawItem.url || "";
    const imageAlt = rawItem.alt || "";
    const text = rawItem.text ? rawItem.text.title ? {title: rawItem.text.title, caption: rawItem.text.caption} : undefined : undefined;
    const indicatorClass = index === 0 ? "active" : "";
    const imageClass = `carousel-item${indicatorClass.length > 0 ? ` ${indicatorClass}` : ""}`;
    return {
        url,
        imageAlt,
        text,
        classes: {
            indicator: indicatorClass,
            image: imageClass,
        }
    };
}

export default Vue.extend({
    props: ["id", "items"],
    components: {CarouselItem},
    computed: {
        carouselItems() {
            if (this.items && Array.isArray(this.items)) {
                const result: CarouselItemData[] = this.items.map(parseCarouselItem);
                return result;
            }
            return [];
        }
    }
});
</script>

<style lang="scss">
</style>
