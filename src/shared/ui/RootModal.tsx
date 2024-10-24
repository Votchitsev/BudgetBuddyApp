import { colors } from "@shared/style";
import { useModalStore } from "../store";
import { Modal } from "react-native";
import styled from "styled-components/native";

const RootModal = () => {
  const modalContent = useModalStore((state) => state.modalContent);
  const clearModal = useModalStore((state) => state.clearModalContent);

  return (
    <Modal
      visible={!!modalContent}
      animationType="slide"
      presentationStyle="pageSheet"
      onPointerDown={() => clearModal()}
    >
      <Container>
        <TopContainer>
          <Title>
            <TitleText>{modalContent?.title}</TitleText>
          </Title>
          <CloseButton onPress={() => clearModal()}>
            <CloseButtonText>Закрыть</CloseButtonText>
          </CloseButton>
        </TopContainer>
        {modalContent?.content}
      </Container>
    </Modal>
  );
};

export default RootModal;

const Container = styled.View`
  flex: 1;
  background-color: ${colors.mainRGBA};
  padding: 5%;
  padding-top: 10%;
`;

const TopContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 15px;
`;

const CloseButtonText = styled.Text`
  color: ${colors.third};
  font-size: 15px;
  font-family: "JosefinSans_700Bold";
`;

const Title = styled.View`
  position: relative;
  align-tracks: center;
  justify-tracks: center;
  align-self: center;
  justify-self: center;
  /* width: 100%; */
  width: fit-content;
`;

const TitleText = styled.Text`
  color: ${colors.third};
  font-size: 18px;
  font-family: "JosefinSans_700Bold";
  /* text-align: center; */
  justify-content: center;
  width: fit-content;
`;
