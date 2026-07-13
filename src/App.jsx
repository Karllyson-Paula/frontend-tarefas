import { useEffect, useState } from "react"
import { api } from './services/api'
import Tarefa from "./components/Tarefa"
import Header from "./components/Header"
import Login from "./components/Login"

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(false)
  const [novaTarefa, setNovaTarefa] = useState('')

  useEffect(() => {
    if (token) {
      carregarTarefas()
    }
  }, [token])

  const carregarTarefas = async () => {
    setLoading(true)
    const dados = await api.getTarefas(token)
    setTarefas(dados)
    setLoading(false)
  }

  const handleLogin = (novoToken) => {
    localStorage.setItem('token', novoToken)
    setToken(novoToken)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setTarefas([])
  }

  const toggleTarefa = async (id, concluida) => {
    await api.atualizarTarefa(id, { concluida: !concluida }, token)
    carregarTarefas()
  }

  const handleCriar = async (e) => {
    e.preventDefault()
    if (!novaTarefa.trim()) return
    await api.criarTarefa(novaTarefa, token)
    setNovaTarefa('')
    carregarTarefas()
  }

  const handleDeletar = async (id) => {
    await api.deletarTarefa(id, token)
    carregarTarefas()
  }

  const concluidas = tarefas.filter(t => t.concluida)

  if (!token) {
    return <Login onLogin={handleLogin} />
  }

  if (loading) {
    return <div>Carregando tarefas...</div>
  }

  return (
    <div>
      <Header titulo='Minhas Tarefas' />
      <button onClick={handleLogout}>Sair</button>
      <p>{concluidas.length} de {tarefas.length} tarefas concluídas</p>

      <form onSubmit={handleCriar}>
        <input
          placeholder="Nova tarefa..."
          value={novaTarefa}
          onChange={e => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {tarefas.map(tarefa => (
        <Tarefa
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
          onToggle={() => toggleTarefa(tarefa.id, tarefa.concluida)}
          onDeletar={() => handleDeletar(tarefa.id)}
        />
      ))}
    </div>
  )
}

export default App