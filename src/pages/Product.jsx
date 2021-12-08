import Chart from "../components/Chart";
import styled from "styled-components";
import { productData } from "../dummyData";
import { Publish } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { publicRequest } from "../requestMethods";

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
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await publicRequest.get(`/product/${params.productId}`);
      const data = await res.data;
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>{product?.goods_name}</ProductTitle>
        <ProductAddButton>ADD + </ProductAddButton>
      </ProductTitleContainer>
      <Top>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImg src={product?.goods_image} />
            <Name>{product?.goods_name}</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey>id</InfoKey>
              <InfoValue>{product?.goods_id}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>current price</InfoKey>
              <InfoValue>{product?.goods_price}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>current status</InfoKey>
              <InfoValue>
                {product?.goods_status === 1 ? "on sale" : "not sale"}
              </InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" placeholder={product?.goods_name} />
            <FormLabel>Price</FormLabel>
            <FormInput type="number" placeholder={product?.goods_price} />
            <FormLabel>Status</FormLabel>
            <Select id="active" name="active">
              <Options>0</Options>
              <Options>1</Options>
            </Select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImg src={product?.goods_image} />
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
