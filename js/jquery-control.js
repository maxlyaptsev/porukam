	


  $(document).ready(function(){

   	 $('.main-box').each(function(){  
          
      var highestBox = 0;
      
        $('.col-md-3', this).each(function(){
        
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
        $('.col-md-3',this).height(highestBox);
                    
    }); 

});

  $(document).ready(function(){
    
        $('.fa').click(function(){
            var cl = $(this).attr('id');
            if(cl === 'open'){
                $('#close').show();
                $('#open').hide();
                $('#mob').slideDown();
            }
            else{ 
                $('#open').show();
                $('#close').hide();
                $('#mob').slideUp();
            }
        })
    })

        $(".datepicker").datepicker();
  $("#dateCalendar").click(function() { 
   $(".datepicker").datepicker( "show" );
  });

        $(".datepicker1").datepicker();
  $("#dateCalendar1").click(function() { 
   $(".datepicker1").datepicker( "show" );
  });

        $(".datepicker2").datepicker();
  $("#dateCalendar2").click(function() { 
   $(".datepicker2").datepicker( "show" );
  });

        $(".datepicker3").datepicker();
  $("#dateCalendar3").click(function() { 
   $(".datepicker3").datepicker( "show" );
  });

        $(".datepicker4").datepicker();
  $("#dateCalendar4").click(function() { 
   $(".datepicker4").datepicker( "show" );
  });

        $(".datepicker5").datepicker();
  $("#dateCalendar5").click(function() { 
   $(".datepicker5").datepicker( "show" );
  });

        $(".datepicker6").datepicker();
  $("#dateCalendar6").click(function() { 
   $(".datepicker6").datepicker( "show" );
  });

        $.datepicker.setDefaults({changeYear: true});
        $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
$("#datetimepicker2").datepicker();

