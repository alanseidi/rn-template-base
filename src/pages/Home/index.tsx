import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from '../../global/styles/global';
import { PageContainer, Title } from './styles';

//TODO - exemplo de tipagem para usar o navigation com typescript
type NavigationProps = {
  navigate: (screen: string) => void;
};

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Container>
      <PageContainer>
        <Title>Home</Title>
      </PageContainer>
    </Container>
  );
};
export default Home;
