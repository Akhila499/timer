
const args = process.argv;
let input = args.slice(2);
console.log(input)
const timer1 = function (input1){
  let delay = 1000;
  //console.log(input1);
  if(input1.length === 0){
    console.log('Please enter some value');
  }else{
    input1.forEach((ele) =>{
      let temp = Number(ele);
      console.log('temp',temp);
      if (!temp){
        console.log("Please enter some value");
      }else if(isNaN(temp)){
        console.log("Please enter number");
      }else if(temp < 0){
        console.log("Please enter positive number");
      }else{
        setTimeout(() => {
          process.stdout.write('.');
        }, delay*temp);
        //delay *= temp;
      }
      
    });
  }
  
  
};

timer1(input);