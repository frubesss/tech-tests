import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    showCustomerForm: true,
    firstName: null,
    lastName: null,
    loanAmount: 0,
    repaymentPeriod: 0
  },
  mutations: {
    submitForm(state) {
      state.showCustomerForm = !state.showCustomerForm;
    },
    customerDetails(state, form) {
      state.firstName = form.firstName;
      state.lastName = form.lastName;
      state.loanAmount = form.loanAmount;
      state.repaymentPeriod = form.repaymentPeriod;
    },
    resetApp(state) {
      state.showCustomerForm = true;
    }
  }
});
