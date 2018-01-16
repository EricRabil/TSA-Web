<template>
    <ul class="list-group list-group-flush">
        <li v-for="(item, key) in this.items" :key="item" class="list-group-item">
            {{item}}
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ["items"],
})
</script>