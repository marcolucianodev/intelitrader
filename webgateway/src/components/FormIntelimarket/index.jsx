import "./styles.css";

const FormIntelimarket = ({addDados}) => {
  return (
    <section className="form">
      <div className="form-container">
        <div className="input-area">
          <label htmlFor="last-seq-num">LastSeqNum</label>
          <input
            type="text"
            placeholder="Adicione os dados"
            id="last-seq-num"
          />
        </div>
        <div className="input-area">
          <label htmlFor="messages-per-second">MessagesPerSecond</label>
          <input
            type="text"
            placeholder="Adicione os dados"
            id="messages-per-second"
          />
        </div>
        <div className="input-area">
          <label htmlFor="pid">PID</label>
          <input
            type="text"
            placeholder="Adicione os dados"
            id="pid"
          />
        </div>
        <div className="input-area">
          <label htmlFor="phase">Phase</label>
          <input
            type="text"
            placeholder="Adicione os dados"
            id="phase"
          />
        </div>
        <div className="input-area">
          <label htmlFor="queued-messages">QueuedMessages</label>
          <input
            type="text"
            placeholder="Adicione os dados"
            id="queued-messages"
          />
        </div>
      </div>
      <button onClick={addDados}>+ Adicionar</button>
    </section>
  )
}

export default FormIntelimarket;