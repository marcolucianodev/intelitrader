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
  )
}

export default FormInstruments;