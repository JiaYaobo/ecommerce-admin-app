import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";


const Container = styled.div`
display: flex;
margin: 10px;
`;


function App() {
  return (
    <>
      <Topbar/>
      <Container>
        <Sidebar/>
        <Home/>
      </Container>
    </>
  );
}

export default App;
