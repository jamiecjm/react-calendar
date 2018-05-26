import React from "react"
import PropTypes from "prop-types"
import Appointment from './Appointment'

class AppointmentList extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div>
        {this.props.appointments.map(function(appointment){
          return(
            <Appointment appointment={appointment} key={appointment.id}/>
          )
        })}
      </div>
      </React.Fragment>
    );
  }
}

export default AppointmentList
