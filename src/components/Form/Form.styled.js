import { styled } from 'styled-components';

export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const RadioLabel = styled.label`
  display: flex;
  gap: 8px;
  user-select: none;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
`;
