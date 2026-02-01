const form = document.getElementById("crypto-form");
const input = document.getElementById("crypto-name");
const resultDiv = document.getElementById("crypto-result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    resultDiv.innerHTML = "";

    const crypto = input.value.trim().toLowerCase();
    if (!crypto) return;

    fetchCrypto(crypto);
});

async function fetchCrypto(crypto) {
    try {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error();
        }

        const data = await response.json();

        if (data.length === 0) {
            resultDiv.textContent = "Cryptocurrency not found";
            return;
        }

        const coin = data[0];

        resultDiv.innerHTML = `
            <h2>${coin.name}</h2>
            <p>Price: $${coin.current_price}</p>
            <p>24h Change: ${coin.price_change_percentage_24h}%</p>
        `;
    } catch {
        resultDiv.textContent = "Error";
    }
}