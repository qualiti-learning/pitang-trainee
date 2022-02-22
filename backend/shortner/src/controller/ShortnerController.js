class ShortnerController {
    getOne(request, response) {
        // Verificar se o shortner existe

        response.json({ message: "Ok!" })
    }

    index(request, response) {
        response.json({ message: "Ok!" })
    }

    remove(request, response) {
        // Verificar se o shortner existe

        response.json({ message: "Ok!" })
    }

    store(request, response) {
        response.json({ message: "Ok!" })
    }

    update(request, response) {
        // Verificar se o shortner existe

        response.json({ message: "Ok!" })
    }

    redirect(request, response) {
        // buscar o shortner a partir do hash

        // pegar o link original e redirecionar

        // adicionar hits +1

        response.redirect("https://google.com")
    }
}

export default ShortnerController;