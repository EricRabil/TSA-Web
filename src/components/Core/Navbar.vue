<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                <ul class="navbar-nav">
                    <a v-if="!!title" class="navbar-brand" href="#">{{title}}</a>
                    <navbar-item v-for="(item, index) in items" :key="index" :button="item"></navbar-item>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavbarItem from "./Navbar/NavbarItem.vue";

export type Button = {
    active: boolean,
    classes?: {
        root: string,
        label: string,
    },
    enabled: boolean,
    text: string,
    link?: string,
    routerLink?: boolean,
    children: PossibleChild,
}

export type PossibleChild = Button[] | null;

export default Vue.extend({
    props: ["title", "buttons", "usages"],
    components: {NavbarItem},
    computed: {
        items(): Button[] {
            let computedButtons: Button[] = [];
            const computeButton = (rawButton: any): Button => {
                const active = !!rawButton.active;
                const link = rawButton.link;
                const routerLink = !!rawButton.routerLink;
                const text = rawButton.text || "";
                const parseExtraClass = (node: string) => (rawButton.extraClasses && rawButton.extraClasses[node] && Array.isArray(rawButton.extraClasses[node])) ? rawButton.extraClasses[node] : [];
                const extraClasses: {
                    root: string[],
                    label: string[]
                } = {
                    root: parseExtraClass("root"),
                    label: parseExtraClass("label")
                }
                let children: PossibleChild = null;
                if (rawButton.children && Array.isArray(rawButton.children) && rawButton.children.length > 0) {
                    if (!children) {
                        children = [];
                    }
                    rawButton.children.forEach((c: any) => (children as any).push(computeButton(c)));
                }
                const rootClass = `nav-item${active ? " active" : ""}${!!children ? " dropdown" : ""} ${extraClasses.root.join(" ")}`;
                const labelClass = `nav-link${!!children ? " dropdown-toggle" : ""}${!!rawButton.enabled ? "" : " disabled"} ${extraClasses.label.join(" ")}`;
                return {
                    active,
                    enabled: !!rawButton.enabled,
                    link,
                    routerLink,
                    children,
                    text,
                    classes: {
                        root: rootClass,
                        label: labelClass,
                    },
                };
            }
            if (!Array.isArray(this.buttons)) {
                return [];
            }
            this.buttons.forEach((raw) => computedButtons.push(computeButton(raw)));
            return computedButtons;
        }
    }
});
</script>

<style lang="scss">
</style>
