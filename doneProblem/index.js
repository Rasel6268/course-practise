function cashOut(money) {
    if (typeof money !== 'number' || money <= 0) {
        return 'Invalid'
    }
    const cashOutRate = 1.75 / 100;
    const cashOutCharge = money * cashOutRate;
    return cashOutCharge;


}

function validEmail(email) {
    if ( typeof email !== 'string' || email.startsWith('@') || email.startsWith('+') || email.startsWith('_') || email.startsWith('-') || !email.endsWith('.com') || email.includes(' ') ||!email.includes("@")) {
        return "Invalid";

    }
    return true;
}

function electionResult(votes) {
    if(!Array.isArray(votes)){
      return "invalid"
    }
    const Mago = [];
    const Banana =[];
    for(const vote of votes){
       if(vote === "mango"){
          Mago.push(vote)
       }else{
        if(vote === "banana"){
             Banana.push(vote)

        }
       }
    }
    if(Banana.length > Mago.length){
       return "Banana"
    }else if(Mago.length === Banana.length){
       return "Draw"

    }
    else{
       return "Mango"
    }

}

function isBestFriend(f1, f2) {
    if(typeof f1 !== 'object' || typeof f2 !== 'object'){
        return "Invalid"
    }
    if(f1.bestFriend === f2.roll && f1.roll === f2.bestFriend){
        return true
    }else{
       return false
    }

}

function calculateWatchTime(times) {
    let watchTime = 0;
   
    for (const time of times) {
        if(typeof time !== 'number'){
            return 'invalid'
        }

        watchTime += time

    }
    const hours = Math.floor(watchTime / 3600);
    const minute = Math.floor((watchTime % 3600) / 60)
    const seconds = watchTime % 60;

    const totalwatchTime = {
        Hours: hours,
        Minutes: minute,
        Seconds: seconds

    }
    return totalwatchTime
}