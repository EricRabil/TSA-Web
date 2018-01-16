<template>
    <div class="card-footer text-muted">
        {{this.text}}
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: ["text"]
})
</script>