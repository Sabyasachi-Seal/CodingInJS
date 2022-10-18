
const greet = "World"
const s1 = "Sabyasachi";
const s2 = "Seal";

let num1 = 1;
let num2 = 2;
let num3 = '3';



function myFunction() {
  console.log("Hello"+` ${s1} ${s2}, how are you?\n`);

  console.log("Num + Num: %s: ", num1 + num2);
  console.log("Num + String %s: ", num2 + num3);
  console.log("Num + Num + String %s: ", num1 + num2 + num3);

  console.log(`\n0 == '':${0 == ''}\n0 === '':${0 === ''}`)

  console.log(`\n${Math.sqrt(100)}\n${100/10}`);

  console.log(`\n${parseInt("100") + parseInt("100")}\n${parseFloat("100.00") + parseFloat("100.00")}\n${parseInt("10 ten 10")}`);

  let d = new Date();

  console.log(d);

  console.log("hello".length, "hello".toUpperCase());

  throw true;


}

try{
  myFunction();
}
catch(e){ 
  console.log(`Error: ${e}`);
}
finally{
  console.log("Program Over");
}