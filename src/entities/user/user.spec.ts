import { User } from './user'

describe('Create user', () => {
  it('Should be able to create an user', () => {
    const user = new User({
      id: '1234',
      name: 'Name',
      email: 'email',
      role: 'admin'
    })

    expect(user).toBeInstanceOf(User)
  })
})
