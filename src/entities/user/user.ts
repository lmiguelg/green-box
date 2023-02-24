export interface UserProps {
  id: string
  name: string
  email: string
  role: string
}

export class User {
  private props: UserProps

  constructor(props: UserProps) {
    const { id, email, name, role } = props
  }

  getId() {
    return this.props.id
  }

  getName() {
    return this.props.name
  }

  getEmail() {
    return this.props.email
  }

  getRole() {
    return this.props.role
  }
}
