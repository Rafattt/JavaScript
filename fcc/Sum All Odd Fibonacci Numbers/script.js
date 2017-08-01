
function sumFibs(num) {
	
	var fib =[0, 1, 1];
	var oddArr = [];
	
	function fibbonaci(){
		let n = 3;
		for(i=0; i<=num; i++){
			fib[n] = fib[n-1] + fib[n-2];
			n++;
		}
		return fib;
	}
	
	fibbonaci();
	function odd(){
		for(i = 0;i<fib.length; i++){

			if(fib[i] % 2 !== 0 && num>= fib[i]){
				console.log("fib[i]: "+fib[i]);
				oddArr.push(fib[i]);
			}
		}
		return oddArr;
	}
	
	oddArr = odd();
	oddArr = oddArr.reduce(reduct, 0);
	function reduct(red,numbers){
		return red + numbers;
	}
	console.log(fib);
	console.log(oddArr);

	
  return oddArr;
}

sumFibs(20);
