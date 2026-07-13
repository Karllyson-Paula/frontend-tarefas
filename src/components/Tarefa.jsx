function Tarefa({ titulo, concluida, onToggle, onDeletar }) {
  return (
    <div>
      <span>{titulo}</span>
      <span>{concluida ? '✅' : '⏳'}</span>
      <button onClick={onToggle}>
        {concluida ? 'Desmarcar' : 'Concluir'}
      </button>
      <button onClick={onDeletar} style={{ color: 'red' }}>
        Deletar
      </button>
    </div>
  )
}

export default Tarefa