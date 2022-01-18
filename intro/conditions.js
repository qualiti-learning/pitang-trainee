// IF ELSE IF ELSE

const age = 8;

if (age < 18) {
  console.log("Menor de idade");
} else if (age >= 18 && age <= 50) {
  console.log("Maior de idade...");
} else {
  console.log("Idoso...");
}

if (age < 18 || (age > 50 && taChovendo)) {
  console.log("Brinquedo não acessível para sua idade...");
}

const food = "ojqiowejqioweoiqw";

switch (food) {
  case "Pizza": {
    console.log("Comendo Pizza... 8 fatias...");
    break;
  }

  case "Lasanha": {
    console.log("Comendo Lasanha ...");
    break;
  }

  default: {
    console.log(`Comendo ${food}...`);
  }
}

// Opção usando Object

const messages = {
  Pizza: "Comendo Pizza... 8 fatias...",
  Lasanha: "Comendo Lasanha...",
};

console.log(messages[food] || `Comendo ${food}`);
