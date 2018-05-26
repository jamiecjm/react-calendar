import React from "react"
import PropTypes from "prop-types"
class Appointment extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h3>{this.props.appointment.title}</h3>
          <p>{this.props.appointment.appt_time}</p>
        </div>
      </React.Fragment>
    );
  }
}

Appointment.propTypes = {
  title: PropTypes.string,
  appt_time: PropTypes.node
};
export default Appointment
