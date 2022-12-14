import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2022-09-14T10:00:00',
    end: '2022-09-14T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2022-09-16T13:00:00',
    end: '2022-09-16T18:00:00',
  },
  { id: 3, 
    title: 'event 3', 
    start: '2022-09-17', 
    end: '2022-09-20' },
];

function App() {
  return (
    <div className="App">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            center: 'dayGridMonth,timeGridWeek,timeGridDay new',
          }}
          customButtons={{
            new: {
              text: 'new',
              click: () => console.log('new event'),
            },
          customButtons: {
              new: {
                text: 'Booking',
                click: () => console.log('new booking'),
              }
            },
          }}
          events={events}
          eventColor="red"
          nowIndicator
          dateClick={(e) => console.log(e.dateStr)}
          eventClick={(e) => console.log(e.event.id)}
        />
      </div>
  )
}
export default App;