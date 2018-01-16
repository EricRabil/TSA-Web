<template>
    <span>
        <a v-if="!this.button.routerLink" :class="this.button.classes.label" :href="this.button.link || '#'" :data-toggle="!!this.button.children ? 'dropdown' : ''">
            {{this.button.text}}
        </a>
        <router-link v-else :class="this.button.classes.label" :to="this.button.link">
            {{this.button.text}}
        </router-link>
        <div v-if="!!this.button.children" class="dropdown-menu">
            <span v-for="(child, index) in this.button.children" :key="index">
                <a v-if="!child.routerLink" class="dropdown-item" :href="child.link || '#'">
                    {{child.text}}
                </a>
                <router-link v-else class="dropdown-item" tag="a" :to="child.link">
                    {{child.text}}
                </router-link>
            </span>
            
        </div>
    </span>
</template>

<script lang="ts">
import Vue from "vue";
import {Button} from "../Navbar.vue";

export default Vue.extend({
    props: ["button"],
});
</script>

<style lang="scss">
</style>
