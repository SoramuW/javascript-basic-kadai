let num = 15;
calc(num);

num = 10;
calc(num);

num = 9;
calc(num);

num = 8;
calc(num);

function calc(num){
    if(num % 3 == 0  && num % 5 == 0){
        console.log('3と5の倍数です');
    }else if(num % 5 == 0){
        console.log('5の倍数です');
    }else if(num % 3 == 0 ){
        console.log('3の倍数です');
    }else{
        console.log('num:' + num);
    }
}