# apollo-authentication-authorization.

## Installation

```sh

git clone https://github.com/neuralline/apollo-authentication-authorization.git

# mongoDB required


npm install then npm run dev
#or
yarn install then yarn dev

#then
http://localhost:4000/


```

### example query

```js
mutation newUser{
  newUser(input:{name:"more",email:"more@mail.com",phone:"532132132", password:"abc"}){
    id
    name
    email
    phone
    role
  }
}

mutation newRole{
  assignRole(input:{id:"60012eff2db32001bc0fa5aa", role:ADMIN}){
    id
    role
  }
}
mutation login{
  login(email:"gg@mail.com", password:"abc")
}

query users{
  users{
    name
    id,
    role
    phone
    email

  }
}

query user{
  user(id:"60012e2edf1e5a163cb1d975"){
    name
    id,
    role,phone
  }
}
query me{
  me{
    id
    name
    role
    email
  }
}

```

```sh

2021 new years eve project
Happy new Year, Merry Christmas and Happy Holidays
Darik.

```
