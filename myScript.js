function ageCalculator(){
    var date1 = new Date();
    var date2 = date1.getFullYear();
    var date3 = date1.getMonth() * 100; 
    var date4 = date1.getDate();
    var date5 = date3 + date4;
    
    var age;
    
    if(date5 >= 514){
        age = date2 - 2000
    }
    
    else{
        age = date2 - 2001
    }
    
    return age;
}

ageCalculator()