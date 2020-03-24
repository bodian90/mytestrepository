let a = 50;

if (a > 60) {
    console.log("unbeliveble");
}else if(a > 100) {
    console.log("amazing")
}else{
    console.log("true")
};

(a == 50) ? console.log("true") : console.log("unbeliveble");

switch(a){
    case a > 60:
        console.log("unbeliveble");
            break;
    case a > 100:
        console.log("amazing")
            break;
    case 50:
        console.log("true")
            break;
    default:
        console.log("Eror");
        break;
}