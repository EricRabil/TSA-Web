<template>
    <span>
        <carousel id="thicc" :items="this.carouselItems"></carousel>
        <div class="container home-container">
            <card-with-bars v-for="(card, key) in this.cards"
                :key="key"
                :centered="card.centered"
                :theme="card.theme"
                :header="card.header"
                :footer="card.footer"
                :title="card.title"
                :body="card.body"
                :buttonText="card.button.text"
                :buttonLink="card.button.link"
                :buttonType="card.button.type"
                :buttonRouter="card.button.router"
                ></card-with-bars>
        </div>
    </span>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./Core/Navbar.vue";
import Carousel from "./Core/Carousel.vue";
import CardWithBars from "./Core/Card/CardWithBars.vue";
import {CarouselItemData} from "./Core/Carousel.vue";

type Appearance = "primary" | "secondary" | "success" | "info" | "dark" | "danger" | "warning";

type CardData = {
    centered?: boolean,
    theme?: Appearance,
    header?: string,
    footer?: string,
    title?: string,
    body?: string,
    button?: {
        text: string,
        link?: string,
        type?: Appearance,
        router?: boolean
    }
}

export default Vue.extend({
    props: ["usages"],
    components: {CardWithBars, Carousel, Navbar},
    computed: {
        carouselItems(): CarouselItemData[] {
            const carouselItems: CarouselItemData[] = [];
            this.usages.forEach((usage: {products: Array<{carousel?: CarouselItemData}>}) => {
                usage.products.forEach((_, index: number) => {
                    const product = usage.products[index];
                    if (typeof product.carousel !== "undefined") {
                        carouselItems.push(product.carousel);
                    }
                });
            });
            return carouselItems;
        },
        cards(): CardData[] {
            const cardData: CardData[] = [];
            if (this.usages && Array.isArray(this.usages)) {
                this.usages.forEach((usage) => {
                    const theme = usage.color;
                    cardData.push({
                        theme,
                        header: `Uses in ${usage.area}`,
                        title: usage.title,
                        body: usage.description,
                        button: {
                            text: "Learn more",
                            type: theme === "success" ? "primary" : "success",
                            link: usage.identifier,
                            router: true
                        },
                        centered: true
                    });
                });
            }
            return cardData;
        }
    }
});
</script>

<style lang="scss">
.home-container {
    margin-top: 30px;
    & > div {
        &:first-child {
            margin-bottom: 15px;
        }
        &:not(:first-child) {
            margin-top: 15px;
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            &:last-child {
                margin-bottom: 30px;
            }
        }
    }
}
</style>
