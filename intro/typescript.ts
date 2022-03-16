enum Abc {
    TEST = 'test',
    USER = 'user'
}

interface Student {
    id: number,
}

interface User extends Student {
    bornYear: number,
    email: string,
    name?: string,
}

interface Person {
    firstName: string;
    lastName: string;
}

interface APIResponse<T = any> {
    pageSize: number;
    page: number;
    totalCount: number;
    keywords: string;
    items: T[]
}

const response: APIResponse<Person> = {
    totalCount: 10,
    pageSize: 10,
    page: 1,
    keywords: "",
    items: [
        {
          firstName: "keven",
          lastName: "leone"
        }
    ]
}

// type Student = {
//     id: number
//  }

//  type User = {
//      bornYear: number;
//      email: string;
//      name?: string; 
//  } & Student

function getUser(): User {
    return {
        id: 123,
        bornYear: 123,
        email: "keven.santos123"
    }
}

function setUser(user: User) {
    if (!user.name) {
        return;
    }

    user.name.toUpperCase()

    console.log(user)
}

function sum(a: number, b: number) {
    const total = a + b

    console.log(total)

    return total
}

const username = 'keven'

let emails: string[];

emails = ['keven']
sum(1, 1)