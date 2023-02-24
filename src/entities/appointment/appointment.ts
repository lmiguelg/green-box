export interface AppointmentProps {
  customer: string
  startDate: Date
  endDate: Date
  description: string
}

export class Appointment {
  private props: AppointmentProps

  constructor(props: AppointmentProps) {
    const { startDate, endDate } = props

    if (startDate <= new Date()) {
      throw new Error('Invalid start date')
    }

    if (endDate <= startDate) {
      throw new Error('Invalide dates')
    }
  }

  get customer() {
    return this.props.customer
  }

  get startDate() {
    return this.props.startDate
  }

  get endDate() {
    return this.props.endDate
  }

  get description() {
    return this.props.description
  }
}
