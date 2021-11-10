var readlinesync=require('readline-sync')
var chalk = require('chalk')

const red = chalk.red;
const green = chalk.green;
const underwhite = chalk.yellow.underline;
function checkans(ques,ans){

  var userans=readlinesync.question(ques)
if(userans==ans){
  score++;
 console.log(green('CORRECT!!\n'));
 console.log(underwhite(' your current score= ' +score,""));
}else{
  score--;
 console.log(red('whoops!!\nINCORRECT‍😑'));
console.log(underwhite(" your current score= "+score,""));

}
}
console.log(chalk.cyan('\n\n\nHello!'));
  var score=0;
 var x="undefined";

  var firstqns= readlinesync.question("may i know your name?\n (press Enter to skip OR press y)\n ");
  if(firstqns=="y"){
  var name = readlinesync.question("Write your name :  \n");
  console.log("hello "+name);
  console.log("let's begin");}
  else{
    console.log("Hello "+x);
    console.log("let's begin")
  }
  console.log("_______________________________________________\n")
console.log(underwhite(" your current score= "+score,""));

checkans("\nWhat is the color of my eye?\n1.Black\n2.Dark Brown\n3.Brown\n4.none of the above \n","3");

checkans("\nWhich is my favourite colour?\n1.Blue\n2.Cyan\n3.Black\n4.none of the above \n","2");

checkans("\nWhich is my favourite food?\n1.fish curry\n2.Shwarma\n3.Mutton Kabab\n4.kFC drumsticks \n","2");

checkans("\nwhat is my favourite clothing?\n1.Shirts\n2.Sweatshirt\n3.T-shirts\n4.Hoodie \n","4");

checkans("\nWhich among them is my Gaming nickname?\n1.oovee\n2.ooveelegends\n3.legendsoovee\n4.all of the above \n","4");

checkans("\nWhat among these i love the most\n1.Food\n2.movie nights\n3.Gaming\n4.Sleeping \n","3");

//result
if(firstqns=="y"){
if(score>0){
  console.log("_______________________________________________");
  console.log(green("\nSo it seems u know me well 🥳 "+name+"GG's"));
  console.log("_______________________________________________");
}else{
  console.log("_______________________________________________");
  console.log(red("\nSad to hear,but u dont know me😔"+name));
  console.log("_______________________________________________");
}
}
else {
  if(score>0)
  {
  console.log("_______________________________________________");
  console.log(green("\nSo it seems u know me well 🥳 "+name+" GG's"));
  console.log("_______________________________________________");
}
else{
  console.log("_______________________________________________");
  console.log(red("\nSad to hear,but u dont know me 🥱"+x));
  console.log("_______________________________________________");
}
}
