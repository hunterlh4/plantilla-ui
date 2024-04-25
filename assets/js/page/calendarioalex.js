var today = new Date();
year = today.getFullYear();
month = today.getMonth();
day = today.getDate();

var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

var dayNameMap = {
  'Sunday': 'Domingo',
  'Monday': 'Lunes',
  'Tuesday': 'Martes',
  'Wednesday': 'Miércoles',
  'Thursday': 'Jueves',
  'Friday': 'Viernes',
  'Saturday': 'Sábado'
};

// console.log(year +'-'+ month+'-' + day )
const openModalBtn = document.getElementById('openModalBtn');

// Agregar evento de clic al botón de abrir el modal
openModalBtn.addEventListener('click', function() {
    // Mostrar el modal
    $('#exampleModal').modal('show');
});

var events = [
    {
    
        id:1,
        title: "OK",
        start: new Date(year, month-1, day-7,7,30),
        end: new Date(year, month-1, day-7,15,30),
        backgroundColor: "#4FC3F7",
        image: "ruta/a/imagen.jpg",
        nombredia: monthNames[day-7],
        location: "Ubicación del evento A"
    },
    {
        id:2,
                title: "OK2",
                start: new Date(year, month, day-7,7,30),
                end: new Date(year, month, day-7,15,30),
                backgroundColor: "#4FC3F7",
                image: "ruta/a/imagen.jpg",
                nombredia: monthNames[day-7],
                location: "Ubicación del evento A"
    },
    {
        id:3,
                title: "SR",
                start: new Date(year, month, day-5,7,30),
                end: new Date(year, month, day-5,15,30),
                backgroundColor: "#84b6f4",
                image: "ruta/a/imagen.jpg",
                nombredia: monthNames[day-5],
                location: "Ubicación del evento A"
    },
    {
      id:4,
              // title: "NME",
              start: new Date(year, month, day-4,7,30),
              end: new Date(year, month, day-4,15,30),
              backgroundColor: "#fdfd96",
              image: "ruta/a/imagen.jpg",
              nombredia: monthNames[day-4],
              location: "Ubicación del evento A"
  },
  {
    id:5,
            // title: "SR",
            start: new Date(year, month, day-3,7,30),
        end: new Date(year, month, day-3,15,30),
            backgroundColor: "#84b6f4",
            image: "ruta/a/imagen.jpg",
            nombredia: monthNames[day-3],
            location: "Ubicación del evento A"
},
{
          id:6,
          // title: "NME",
          start: new Date(year, month, day-2,7,30),
          end: new Date(year, month, day-2,15,30),
          backgroundColor: "#fdfd96",
          image: "ruta/a/imagen.jpg",
          nombredia: monthNames[day-2],
          location: "Ubicación del evento A"
},
{
  id:7,
          // title: "NMS",
          start: new Date(year, month, day-1,7,30),
           end: new Date(year, month, day-1,15,30),
          backgroundColor: "#CE93D8",
          image: "ruta/a/imagen.jpg",
          nombredia: monthNames[day-1],
          location: "Ubicación del evento A"
},
{
  id:8,
          // title: "Revisado",
          start: new Date(year, month, day,7,30),
          end: new Date(year, month, day,15,30),
          backgroundColor: "#9CCC65",
          image: "ruta/a/imagen.jpg",
          nombredia: monthNames[day],
          location: "Ubicación del evento A"
},
{
  id:8,
          // title: "Requiere revision",
          start: new Date(year, month, day+1,7,30),
          end: new Date(year, month, day+1,15,30),
          backgroundColor: "#ff6961",
          image: "ruta/a/imagen.jpg",
          nombredia: monthNames[day+1],
          location: "Ubicación del evento A"
},

{
  id:8,
          // title: "CHB",
          start: new Date(year, month, day+2,7,30),
          end: new Date(year, month, day+2,15,30),
          backgroundColor: "#f8a966",
          image: "ruta/a/imagen.jpg",
          location: "Ubicación del evento A"
},
{
  id:8,
          // title: "NMS",
          start: new Date(year, month,day+3,7,30),
        end: new Date(year, month, day+3,15,30),
          backgroundColor: "",
          image: "ruta/a/imagen.jpg",
          location: "Ubicación del evento A"
},
  ];


