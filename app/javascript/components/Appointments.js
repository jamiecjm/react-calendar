import React from "react"
import PropTypes from "prop-types"
import AppointmentForm from './AppointmentForm'
import AppointmentList from './AppointmentList'

class Appointments extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        appointments: this.props.appointments,
        input_title: 'Meet Joe',
        input_appt_time: 'Tomorrow at 9am'
      };
  }

  handleUserInput(obj){
    this.setState(obj)
  }

  render () {
    return (
      <React.Fragment>
        <AppointmentForm input_title={this.state.input_title}
        input_appt_time={this.state.input_appt_time}
        onInput={this.handleUserInput.bind(this)}/>
        <AppointmentList appointments={this.state.appointments}/>
      </React.Fragment>
    );
  }
}

export default Appointments
