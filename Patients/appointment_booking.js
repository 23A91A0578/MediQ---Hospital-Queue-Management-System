function init()
{
     document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const dept=document.getElementById("department").value;
    const doctor=document.getElementById("doctor").value;
    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;
    const symptoms=document.getElementById("symptoms").value;
    const booking_appointment=JSON.parse(localStorage.getItem("appointment_book_details")) || [];
    const booking={
      dept : dept,
      doctor : doctor,
      date : date,
      time : time,
      symptoms : symptoms
    };
    booking_appointment.push(booking);
    localStorage.setItem("appointment_book_details",JSON.stringify(booking_appointment));
    alert("Booking Successfull");
  })

}