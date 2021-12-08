import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useSelector } from "react-redux";

const Container = styled.div`
  flex: 4;
`;

const ProductListItem = styled.div`
  display: flex;
  align-items: center;
`;

const ProductListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const { currentUser } = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await publicRequest.get(
      `/product/products/store/${currentUser.user_id}`
    );
    const prods_data = await res.data;
    for (let i = 0; i < prods_data.length; i++) {
      prods_data[i].id = prods_data[i]["goods_id"];
      delete prods_data[i].key1;
    }
    setProducts([...prods_data]);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    loadProducts();
  }, []);
  const columns = [
    { field: "goods_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListItem>
            <ProductListImg src={params.row.goods_image} alt="" />
            {params.row.goods_name}
          </ProductListItem>
        );
      },
    },
    { field: "id", headerName: "Stock", width: 200 },
    {
      field: "goods_status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "goods_price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ProductListEdit>Edit</ProductListEdit>
            </Link>
            <DeleteOutline
              style={{ color: "red", curor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