var calendar = $("#myEvent").fullCalendar({
    height: "auto",
    defaultView: "month",
    editable: false,
    selectable: true,
    locate: 'es',
    displayEventTitle:false,
    displayEventTime: true, // Oculta la hora del evento
    displayEventEnd: true, // Oculta el fin del evento
    header: {
    left: "prev,next today",
    center: "title",
    right: "month,agendaWeek,agendaDay,listMonth",
    // right: "month,listMonth",
},
events: events,

eventClick: function (calEvent, jsEvent, view) {
    $("#exampleModal").modal("show");
    $("#id").val(calEvent.id);
    $("#titulo").val(calEvent.title);

    console.log('cambio de pagina');
   
},

viewRender: function(view, element) {
  // Cambia el texto del encabezado del calendario

  var mesActual = view.intervalStart.month();
  var añoActual = view.intervalStart.year();
  var nombremes = monthNames[mesActual];
  // element.find('.fc-time').after('<br>');
  // console.log('Mes actual:', mesActual);
 

  // $(".fc-center").text("<h5>" + nombreMes + ' - ' + añoActual + "</h5>");
  $(".fc-center").text(nombremes+' '+añoActual);

  // Cambia los nombres de los días de la semana
  $(".fc-list-heading-main").text(monthNames[mesActual]);

  $(".fc-day-header").each(function(index) {
      $(this).text(dayNames[index]);
  });

   
    $(".fc-list-heading-alt").each(function() {
      // Obtener el nombre del día actual
      var englishDayName = $(this).text();
    
      // Obtener el nombre del día en español desde el mapeo
      var spanishDayName = dayNameMap[englishDayName];
    
      // Establecer el texto del elemento con el nombre del día de la semana en español
      $(this).text(spanishDayName);
  });



 
  // Cambia los nombres de los meses
  $(".fc-month-button").text("Mes");
  $(".fc-agendaWeek-button").text("Semana");
  $(".fc-agendaDay-button").text("Día");
  $(".fc-listMonth-button").text("Lista");
  $(".fc-today-button").text("Ahora");


  // var monthName = moment(view.start).format("MMMM");
  //               $(".fc-center").text(monthName);
},

customButtons: {
  prev1: {
      text: 'Anterior',
      click: function() {
          // $('#myEvent').fullCalendar('prev');
          console.log("Se hizo clic en el botón Anterior");
          // var prevDate = $('#myEvent').fullCalendar('getDate').subtract(1, 'months');
          // asistencias(prevDate.month() + 1, prevDate.year());
               
      }
  },
  next2: {
      text: 'Siguiente',
      click: function() {
          // $('#myEvent').fullCalendar('next');
          console.log("Se hizo clic en el botón Siguiente");
          // var nextDate = $('#myEvent').fullCalendar('getDate').add(1, 'months');
          // asistencias(nextDate.month() + 1, nextDate.year());
      }
  },
  today3: {
      text: 'Hoy',
      click: function() {
          // $('#myEvent').fullCalendar('today');
          console.log("Se hizo clic en el botón Hoy");
          // var todayDate = new Date();
          // asistencias(todayDate.getMonth() + 1, todayDate.getFullYear());
               
      }
  }
}


});




function handleCalendarNavigation(month, year, trabajadoresId) {
  // Realizar la llamada AJAX aquí
  // Puedes usar jQuery.ajax() o la función fetch() de JavaScript para enviar la solicitud
  // Aquí un ejemplo de cómo usar jQuery.ajax():
  $.ajax({
      url: 'tu_url_de_destino', // Especifica la URL a la que enviar la solicitud AJAX
      method: 'POST', // Especifica el método HTTP (POST, GET, etc.)
      data: {
          month: month,
          year: year,
          trabajadores_id: trabajadoresId
      }, // Envía los parámetros necesarios
      success: function(response) {
          // Maneja la respuesta exitosa aquí
          console.log("Se realizó la llamada AJAX exitosamente");
          console.log(response); // Puedes mostrar la respuesta en la consola o manejarla de otra manera
      },
      error: function(xhr, status, error) {
          // Maneja el error aquí
          console.error("Error en la llamada AJAX:", error);
      }
  });
}

function asistencias(moth,year){
  var trabajadores_id = 1; //$('#trabajadores_id').val()

  console.log(moth,year,trabajadores_id);

}



$(document).ready(function() {
  // Agrega un evento de clic al botón "Anterior"
  $('.fc-prev-button').on('click', function() {
      // Muestra un mensaje en la consola cuando se hace clic en el botón "Anterior"
       var prevDate = $('#myEvent').fullCalendar('getDate').subtract(1, 'months');
          asistencias(prevDate.month() + 1, prevDate.year());
      // console.log('Se hizo clic en el botón "Anterior" del calendario.');
  });

  $('.fc-next-button').on('click', function() {
    // Muestra un mensaje en la consola cuando se hace clic en el botón "Siguiente"
       var nextDate = $('#myEvent').fullCalendar('getDate').add(1, 'months');
          asistencias(nextDate.month() + 1, nextDate.year());
    // console.log('Se hizo clic en el botón "Siguiente" del calendario.');
});

// Agrega un evento de clic al botón "Hoy"
$('.fc-today-button').on('click', function() {
    // Muestra un mensaje en la consola cuando se hace clic en el botón "Hoy"

      var todayDate = new Date();
          asistencias(todayDate.getMonth() + 1, todayDate.getFullYear());
    // console.log('Se hizo clic en el botón "Hoy" del calendario.');
});
});