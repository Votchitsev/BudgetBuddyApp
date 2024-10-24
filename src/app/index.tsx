import styled from "styled-components/native";
import { router } from "expo-router";
import {
  PageContentLayout,
  HalfCardsContainer,
  HalfCard,
  FullCard,
} from "@shared/ui";

export default function Home() {
  return (
    <PageContentLayout>
      <HalfCardsContainer>
        <HalfCard
          title="Бюджет"
          value="100 000"
          onPress={() => router.push("/budget")}
        />
        <HalfCard title="Расходы" value="45 000" onPress={() => {}} />
      </HalfCardsContainer>
      <DailyExpFullCard title="Сегодня можно потратить" value="1 050" />
    </PageContentLayout>
  );
}

const DailyExpFullCard = styled(FullCard)`
  margin-top: 20px;
`;
