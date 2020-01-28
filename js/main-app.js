const app = new Vue({
    el: '#app',
    data: {
        title: 'Бронирование дат для переговорных',
        days: [
            {name: 'ПН'},
            {name: 'ВТ'},
            {name: 'СР'},
            {name: 'ЧТ'},
            {name: 'ПТ'},
            {name: 'СБ'},
            {name: 'ВС'},
        ],
        
        months: [
          { 
            name: 'Январь',
            id: '1',
            dates: [
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:'31'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
            ] 
              
          },
            
            { 
            name: 'Февраль',
            id: '2',
            dates: [
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
            ]  
              
          },
            
            { 
            name: 'Март',
            id: '3',
            dates: [
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:'31'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
                
            ]    
              
          },
            
            { 
            name: 'Апрель',
            id: '4',
            dates: [
                
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
            ]    
              
          },
            
            { 
            name: 'Май',
            id: '5',
            dates: [
                
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:'31'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
            ]  
              
          },
            
            { 
            name: 'Июнь',
            id: '6',
            dates: [
                
                
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
            ]   
              
          },
            
            { 
            name: 'Июль',
            id: '7',
            dates: [
                
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:'31'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
            ]   
              
          },
            
            { 
            name: 'Август',
            id: '8',
            dates: [
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:'31'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
            ]  
              
          },
            
            { 
            name: 'Сентябрь',
            id: '9',
            dates: [
                
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
            ]  
              
          },
            
            { 
            name: 'Октябрь',
            id: '10',
            dates: [
                {day:' '},
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:'31'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
            ]  
              
          },
            
            { 
            name: 'Ноябрь',
            id: '11',
            dates: [
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
                
            ]  
              
          },
            
            { 
            name: 'Декабрь',
            id: '12',
            dates: [
                
                {day:' '},
                {day:'1'},
                {day:'2'},
                {day:'3'},
                {day:'4'},
                {day:'5'},
                {day:'6'},
                {day:'7'},
                {day:'8'},
                {day:'9'},
                {day:'10'},
                {day:'11'},
                {day:'12'},
                {day:'13'},
                {day:'14'},
                {day:'15'},
                {day:'16'},
                {day:'17'},
                {day:'18'},
                {day:'19'},
                {day:'20'},
                {day:'21'},
                {day:'22'},
                {day:'23'},
                {day:'24'},
                {day:'25'},
                {day:'26'},
                {day:'27'},
                {day:'28'},
                {day:'29'},
                {day:'30'},
                {day:'31'},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                {day:' '},
                
            ]   
              
          },
        ],
    } 
});
    
    
    