import styled from "styled-components";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(186, 187, 187);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(240, 255, 255);
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem>
              <LineStyle
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Home
            </ListItem>
            <ListItem>
              <Timeline
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Timeline
            </ListItem>
            <ListItem>
              <TrendingUp
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Trend
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem>
              <LineStyle
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Home
            </ListItem>
            <ListItem>
              <Timeline
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Timeline
            </ListItem>
            <ListItem>
              <TrendingUp
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Trend
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem>
              <LineStyle
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Home
            </ListItem>
            <ListItem>
              <Timeline
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Timeline
            </ListItem>
            <ListItem>
              <TrendingUp
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Trend
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem>
              <LineStyle
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Home
            </ListItem>
            <ListItem>
              <Timeline
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Users
            </ListItem>
            <ListItem>
              <TrendingUp
                style={{ marginRight: "5px", fontSize: "20px !important" }}
              />
              Products
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
