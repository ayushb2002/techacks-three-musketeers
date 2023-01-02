export const formatAddress = (addr) =>
  String(addr).slice(0, 6) + "..." + String(addr).slice(-4);

export const getDaysFromDeadline = (date) => {
  const now = new Date(Date.now());
  const deadline = new Date(date);
  const diffTime = Math.abs(now - deadline);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};


export const getMaticToINRPrice = async () => {
    // const request = await fetch("https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=matic,convert=INR", {
    //     headers: {
    //         'Accepts': 'application/json',
    //         'X-CMC_PRO_API_KEY': "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c"
    //     }
    // })

    // console.log(await request.json());
    console.log(66.2130);
    return new Promise((resolve, reject) => resolve(66.2130));
}