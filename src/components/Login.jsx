import { useState } from "react"
import { api } from '../services/api'

function Login({ onLogin }) {
  const [aba, setAba] = useState('login')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErro('')

    const res = await api.login(email, senha)

    if (res.token) {
      onLogin(res.token)
    } else {
      setErro(res.erro || 'Erro ao fazer login')
    }

    setLoading(false)
  }

  const handleCadastro = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErro('')

    const res = await api.cadastrar(nome, email, senha)

    if (res.id) {
      // cadastrou com sucesso — faz login automático
      const loginRes = await api.login(email, senha)
      if (loginRes.token) {
        onLogin(loginRes.token)
      }
    } else {
      setErro(res.erro || 'Erro ao cadastrar')
    }

    setLoading(false)
  }

  return (
    <div>
      <h2>{aba === 'login' ? 'Login' : 'Cadastro'}</h2>

      <button onClick={() => setAba('login')}>Login</button>
      <button onClick={() => setAba('cadastro')}>Cadastro</button>

      <form onSubmit={aba === 'login' ? handleLogin : handleCadastro}>
        {aba === 'cadastro' && (
          <div>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </div>
        )}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </div>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Aguarde...' : aba === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}

export default Login