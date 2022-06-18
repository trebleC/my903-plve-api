function ChineseToNumber(str) {
  if(str[0] === '十'){
    str = '一' + str
  }
	const numChar = {
		'零': 0,
		'一': 1,
		'二': 2,
		'三': 3,
		'四': 4,
		'五': 5,
		'六': 6,
		'七': 7,
		'八': 8,
		'九': 9,
	};
	const levelChar = {
		'十': 10,
		'百': 100,
		'千': 1000,
		'万': 10000,
		'亿': 100000000
	};
	let arr = Array.from(str);
	let sum = 0, temp = 0;
	for(let i = 0; i < arr.length; i++) {
		const char = arr[i];
		if(char === '零') continue;
		if(char === '亿' || char === '万') {
			sum += temp * levelChar[char];
			temp = 0;
		}else {
			const next = arr[i + 1];
			if(next && next !== '亿' && next !== '万') {
				temp += numChar[char] * levelChar[next];
				i++;
			}else {
				temp += numChar[char]
			}
		}
	}
	return sum + temp;
}

module.exports = {
  ChineseToNumber
}