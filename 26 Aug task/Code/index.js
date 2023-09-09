function CheckCondition_1(x,y){
    if(x==15 || y==15){
        return true
    }
    else if(x+y==15){
        return true
    }
    else{
        return false
    }
}
function CheckPerfectSquare_2(x){
    var flag=0
    for (var i = 1; i <x; i++) {
        if(i*i==x){
            flag=1;
            return true
        }
    }
    if (flag==0){
        return false
    }
}
function WhereIsZero_3(arr){
    for(i=0; i<=arr.length; i++){
        if(arr[i]==0){
            return i+1
        }
    }
}

function invertCase_4(char){
    if(char===char.toLowerCase()){
        return char.toUpperCase();
    }
    else{
        return char.toLowerCase();
    }

}

function calcOddNumbers_5(a,z){
    var sum=0
    for(i=a+1; i<z; i++){
        if(i%2!=0){
            sum+=i
        }
    }
    return sum
}

function luckyDay_6(num){
    var flag=0
    var arr=[]
    for (let i = 0; i < num; i++) {
        arr[i]=prompt("Enter number"+(i+1))
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==4 ||arr[i]==7){
            flag=1
            return "It’s your lucky day"
        }
    }
    if(flag==0){
        return "It’s not your lucky day"
    }
}
function getAllDivisors_7(num){
    for (let i = 1; i <= num; i++) {
        if(num%i==0){
            console.log(i+" ")
        }
    }
    
}
function isPrime_8(num){
    for (let i = 2; i <= num/2; i++) {
        if(num%i==0){
            return false
        }
    }
    return true
}

function countNumbers_9(num){
    arr=[]
    var sum=0
    oddCount=0
    evenCount=0
    for (let i = 0; i < num; i++) {
        arr[i]=+prompt("Enter number")
    }
    for (let i = 0; i < num; i++) {
        sum+=arr[i]
        if(arr[i]%2==0){
            evenCount++
        }
        else
            oddCount++
    
    }
    console.log(sum);
    console.log(oddCount);
    console.log(evenCount);
}
function pumGame_10(num){
    for (let i = 1, j = 1; i <= num; i++, j+=2) {
        console.log(((2*j)-1)+" "+(2*j)+" "+((2*j)+1)+" PUM");
    }
    
    
}
function multipSign_11(a, b){
    res=a*b
    if(res<0)
        console.log("negative");
    else
        console.log("positive");
}

function finalGrade_12(grade, exams){
    if((grade>90 && grade<=100) || exams>10){
        return 100
    }
    else if((grade>75 && grade<=90) || exams>=5){
        return 90
    }
    else if((grade>50 && grade<=75) || exams>=2){
        return 75
    }
    else{
        return 0
    }
    
}

// console.log(CheckCondition_1(5,5));

// console.log(CheckPerfectSquare_2(5));

// console.log(WhereIsZero_3([1,2,0,4,5]));

// console.log(invertCase_4('a'));

// console.log(calcOddNumbers_5(10,30));

// var countOfArr = prompt("Enter number of array elements")
// console.log(luckyDay_6(countOfArr));

// var num = prompt("Enter number to get its divisors")
// getAllDivisors_7(num);

// var num = prompt("Enter number to get prime numbers from 1 to n")
// for (let i = 2; i <= num; i++) {
//     if(isPrime_8(i)){
//         console.log(i+" ");
//     }
// }

// countNumbers_9(4)

// pumGame_10(3)

// multipSign_11(5, 100)

// console.log(finalGrade_12(100, 12));