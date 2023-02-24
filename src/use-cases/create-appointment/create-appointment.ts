import { Appointment } from './../../entities/appointment/appointment'

interface CreateAppointmentProps {
  customer: string
  startDate: Date
  endDate: Date
  description: string
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
  async execute({
    customer,
    description,
    startDate,
    endDate
  }: CreateAppointmentProps): Promise<CreateAppointmentResponse> {
    return new Appointment({
      customer,
      description,
      startDate,
      endDate
    })
  }
}
