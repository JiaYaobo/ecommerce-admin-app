import styled from "styled-components";

const NewUser = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </NewUserItem>
        <NewUserItem>
          <label>Full name</label>
          <input type="text" placeholder="john what" />
        </NewUserItem>
        <NewUserItem>
          <label>Username</label>
          <input type="email" placeholder="john@john.com" />
        </NewUserItem>
        <NewUserItem>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <label>Phone</label>
          <input type="text" placeholder="18888888" />
        </NewUserItem>
        <NewUserItem>
          <label>Address</label>
          <input type="text" placeholder="Beijing RUC" />
        </NewUserItem>
        <NewUserItem>
          <label>Gender</label>
          <NewUserGender>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </NewUserItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  );
};

export default NewUser;
