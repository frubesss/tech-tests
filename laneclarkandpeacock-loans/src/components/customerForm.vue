<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item">
                <md-card-header>
                    <div class="md-title">Customer Details</div>
                    <div class="md-subhead">Apply for a fantastic rate loan today.</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('firstName')">
                                <label for="first-name">First Name</label>
                                <md-input required
                                          name="first-name"
                                          id="first-name"
                                          autocomplete="given-name"
                                          v-model="form.firstName"/>
                                <span class="md-error" v-if="!$v.form.firstName.required">first name is required</span>
                                <span class="md-error" v-else-if="!$v.form.firstName.minlength">first name must be more than 3 characters</span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('lastName')">
                                <label for="last-name">Last Name</label>
                                <md-input required
                                          name="last-name"
                                          id="last-name"
                                          autocomplete="family-name"
                                          v-model="form.lastName"/>
                                <span class="md-error" v-if="!$v.form.lastName.required">last name is required</span>
                                <span class="md-error" v-else-if="!$v.form.lastName.minlength">last name must be more than 3 characters</span>
                            </md-field>
                        </div>
                    </div>
                    <div class="slider">
                        <label class="slider-label">Loan Amount</label>
                        <v-slider
                                v-model="form.loanAmount"
                                max=2500
                                interval=100
                                tooltip-dir="bottom"
                                formatter="£{value}"
                        />
                    </div>
                    <div class="slider">
                        <label class="slider-label">Repayment Period</label>
                        <v-slider
                                v-model="form.repaymentPeriod"
                                value=6
                                min=6
                                max=36
                                tooltip-dir="bottom"
                                interval=6
                                formatter="{value} months"
                        />
                    </div>
                </md-card-content>
                <md-card-actions>
                    <md-button type="submit" class="md-raised md-primary">Submit</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>

<script>
    import vSlider from "vue-slider-component";
    import {validationMixin} from 'vuelidate'
    import {minLength, required} from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        data: () => ({
            form: {
                firstName: null,
                lastName: null,
                loanAmount: 0,
                repaymentPeriod: 6
            }
        }),
        validations: {
            form: {
                firstName: {
                    required,
                    minLength: minLength(3)
                },
                lastName: {
                    required,
                    minLength: minLength(3)
                },
            }
        },
        components: {
            vSlider
        },
        methods: {
            getValidationClass(fieldName) {
                const field = this.$v.form[fieldName];

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            validateUser() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.submitForm()
                }
            },
            submitForm() {
                this.$store.commit("submitForm");
                this.$store.commit('customerDetails', this.form)
            },
        }
    };
</script>

<style scoped>

    .slider {
        padding: 15px;
    }

    .slider:nth-of-type(3) {
        margin-top: 10px;
    }

    .slider-label {
        color: rgba(0, 0, 0, .54);
        font-size: 16px;
        line-height: 32px;
    }

</style>