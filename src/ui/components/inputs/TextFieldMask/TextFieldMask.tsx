import React from 'react';
import InputMask from 'react-input-mask';
import TextField from 'ui/components/inputs/TextField/TextField';
import {OutlinedTextFieldProps} from '@material-ui/core';

export interface TextFieldMaskProps extends OutlinedTextFieldProps { //pega todas as propriedades q a gnt ja declarou
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({mask, ...props}) => {
  //o props recebe as propriedades q a gnt colocou no index, como label, width etc
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextField{...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
