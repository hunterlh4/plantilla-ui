var today = new Date();
year = today.getFullYear();
month = today.getMonth();
day = today.getDate();

const openModalBtn = document.getElementById('openModalBtn');

// Agregar evento de clic al botón de abrir el modal
openModalBtn.addEventListener('click', function() {
    // Mostrar el modal
    $('#exampleModal').modal('show');
});

var events = [
    {
    
      id:1,
        title: "Dato A",
        start: new Date(year, month, day),
        end: new Date(year, month, day),
        backgroundColor: "#00bcd4",
    },
    {
        id:2,
                title: "Dato B",
                start: new Date(year, month, day+1),
                end: new Date(year, month, day),
                backgroundColor: "#00bcd4",
    },
    {
        id:3,
                title: "Dato C",
                start: new Date(year, month, day+2),
                end: new Date(year, month, day),
                backgroundColor: "#00bcd4",
    }
  ];


var calendar = $("#myEvent").fullCalendar({
    height: "auto",
    defaultView: "month",
    editable: false,
    selectable: true,
    displayEventTime: false, // Oculta la hora del evento
    displayEventEnd: false, // Oculta el fin del evento
    header: {
    left: "prev,next today",
    center: "title",
    // right: "month,agendaWeek,agendaDay,listMonth",
    right: "month,listMonth",
},
events: events
// [
//     {
//         id:1,
//         title: "Dato A",
//         start: new Date(year, month, day),
//         end: new Date(year, month, day),
//         backgroundColor: "#00bcd4",
//     },
//     {
//         id:1,
//         title: "Dato B",
//         start: new Date(year, month, day),
//         end: new Date(year, month, day),
//         backgroundColor: "#00bcd4",
//     },
// ],
,
eventClick: function (calEvent, jsEvent, view) {
    $("#exampleModal").modal("show");
    $("#id").val(calEvent.id);
    $("#titulo").val(calEvent.title);
},
});




  console.log(events);