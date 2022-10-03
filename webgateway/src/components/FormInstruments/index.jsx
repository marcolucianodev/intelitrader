import { Button, FormContainer, Input } from "./styles";

const FormInstruments = ({handleInstruments, text, getData}) => {
  return (
    <FormContainer>
      <Input 
        type="text"
        placeholder="Insira o código"
        onChange={handleInstruments}
        value={text}
      />
      <Button onClick={getData}>Inserir</Button>
    </FormContainer>
    // <section className="form">
    //   <div className="form-container">
    //     <div className="input-area">
    //       <label htmlFor="symbol">Symbol</label>
    //       <input
    //         type="text"
    //         placeholder="Adicione os dados"
    //         id="symbol"
    //       />
    //     </div>
    //     <div className="input-area">
    //       <label htmlFor="trade-count">TradeCount</label>
    //       <input
    //         type="text"
    //         placeholder="Adicione os dados"
    //         id="trade-count"
    //       />
    //     </div>
    //     <div className="input-area">
    //       <label htmlFor="channel">Channel</label>
    //       <input
    //         type="text"
    //         placeholder="Adicione os dados"
    //         id="channel"
    //       />
    //     </div>
    //     <div className="input-area">
    //       <label htmlFor="request-count">RequestCount</label>
    //       <input
    //         type="text"
    //         placeholder="Adicione os dados"
    //         id="request-count"
    //       />
    //     </div>
    //   </div>
    //   <button onClick={addDados}>+ Adicionar</button>
    // </section>
  )
}

export default FormInstruments;