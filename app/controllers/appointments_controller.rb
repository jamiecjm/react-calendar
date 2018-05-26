class AppointmentsController < ApplicationController

  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.create(appointment_params)
  end

  private

  def appointment_params
    params.require(:appointment).permit(:appt_time, :title)
  end

end
