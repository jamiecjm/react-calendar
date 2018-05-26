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

  handleFormSubmit(){
    var appointment = {title: this.state.input_title, appt_time: this.state.input_appt_time, authenticity_token: this.props.csrf_token};
    $.post('/appointments',{
      appointment: appointment
    }).done(function(data) {
      this.addNewAppointment(data);
    }.bind(this));
  }

  addNewAppointment(appointment){
    this.state.appointments.push(appointment);
    var appointments = this.props.appointments
    this.setState({appointments: appointments.sort(function(a,b){
      return new Date(a.appt_time) - new Date(b.appt_time);
    })
  });
  }

  render () {
    return (
      <React.Fragment>
        <AppointmentForm input_title={this.state.input_title}
        input_appt_time={this.state.input_appt_time}
        onInput={this.handleUserInput.bind(this)}
        onFormSubmit={this.handleFormSubmit.bind(this)}/>
        <AppointmentList appointments={this.state.appointments}/>
      </React.Fragment>
    );
  }
}

export default Appointments
