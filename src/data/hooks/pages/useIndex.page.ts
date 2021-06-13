import { useState, useMemo } from "react"; //useMemo é pra manter uma funcao sem ficar recalculando ela desnecessariamente
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

//hook

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

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
     const {data} = await ApiService.get<{
       diaristas: UserShortInterface[],
       quantidade_diaristas: number
     }>(
       "/api/diaristas-cidade?cep=" + cep.replace(/\D/g, "")); //await espera executar dps continua
      setDiaristas(data.diaristas);
      setDiatistasRestantes(data.quantidade_diaristas);

     
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro("CEP não encontrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes
  };
}
