import React from "react"
import PropTypes from "prop-types"

class AppointmentForm extends React.Component {

  handleChange(e){
    var name = e.target.name;
    var obj = {};
    obj['input_'+name] = e.target.value;
    this.props.onInput(obj);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render () {
    return (
      <React.Fragment>
        <div>
          <h2>Make an new appointment</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input name='title' placeholder='Appointment Title'
            value={this.props.input_title}
            onChange={this.handleChange.bind(this)}/>

            <input name='appt_time' placeholder='Date and Time'
            value={this.props.input_appt_time}
            onChange={this.handleChange.bind(this)}/>

            <input type='submit' value='Make Appointment'/>

          </form>
        </div>
      </React.Fragment>
    );
  }
}


export default AppointmentForm
