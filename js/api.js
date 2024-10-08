const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos() { //requisição para buscar lista de pensamentos
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`)
            return await response.data
        } 
        catch {
            alert('Erro ao buscar pensamentos!')
            throw error
        }
    },

    async salvarPensamento(pensamento) { //requisição para salvar pensamento
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
            return await response.data
        } 
        catch {
            alert('Erro ao salvar pensamento')
            throw error
        }
    },

    async buscarPensamentoPorId(id) { //requisição para buscar pensamento específico;
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
            return await response.data
        } 
        catch {
            alert('Erro ao buscar pensamento')
            throw error
        }
    },

    async editarPensamento(pensamento) { //requisição para editar pensamento específico;
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
            return await response.data
        } 
        catch {
            alert('Erro ao aditar pensamento')
            throw error
        }
    },

    async excluirPensamento(id) { //requisição para excluir pensamento específico;
        try {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
        } 
        catch {
            alert('Erro ao excluir um pensamento')
            throw error
        }
    },

    async buscarPensamentosPorTermo(termo) {
        try {
            const pensamentos = await this.buscarPensamentos()
            const termoEmMinusculas = termo.toLowerCase()

            const pensamentosFiltrados = pensamentos.filter(pensamento => {
            return (pensamento.conteudo.toLowerCase().includes(termoEmMinusculas)) || pensamento.autoria.toLowerCase().includes(termoEmMinusculas)
            })
            return pensamentosFiltrados   
        } catch (error) {
            alert("Erro ao filtrar pensamentos")
            throw error
        }
    },

    async atualizarFavorito(id, favorito) {
        try {
            const response = await axios.patch(`${URL_BASE}/pensamentos/${id}`, { favorito })
            return response.data
        } catch (error) {
            alert("Erro ao atualizar favorito")
            throw error
        }
    }
}

export default api;