const fetch = require('node-fetch');

async function getRandomQuote() {
  try {
    const res = await fetch('https://officeapi.akashrajpurohit.com/quote/random');
    if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
    const data = await res.json();

    console.log(`\n${data.character} diz:`);
    console.log(`"${data.quote}"\n`);
  } catch (err) {
    console.error('Erro ao buscar citação:', err.message);
  }
}

getRandomQuote();


