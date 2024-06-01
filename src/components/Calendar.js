import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today",
          center: "title",
          end: "prev,next"
        }}
        height={"95vh"}
      />
    </div>
  );
};
export default Calendar;
