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
                {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, {
                    day: '31',
                    class: 'month__date',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                }, {
                    day: ' ',
                    class: 'month__date-none',
                },
            ] 
              
          },
            
            { 
            name: 'Февраль',
            id: '2',
            dates: [
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
            ]  
              
          },
            
            { 
            name: 'Март',
            id: '3',
            dates: [
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, {
                    day: '31',
                    class: 'month__date',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
                
                
            ]    
              
          },
            
            { 
            name: 'Апрель',
            id: '4',
            dates: [
                
                
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, 
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
            ]    
              
          },
            
            { 
            name: 'Май',
            id: '5',
            dates: [
                
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, {
                    day: '31',
                    class: 'month__date',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
                
            ]  
              
          },
            
            { 
            name: 'Июнь',
            id: '6',
            dates: [
                
                
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, 
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
            ]   
              
          },
            
            { 
            name: 'Июль',
            id: '7',
            dates: [
                
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, {
                    day: '31',
                    class: 'month__date',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
            ]   
              
          },
            
            { 
            name: 'Август',
            id: '8',
            dates: [
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, {
                    day: '31',
                    class: 'month__date',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
            ]  
              
          },
            
            { 
            name: 'Сентябрь',
            id: '9',
            dates: [
                
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, 
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
            ]  
              
          },
            
            { 
            name: 'Октябрь',
            id: '10',
            dates: [
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, {
                    day: '31',
                    class: 'month__date',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
            ]  
              
          },
            
            { 
            name: 'Ноябрь',
            id: '11',
            dates: [
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, 
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
                
            ]  
              
          },
            
            { 
            name: 'Декабрь',
            id: '12',
            dates: [
                
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
                {
                    day: '1',
                    class: 'month__date',
                }, {
                    day: '2',
                    class: 'month__date',
                }, {
                    day: '3',
                    class: 'month__date',
                }, {
                    day: '4',
                    class: 'month__date',
                }, {
                    day: '5',
                    class: 'month__date',
                }, {
                    day: '6',
                    class: 'month__date',
                }, {
                    day: '7',
                    class: 'month__date',
                }, {
                    day: '8',
                    class: 'month__date',
                }, {
                    day: '9',
                    class: 'month__date',
                }, {
                    day: '10',
                    class: 'month__date',
                }, {
                    day: '11',
                    class: 'month__date',
                }, {
                    day: '12',
                    class: 'month__date',
                }, {
                    day: '13',
                    class: 'month__date',
                }, {
                    day: '14',
                    class: 'month__date',
                }, {
                    day: '15',
                    class: 'month__date',
                }, {
                    day: '16',
                    class: 'month__date',
                }, {
                    day: '17',
                    class: 'month__date',
                }, {
                    day: '18',
                    class: 'month__date',
                }, {
                    day: '19',
                    class: 'month__date',
                }, {
                    day: '20',
                    class: 'month__date',
                }, {
                    day: '21',
                    class: 'month__date',
                }, {
                    day: '22',
                    class: 'month__date',
                }, {
                    day: '23',
                    class: 'month__date',
                }, {
                    day: '24',
                    class: 'month__date',
                }, {
                    day: '25',
                    class: 'month__date',
                }, {
                    day: '26',
                    class: 'month__date',
                }, {
                    day: '27',
                    class: 'month__date',
                }, {
                    day: '28',
                    class: 'month__date',
                }, {
                    day: '29',
                    class: 'month__date',
                }, {
                    day: '30',
                    class: 'month__date',
                }, {
                    day: '31',
                    class: 'month__date',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                {
                    day:' ',
                    class: 'month__date-none',
                },
                
            ]   
              
          },
        ],
        
        buttonName : 'Далее',
        buttonNameDone : 'Забронировать',
        
        reservTitle : 'Выберите время:',
        reservTitle2 : 'Введите ФИО:',
        reservTitle3 : 'Введите тему:',
    } 
});
    
    
    