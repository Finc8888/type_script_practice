/*
* Определение наибольщого общего делителя
*/
function gcd(a:number,b:number):number {
    if(b > a){
        [b,a] = [a,b];
    }
    let remainder:number = 1;
    while (remainder > 0){
        remainder = a % b;
        if(remainder == 0) return b;
        a = b;
        b =  remainder;
    }
    return b;
}
console.log(gcd(126,210));
