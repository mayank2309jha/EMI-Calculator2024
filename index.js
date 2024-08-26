document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const principal = document.querySelector(".principal");
  const rate = document.querySelector(".rateofinterest");
  const period = document.querySelector(".period");

  const total = document.querySelector(".total");
  const monthly = document.querySelector(".monthly");
  const interest = document.querySelector(".interest");

  const count_interest = (p, r, n) => {
    var base = p;
    var rate = r / 100;
    var int = (1 + rate) ** n;

    return base * int;
  };

  const monthly_payment = (p, r, n) => {
    const expo = (1 + r / 100) ** n;
    const up = (p * r * expo) / 100;
    const down = expo - 1;
    return up / down;
  };

  button.addEventListener("click", () => {
    let p = principal.value;
    let r = rate.value;
    let n = period.value;

    if (p > 1500000) {
      alert("Loan amount should not be more than 15 lakhs.");
      principal.value = "";
      rate.value = "";
      period.value = "";
      return;
    }

    if (n < 7 || n > 15) {
      alert("Repayment period should be between 7 years to 15 years.");
      principal.value = "";
      rate.value = "";
      period.value = "";
      return;
    }
    var result = count_interest(p, r, n).toFixed(2);

    total.textContent = result;
    interest.textContent = (result - p).toFixed(2);

    const mon = monthly_payment(p, r, n).toFixed(2);
    monthly.textContent = mon;
  });
});
