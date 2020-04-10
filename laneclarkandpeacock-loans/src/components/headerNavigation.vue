<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title" v-on:click="resetApp">E-Z Loans</span>
            </md-app-toolbar>
        </md-app>
    </div>
</template>

<script>
    export default {
        methods: {
            resetApp() {
                this.$store.commit("resetApp");
            },
        }
    };
</script>

<style scoped>

    span {
        cursor: pointer;
    }

</style>
