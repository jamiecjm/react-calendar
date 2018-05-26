import React from "react"
import PropTypes from "prop-types"
import AppointmentForm from './AppointmentForm'
import AppointmentList from './AppointmentList'

class Appointments extends React.Component {
  render () {
    return (
      <React.Fragment>
        <AppointmentForm/>
        <AppointmentList appointments={this.props.appointments}/>
      </React.Fragment>
    );
  }
}

export default Appointments
