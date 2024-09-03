const api = {
    async buscarPensamentos() { //requisição para buscar lista de pensamentos
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamentos!')
            throw error
        }
    },

    async salvarPensamento(pensamento) { //requisição para salvar pensamento
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        } catch {
            alert('Erro ao salvar pensamento')
            throw error
        }
    },

    async buscarPensamentoPorId(id) { //requisição para buscar pensamento específico;
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
            return await response.json()
        } catch {
            alert('Erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamento(pensamento) { //requisição para editar pensamento específico;
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        } catch {
            alert('Erro ao aditar pensamento')
            throw error
        }
    }
}

export default api;