import { useModalStore } from "@shared/store";
import { colors } from "@shared/style";
import { PageContentLayout } from "@shared/ui";
import { SimpleTable } from "@widgets/simple-table";
import styled from "styled-components/native";
import { NewIncomeForm } from "@features/add-income";

const BudgetPage = () => {
  const setModalContent = useModalStore((state) => state.setModalContent);

  return (
    <PageContentLayout>
      <SimpleTable
        title="Доходы"
        buttonAction={() =>
          setModalContent(<NewIncomeForm />, "Добавить доход")
        }
      />
      <SimpleTable title="Расходы" />
      <TotalRow>
        <TotalKey>Нераспределенные расходы</TotalKey>
        <TotalValue>100 000 ₽</TotalValue>
      </TotalRow>
      <Line />
      <TotalRow>
        <TotalKey>Можно тратить в день</TotalKey>
        <TotalValue>1 000 ₽</TotalValue>
      </TotalRow>
      <Line />
    </PageContentLayout>
  );
};

export default BudgetPage;

const TotalRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid #fff;
`;

const TotalKey = styled.Text`
  flex: 3;
  color: ${colors.third};
  font-size: 18px;
  font-family: "JosefinSans_700Bold";
`;

const TotalValue = styled.Text`
  flex: auto;
  color: ${colors.third};
  font-size: 18px;
  font-family: "JosefinSans_700Bold";
  text-align: right;
  align-self: flex-end;
`;

const Line = styled.View`
  height: 1px;
  background-color: ${colors.third};
  margin-top: 15px;
  margin-bottom: 15px;
`;
