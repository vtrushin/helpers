const stringRepeat = (string, times) => {
	let repeatedString = '';

	while (times > 0) {
		repeatedString += string;
		times--;
	}

	return repeatedString;
};

module.exports = stringRepeat;
