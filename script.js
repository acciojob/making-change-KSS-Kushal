const makeChange = (c) => {
  // your name here
	let q = c%25>0?Math.floor(c/25):0;
	c = c%25;
	let d = c%10>0?Math.floor(c/10):0;
	c = c%10;
	let n = c%5>0?Math.floor(c/5):0;
	c = c%5;
	let p = Math.floor(c/1);
	return {q,d,n,p};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
