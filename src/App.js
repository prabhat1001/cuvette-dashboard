import React from 'react';
import './App.css';
import styled from 'styled-components';

import NavBar from './Components/NavBar';
import Sidebar from './Components/Side Bar/SideBar';
import SkillTest from './Components/Skill Test/SkillTest';

function App() {
  return (
    <ContainerWrapper>
      <NavBar />

      <Container>
        <Sidebar />
        <SkillTest />
      </Container>
      
    </ContainerWrapper>
    
  );
}

const ContainerWrapper = styled.div`
`;

const Container = styled.div`
  display: flex;
`;

export default App;
