import styled from "styled-components/native";
import { AccentButton } from "@shared/ui";
import { colors } from "@shared/style";

interface ITableEntry {
  id: number;
  title: string;
  value: number;
}

interface IProps {
  title: string;
  values?: ITableEntry[];
  emptyTableText?: string;
  buttonAction?: () => void;
}

const SimpleTable = ({
  title,
  values = [],
  emptyTableText = "записей нет",
  buttonAction = () => {},
}: IProps) => {
  return (
    <Container>
      <Head>
        <Title>{title}</Title>
        <AccentButton label="Добавить" onPress={buttonAction} />
      </Head>
      <Body>
        {values.length ? (
          values.map((value) => (
            <Row>
              <Key>{value.title}</Key>
              <Value>{value.value} ₽</Value>
            </Row>
          ))
        ) : (
          <Row>
            <Key>{emptyTableText}</Key>
          </Row>
        )}
      </Body>
      <Line />
      <Total>
        <TotalValue>ИТОГО: 100 000 ₽</TotalValue>
      </Total>
    </Container>
  );
};

export default SimpleTable;

const Container = styled.View`
  margin-top: 20px;
`;

const Head = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 22px;
  color: ${colors.third};
  font-family: "JosefinSans_700Bold";
`;

const Body = styled.View``;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  border-bottom: 1px solid #fff;
`;

const Key = styled.Text`
  flex: 3;
  color: #fff;
  font-size: 18px;
  font-family: "JosefinSans_400Regular";
`;

const Value = styled.Text`
  flex: auto;
  color: ${colors.third};
  font-size: 18px;
  font-family: "JosefinSans_700Bold";
  text-align: right;
  align-self: flex-end;
`;

const Total = styled.View`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 20px;
`;

const TotalValue = styled.Text`
  color: ${colors.third};
  font-size: 18px;
  font-family: "JosefinSans_700Bold";
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.thirdRGBA};
  margin-top: 20px;
`;
