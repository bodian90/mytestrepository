
let money,time;

function start (){
    money = +prompt ("You budget for a mounth? ", '');
    time =  prompt ("Write Date a format YY-MM-DD", '');

    while (isNaN(money)|| money == "" || money == null) {
        money = +prompt ("You budget for a mounth? ", '');
    }
}
start();

let appDate = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate : time,
    saving: true
};

// let i = 0;
// while(i<2){
//     i++;
//      let a = prompt("Write obligatory expenses for this mounth", ''),
//          b = prompt("How much is it?", '');
//          if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//               && a != '' && b != '' && a.length < 50){
//                  console.log("done");
//                   appDate.expenses[a] = b;}
// }

// let i = 0;
// do{
//     i++;
//     let a = prompt("Write obligatory expenses for this mounth", ''),
//         b = prompt("How much is it?", '');
//         if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//              && a != '' && b != '' && a.length < 50){
//                  console.log("done");
//                  appDate.expenses[a] = b;}
// }while(i < 2);

function chooseExpenses (){
    for(let i = 0; i < 2; i++) {
        let a = prompt("Write obligatory expenses for this mounth", ''),
            b = prompt("How much is it?", '');
    
        if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50){
            console.log("done");
            appDate.expenses[a] = b;
            } else {
                i = i - 1;
            }   
        };
}

    appDate.moneyPerDay = appDate.budget/30;
    alert("budger for a day " + appDate.moneyPerDay);

    if (appDate.moneyPerDay < 100) {
        console.log('Minimals level of wealth');
    } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 1000) {
        console.log("normal level of wealth");
    } else if (appDate.moneyPerDay > 1000){
        console.log("high level of wealth");
    }else {
        console.log("Eror");
    }

    function checkSeving() {
        if(appDate.saving == true){
            let save = +prompt('How much of accumulation?')
                percent = +prompt('What percentage?');

            appDate.mounthInCome = save/100*12*percent;
            alert('Mouthly income in your deposite: ' + appDate.mounthInCome );
                
             
        }
    }

    checkSeving();