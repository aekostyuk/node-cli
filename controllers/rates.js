const axios = require("axios");

const toLetters = (str) => {
	const pattern = /[^a-zA-Z0-9]+/g;
	str = str.replace(pattern, "");
	return str;
};

const fetchData = async (arr) => {
	const prices = arr.map(async (item) => {
		const url = `https://api.binance.com/api/v1/ticker/price?symbol=${toLetters(
			item
		)}`;

		try {
			const response = await axios.get(url);
			const price = response.data.price;
			//console.log(data);
			return [[item], price];
		} catch (error) {
			console.log(error);
		}
	});

	const result = Object.fromEntries(await Promise.all(prices));

	return result;
};

exports.getRates = async (req, res) => {
	const pairs = req.query.pairs;
	const arr = pairs.split(",");

	const result = await fetchData(arr);

	res.json(result);
};

exports.postRates = async (req, res) => {
	const arr = req.body.pairs;

	const result = await fetchData(arr);

	res.json(result);
};
