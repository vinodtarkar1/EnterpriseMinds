const readebleFormat = (total_seconds) => {
    if( Math.floor(total_seconds) <= 359999){
        let total_minutes = Math.floor(total_seconds / 60);
        let seconds = total_seconds % 60;
        let hours = Math.floor(total_minutes / 60);
        let minutes = total_minutes % 60;
        if(hours < 10){
            hours = `0${hours}`;
        }
        if(minutes < 10){
            minutes = `0${minutes}`
        }
        if(seconds < 10){
            seconds = `${seconds}`
        }
        console.log(`${hours}:${minutes}:${seconds}`);
        return `${hours}:${minutes}:${seconds}`;
    } else {
       console.log("The maximum time never exceeds 359999 (99:59:59)")
    }
}

const result = readebleFormat(10098);
console.log("final result : ", result);
