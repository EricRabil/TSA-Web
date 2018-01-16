<template>
    <div class="card-header">
        {{this.text}}
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ["text"]
})
</script>