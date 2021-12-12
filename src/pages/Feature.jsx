import styled from "styled-components";
import { Rating } from "@material-ui/lab";

const Container = styled.div`
  flex: 4;
`;

const HotSales = styled.div``;

const HotSalesItem = styled.div``;

const Rank = styled.span;

const HotSalesImg = styled.img``;

const HotSalesName = styled.span``;

const Feature = () => {
  return (
    <Container>
      <HotSales>
        <HotSalesItem>
          <Rank>1</Rank>
          <HotSalesImg />
          <HotSalesName>name1</HotSalesName>
        </HotSalesItem>
        <HotSalesItem>
          <Rank>2</Rank>
          <HotSalesImg />
          <HotSalesName>name2</HotSalesName>
        </HotSalesItem>
        <HotSalesItem>
          <Rank>3</Rank>
          <HotSalesImg />
          <HotSalesName>name3</HotSalesName>
        </HotSalesItem>
      </HotSales>
      <StoreRating>
        <Rating />
      </StoreRating>
    </Container>
  );
};

export default Feature;
