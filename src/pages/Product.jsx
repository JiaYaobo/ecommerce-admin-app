import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import styled from "styled-components";
import { productData } from "../dummyData";
import { Publish } from "@material-ui/icons";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.h1``;

const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const Top = styled.div`
  display: flex;
`;

const TopLeft = styled.div`
  flex: 1;
`;

const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const InfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const InfoBottom = styled.div`
  margin-top: 10px;
`;

const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const InfoKey = styled.span``;

const InfoValue = styled.span`
  font-weight: 300;
`;

const Bottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;

const Options = styled.option``;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Upload = styled.div`
  display: flex;
  align-items: center;
`;

const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Product = () => {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle></ProductTitle>
        <ProductAddButton></ProductAddButton>
      </ProductTitleContainer>
      <Top>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <Name></Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey></InfoKey>
              <InfoValue></InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey></InfoKey>
              <InfoValue></InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey></InfoKey>
              <InfoValue></InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <FormLabel></FormLabel>
            <FormInput type="text" placeholder="Apple AirPod" />
            <FormLabel></FormLabel>
            <Select id="idStock" name="idStock">
              <Options></Options>
              <Options></Options>
            </Select>
            <FormLabel></FormLabel>
            <Select id="active" name="active">
              <Options></Options>
              <Options></Options>
            </Select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
              <FormLabel for="file">
                <Publish />
              </FormLabel>
              <FormInput type="file" id="file" style={{ display: "none" }} />
            </Upload>
            <Button>Update</Button>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  );
};

export default Product;
