const age = 5;

if (age < 18) {
  console.log("Menor de idade...");
} else if (age >= 18 && age <= 50) {
  console.log("Maior de idade...");
} else {
  console.log("Idoso...");
}

const food = "Pizza";

switch (food) {
  case "Pizza": {
    console.log("Comendo Pizza...");
    break;
  }

  case "Lasanha": {
    console.log("Comendo Lasanha...");
    break;
  }

  case "Macarrão": {
    console.log("Comendo Macarrão...");
    break;
  }

  default: {
    console.log(`Comida... ${food} não existe`);
  }
}

const foodMessage = {
  Pizza: "Comendo Pizza...",
  Lasanha: "Comendo Lasanha...",
  Macarrao: "Comendo Macarrao...",
};

console.log(foodMessage[food] || `Comida ${food} não existe...`);
