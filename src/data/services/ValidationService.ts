export const ValidationService = {
  cep(cep = ""):boolean {
    /*usando expressões regulares para encontrar o padrao numa string
     \D é p procurar qualquer coisa que não é um numero. 
    o g é pra procurar globalmente, todos os numeros. 
    Ao achar algo diferente de um numero, substitua por uma string vazia
    retorna um boolean se ocupa todas as 8 posições
    */
    return cep.replace(/\D/g, "").length === 8;
  }

};
