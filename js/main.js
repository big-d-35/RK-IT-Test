
//собираем активные даты
const months = document.getElementById('months');

months.addEventListener('click', function (event){
    let target = event.target.closest('.month__date');
    target.classList.toggle('month__date-active');
    
});

//next step 1
const nextButton1 = document.getElementById('next-button1');
const nextButton2 = document.getElementById('next-button2');
const timePartBlock = document.getElementById('time-part');
const timePartBlock2 = document.getElementById('time-part2');
const reservPart1 = document.getElementById('reserv-part1');
const reservPart2 = document.getElementById('reserv-part2');

nextButton1.addEventListener('click', function(event){
    
    let allActiveDays = document.getElementsByClassName('month__date-active');
    let data = [];
     
    if (allActiveDays.length == 0 ) {
        alert('Выберите интересующую дату');
        
    } else {
        
        for (i = 0; i < allActiveDays.length; i++) {
                let dateDay = allActiveDays[i].dataset.day;
                let dateMonth = allActiveDays[i].dataset.month;
                data += '<div class="reserv__date" ><p class="reserv__text">' + dateDay + ' ' + dateMonth + '</p><select class="reserv__select" name="Time" required><option value=""></option><option  value ="11:00">11:00</option><option  value ="13:00">13:00</option><option value ="15:00">15:00</option><option  value ="17:00">17:00</option></select></div>'; 
       
            }
        
           timePartBlock.innerHTML = data;
            reservPart1.classList.add('reserv-active');
    };
    
    
});

//next step 2
let allDates = [];
nextButton2.addEventListener('click', function(event){
    let selectedDates = document.getElementsByClassName('reserv__text');
    let selectedOptions =  document.getElementsByClassName('reserv__select');
    let allOptions = [];
    let allTexts = [];
    for (i=0; i < selectedDates.length; i++) {
        let text = selectedDates[i].innerText;
        allTexts.push(text);
    };
    for (i=0; i < selectedOptions.length; i++) {

        let option = selectedOptions[i].value;
        
        
        
       if (option == '') {
            alert('Выберите время')
            break;
        } else {
            allOptions.push(option);
        }
        
    };
    
    if (allOptions.length == allTexts.length) {
        
        allDates = allTexts.map((e, i) => e + ' ' + allOptions[i])
        reservPart1.classList.remove('reserv-active');
        reservPart2.classList.add('reserv-active');
        let allDataDates = [];
         
        for (i = 0; i < allDates.length; i++) {
            let dataDay = allDates[i];
            allDataDates += '<div class="reserv__block" ><h2 class="reserv__title">' + dataDay + '</h2><h2 class="reserv__title">Введите ваше ФИО:</h2><input class="reserv__input" type="text" size="40"><h2 class="reserv__title">Введите тему:</h2><input class="reserv__input" type="text" size="40"></div>';
            
            
        }
        timePartBlock2.innerHTML = allDataDates;
    }
    
    
    
    console.log(allDates);
       
});


