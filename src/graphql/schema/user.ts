import {gql} from 'apollo-server'

export default gql`
  enum Role {
    USER
    ADMIN
  }

  type User {
    id: ID!
    name: String
    email: String
    phone: String
    role: Role
    department: Department
  }

  type Department {
    id: ID!
    title: String!
    user: User
  }
  input DepartmentInput {
    title: String!
    userId: String
    id: String
  }

  input RegisterInput {
    name: String!
    email: String!
    phone: String!
    password: String!
  }

  input UserId {
    id: String!
    role: Role
  }

  type Query {
    me: User!
    user(id: ID!): User!
    users: [User!]
    department(id: ID!): Department!
    departments: [Department!]
  }

  type Mutation {
    newUser(input: RegisterInput): User
    assignRole(input: UserId): User!
    newDepartment(input: DepartmentInput): Department!
    assignDepartment(input: DepartmentInput): Department!
    login(email: String!, password: String!): String!
  }
`
