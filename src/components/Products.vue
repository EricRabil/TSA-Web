<template>
    <div class="container container-margin-fix">
        <div class="jumbotron">
            <h1 class="display-3">
                Our Products
            </h1>
            <p class="lead">
                We've listed some of our most popular products on this page to give you a taste of what we do at Running Robot.
            </p>
        </div>
        <div class="conatiner">
            <div v-for="area in this.areas" :key="area.identifier" class="row product-cell">
                <div class="col-lg-3">
                    <div :class="`card text-white product-overview bg-${area.color}`">
                        <div class="card-header">
                            {{area.name}}
                        </div>
                        <img class="card-img" :src="area.products[0].image" :alt="`${area.products[0].name} Showcase`">
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="card text-white product-detail">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs" :id="`nav-${area.identifier}-tabs`" role="tablist">
                                <li v-for="product in area.products" :key="product.identifier" class="nav-item">
                                    <a :class="`nav-item nav-link${product.defaultActive ? ' active' : ''}`" data-toggle="tab" :href="`#nav-${product.identifier}-card`">{{product.name}}</a>
                                </li>
                            </ul>
                        </div>
                        <div :class="`card-body bg-${area.color} tab-content`" :id="`nav-${area.identifier}-tabContent`">
                            <span v-for="product in area.products" :key="product.identifier" :class="`tab-pane fade${product.defaultActive ? ' show active' : ''}`" :id="`nav-${product.identifier}-card`" role="tabpanel">
                                {{product.description}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import {UseCase} from "../UseCases";

type Product = {
    defaultActive: boolean,
    name: string,
    identifier: string;
    image: string,
    description: string,
    price?: number,
}

type Area = {
    identifier: string;
    name: string,
    color: string,
    shortDescription: string | string[],
    products: Product[]
}

export default Vue.extend({
     props: ["usages"],
     computed: {
         areas(): Area[] {
             const areas: Area[] = [];
             const uses: UseCase[] = this.usages;
             uses.forEach((use) => {
                 if (use.products.length === 0) {
                     return;
                 }
                 const products: Product[] = [];
                 use.products.forEach((product, index) => {
                     products.push({
                         defaultActive: index === 0,
                         name: product.name,
                         identifier: product.identifier,
                         image: (<any>product).image || "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15fe0f11e86%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15fe0f11e86%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
                         description: product.summary,
                         price: product.price,
                     });
                 });
                 areas.push({
                     name: use.area,
                     color: use.color,
                     identifier: use.identifier,
                     shortDescription: use.description,
                     products
                 });
             });
             return areas;
         }
     }
});
</script>

<style lang="scss">
.product-cell {
    margin-bottom: 10px;
}

.container-margin-fix {
    margin-bottom: 20px;
}

.product-detail {
    height: 100%;
}
</style>