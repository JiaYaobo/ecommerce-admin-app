import { useParams } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const Vip = () => {
  const params = useParams();

  return <Container></Container>;
};

export default Vip;
