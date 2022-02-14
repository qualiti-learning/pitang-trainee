import crypto from "crypto";

// Usar Model do mongoose para usuário:

// Name, Email, Role: Administrator / User, Password, Created At, Modified At, Phones: 123, 123

export const users = [
  {
    id: crypto.randomUUID(),
    name: "Keven Leone",
    email: "keven123@hotmail.com",
  },
];
