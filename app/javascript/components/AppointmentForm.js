import React from "react"
import PropTypes from "prop-types"

class AppointmentForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h2>Make an new appointment</h2>
          <form>
            <input name='title' placeholder='Appointment Title'/>
            <input name='appt_time' placeholder='Date and Time'/>
            <input type='submit' value='Make Appointment'/>
          </form>
        </div>
      </React.Fragment>
    );
  }
}


export default AppointmentForm
