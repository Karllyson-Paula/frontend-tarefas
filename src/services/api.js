const BASE_URL = import.meta.env.VITE_API_URL

export const api = {
    async cadastrar(nome, email, senha) {
        const res = await fetch(`${BASE_URL}/auth/cadastro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        })
        return res.json()
    },

    async login(email, senha) {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        })
        return res.json()
    },

    async getTarefas(token) {
        const res = await fetch(`${BASE_URL}/tarefas`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        return res.json()
    } ,

    async criarTarefa(titulo, token) {
        const res = await fetch(`${BASE_URL}/tarefas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ titulo })
        })
        return res.json()
    },

    async deletarTarefa(id, token) {
        await fetch(`${BASE_URL}/tarefas/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}`}
        })
    },


    async atualizarTarefa(id, dados, token) {
        const res = await fetch(`${BASE_URL}/tarefas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dados)
        })
        return res.json()
    }
}