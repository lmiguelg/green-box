import { Appointment } from './appointment'

describe('Create appointment', () => {
  it('Should be able to create an appointment', () => {
    const appointment = new Appointment({
      customer: 'Jonh Doe',
      startDate: new Date(Date.now() + 1),
      endDate: new Date(Date.now() + 2),
      description: 'Description'
    })

    expect(appointment).toBeInstanceOf(Appointment)
  })

  it('Should throw an error if it is an appointment with the same start and end date', () => {
    expect(() => {
      new Appointment({
        customer: 'Jonh Doe',
        startDate: new Date(),
        endDate: new Date(),
        description: 'Description'
      })
    }).toThrow(new Error('Invalid start date'))
  })
})
