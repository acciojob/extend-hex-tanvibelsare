const extendHex = (shortHex) => {
  // write your code here
	"#"+shortHex.slice(shortHex.startWith("#")? 1 : 0)
	 .split('')
    .map(x => x + x)
    .join('');
	return shortHex
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
