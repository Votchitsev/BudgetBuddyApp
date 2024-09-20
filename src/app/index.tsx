import styled from "styled-components/native";
import { colors } from "@shared/style";
import { AccentButton, PageContentLayout } from "@shared/ui";
import { HalfCardsContainer, HalfCard } from "@shared/ui";

export default function Index() {
  return (
    <PageContentLayout>
      <HalfCardsContainer>
        <HalfCard title="Бюджет" value="100 000" onPress={() => {}} />
        <HalfCard title="Расходы" value="45 000" onPress={() => {}} />
      </HalfCardsContainer>
    </PageContentLayout>
  );
}
