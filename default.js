function add(num1, num2 = 0){
    return num1 +num2;
}

const total = add(25,)
console.log(total);

// es6 e default value hisebe parameter e ekta default value diye dewa jai jate function diye main perameter pass nah korleo jate function kaj kore


function createUser(name, age = 18){
    
    const user = {};
    
    user.name = name;
    
    user.age = age;

    return user;
    
    }
    const User = createUser('dip');
    console.log(User);