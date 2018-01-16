<template>
  <div id="app">
    <div class="wrapper">
      <navbar title="Running Robot" :buttons="this.buttons" :usages="this.usages"></navbar>
      <main role="main">
        <router-view :usages="this.usages"></router-view>
      </main>
      <t-s-a-footer></t-s-a-footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Core/Navbar.vue";
import {Button} from "./components/Core/Navbar.vue";
import TSAFooter from "./components/Core/TSAFooter.vue";

import Usages from "./UseCases";

export default Vue.extend({
  name: 'tsa',
  created() {
    this.$router.push('/')
  },
  components: {TSAFooter, Navbar},
  data() {
    return {
      usages: Usages
    }
  },
  computed: {
    buttons () {
        const buttons: Button[] = [];
        const makeButton = (text: string, active: boolean = false, link: string = '#'): Button => {
            return {
                active,
                enabled: true,
                text,
                link,
                children: [],
            }
        };
        buttons.push(makeButton("Home", true));
        const uses = makeButton("Uses");
        for (const usage of Usages) {
          if (!uses.children) {
            uses.children = [];
          }
          const button = makeButton(usage.area, false, usage.identifier);
          button.routerLink = true;
          uses.children.push(button);
        }
        buttons.push(uses);
        const productsButton = makeButton("Products", false, "products");
        productsButton.routerLink = true;
        buttons.push(productsButton);
        const safetyButton = makeButton("Safety", false, "safety");
        safetyButton.routerLink = true;
        buttons.push(safetyButton);
        const contactButton = makeButton("Contact", false, "contact");
        contactButton.routerLink = true;
        buttons.push(contactButton);
        return buttons;
    }
  }
})
</script>

<style lang="scss">
  @import "./assets/style/runningrobot.scss";
</style>
