writeCards();
countDown();
function countDown(){
    let count = 10;
    while(count >= 0){
        console.log(count);
        count--;
    }
}
function writeCards(){
    let names = ["Guadalupe", "Ollie", "Aki"];
    let event = "surprise";
    let messages = [];
    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}
