<template>
    <router-link v-if="this.button.routerLink" :class="this.button.classes.root" tag="li" :to="this.button.link">
        <navbar-item-inner :button="this.button"></navbar-item-inner>
    </router-link>
    <li v-else :class="this.button.classes.root">
        <navbar-item-inner :button="this.button"></navbar-item-inner>
    </li>
</template>

<script lang="ts">
import Vue from "vue";
import NavbarItemInner from "./NavbarItemInner.vue";

export default Vue.extend({
    components: {NavbarItemInner},
    props: ["button"]
})
</script>