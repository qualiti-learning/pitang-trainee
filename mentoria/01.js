const axios = require("axios");
const myAxios = axios.default.create();

const myCep = 999999;

(async () => {
  const getCep = async (cep) => {
    try {
      const { data } = await myAxios.get(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      if (data.erro) {
        throw new Error("CEP Inexistente");
      }

      return data;
    } catch (error) {
      throw new Error(
        error.message === "CEP Inexistente"
          ? `O CEP ${cep} não foi encontrado... tente outro`
          : `Erro ao acessar este CEP ${cep}`
      );
    }
  };

  const result = await getCep(myCep);

  console.log({ result });
})();
