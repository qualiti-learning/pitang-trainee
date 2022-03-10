function sum(a: number, b: number) {
    return a + b
}

function aleatory<T = any>(abc: any): T {
    return abc
}

aleatory<Country>("test").name

interface Country {
    name: string;
    region?: string;
}

interface User {
    name: string;
    age: number;
    country: Country | Country[];
}

async function getUser(): Promise<User> {
    return {
        name: "Kven",
        age: 24,
        country: { name: "Brazil" }
    }
}

getUser()

const user: User = {
    name: "Keven",
    age: 25,
    country: {
        name: "Brazil",
    }
}

// console.log(sum(1, "keven"))