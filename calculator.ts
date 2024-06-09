interface CalculatorProps {
  money: number,
  share: number,
  dividend: number,
  stop: number,
}

function calculator({ money, share, dividend, stop }: CalculatorProps) {
    if (money < share) {
        return "Not enough funds";
    }
    
    let rest = money % share;
    let totalOfShares = Math.floor(money / share);
    let month = 1;
    let monthlyIncome = totalOfShares * dividend;

    while (monthlyIncome < stop) {
        month++;
        rest += monthlyIncome;

        if (rest >= share) {
            totalOfShares += Math.floor(rest / share);
            rest %= share;
            monthlyIncome = totalOfShares * dividend;
        }
    }

    return `Total of Shares: ${totalOfShares}, Months: ${month}, Monthly income: ${monthlyIncome}, Money left: ${rest}.`
}
