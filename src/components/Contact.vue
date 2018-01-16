<template>
    <div class="container usage-container">
        <h3>Contact Us</h3>
        <form>
            <div class="form-group">
                <label>Your name</label>
                <input type="text" class="form-control" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label>Your e-mail</label>
                <input type="email" class="form-control" placeholder="Enter email">
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label>What would you like to talk to us about?</label>
                <textarea class="form-control">
                </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend();
</script>

<style lang="scss">
.usage-container {
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>