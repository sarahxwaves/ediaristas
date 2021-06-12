import { experimentalStyled as styled } from "@material-ui/core/styles";
import {Paper} from '@material-ui/core';

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)}; //0 em cima e na lateral automatico
`;

export const ProfissionaisPaper = styled(Paper)`
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(7)};

   ${({ theme }) => theme.breakpoints.down('md')}{
      &.MuiPaper-root{
        padding: 0;
        box-shadow: none;
      }
  }
`;

export const ProfissionaisContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    // qdo a tela estiver num tamanho acima de medio, ele vai fazer isso
    grid-template-columns: repeat(2, 1fr); // 2 colunas de 1 fração
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(odd){ // pega todos os odd (impar)
        background-color: ${({ theme }) => theme.palette.background.paper};
  }
  } 
`;