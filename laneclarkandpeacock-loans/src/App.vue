<template>
    <div id="app">
        <headerNavigation/>
        <div class="app-content">
            <customerForm v-if="showCustomerForm"/>
            <agreementSummary v-else/>
        </div>
    </div>
</template>

<script>
    import headerNavigation from "./components/headerNavigation";
    import customerForm from "./components/customerForm"
    import agreementSummary from "./components/agreementSummary"

    export default {
        name: "App",
        components: {
            headerNavigation,
            customerForm,
            agreementSummary
        },
        computed: {
            showCustomerForm() {
                return this.$store.state.showCustomerForm
            }
        }
    };
</script>

<style>
    #app {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .app-content {
        margin: 20px;
    }

</style>
