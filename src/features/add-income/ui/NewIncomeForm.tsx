import styled from "styled-components/native";
import { Button, Input } from "@shared/ui";
import { colors } from "@shared/style";

const NewIncomeForm = () => {
  return (
    <Container behavior="padding">
      <Input
        placeholder="Название"
        placeholderTextColor={colors.third}
        selectionColor={"#fff"}
        autoFocus
      />
      <Input
        placeholder="Сумма"
        placeholderTextColor={colors.third}
        keyboardType="number-pad"
        selectionColor={"#fff"}
      />
      <Button label="Сохранить" />
    </Container>
  );
};

const Container = styled.KeyboardAvoidingView`
  margin-top: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default NewIncomeForm;
