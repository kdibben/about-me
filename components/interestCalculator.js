const calculateInterest = (principalAmount, rateAmount, timeAmount) => {
    return principalAmount * rateAmount * timeAmount
}

const calculateAmount = (principalAmount, rateAmount, timeAmount) => {
    return principalAmount + (principalAmount * rateAmount * timeAmount)
}

const calculator = new Vue({
    el: '#calculator',
    data: {
        principal: 100,
        rate: 1,
        time: 3
    },
    computed: {
        totalInterest: function() {
            const principal = parseInt(this.principal)
            const percentRate = parseFloat(this.rate)
            const rate = percentRate / 100
            const time = parseInt(this.time)
            return `The total interest amount is $${calculateInterest(principal, rate, time).toFixed(2)}`
        },
        totalAmount: function() {
            const principal = parseInt(this.principal)
            const percentRate = parseFloat(this.rate)
            const rate = percentRate / 100
            const time = parseInt(this.time)
            return `The total amount after interest is $${calculateAmount(principal, rate, time).toFixed(2)}`
        }
    }
})