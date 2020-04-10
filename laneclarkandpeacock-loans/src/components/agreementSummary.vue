<template>
    <div>
        <md-card class="md-layout-item">
            <md-card-header>
                <div class="md-title">Agreement Summary</div>
                <div class="md-subhead">For {{firstName}} {{lastName}}</div>
            </md-card-header>
            <md-card-content>
                <div><label>Requested Amount</label><strong>£{{loanAmount}}</strong></div>
                <div><label>Repayment Period</label><strong>{{repaymentPeriod}} months</strong></div>
                <div><label>Monthly Repayments</label><strong>£{{installmentCalculation.firstPayments}}</strong> per
                    month for this first <strong>{{repaymentPeriod - 1}} months</strong> and then one final payment of
                    <strong>£{{installmentCalculation.finalPayment}}</strong></div>
                <div><label>Repayment Amount</label><strong>£{{repaymentCalculation}}</strong></div>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['firstName', 'lastName', 'loanAmount', 'repaymentPeriod']),
            repaymentCalculation: function () {
                return (125 / 100) * this.$store.state.loanAmount
            },
            installmentCalculation: function () {
                const orginalInstallmentCalculation = this.repaymentCalculation / this.$store.state.repaymentPeriod;
                const firstPayments = Math.round(orginalInstallmentCalculation * 100) / 100;
                const totalPayments = firstPayments * this.$store.state.repaymentPeriod;
                const repaymentDifference = this.repaymentCalculation - totalPayments;
                const finalPayment = firstPayments + repaymentDifference;
                return {firstPayments: firstPayments, finalPayment: Math.round(finalPayment * 100) / 100}
            }
        },
    };
</script>

<style scoped>
    div {
        font-size: 20px;
        font-weight: 400;
        padding-bottom: 10px;
        text-align: center;
    }

    label {
        color: rgba(0, 0, 0, .54);
        font-size: 16px;
        line-height: 32px;
        display: block;
    }

</style>