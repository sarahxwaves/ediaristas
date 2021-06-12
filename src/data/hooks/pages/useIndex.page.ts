import { useState, useMemo } from "react"; //useMemo é pra manter uma funcao sem ficar recalculando ela desnecessariamente
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
  //pra pegar o CEP do index
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]), //variaveis que o Memo depende p ser executado
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false), // nao tem pq mostrar a lista se ngm realizou uma busca
    [carregando, setCarregando] = useState(false), // pra aparecer uma tela de carregando qdo o usuario buscar algo e ele n ficar lcicando no botao igual doido
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiatistasRestantes] = useState(0); // um array de diaristas com os parametros importados de UserShortInterface

  return {
    cep,
    setCep,
    cepValido,
  };
}
