import { styled } from "styled-components";

export const Title = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #404040;
  font-size: 24px;
`;

export const SubTitle = styled.p`
  margin-bottom: 20px;
  max-width: 300px;
  color: #bfbfbf;
  font-weight: bold;
  line-height: 1.4;
  font-size: 15px;
`;

export const ContainerUsers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #cfcfcf;
`;

export const ListUserUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 300px;
  overflow-y: auto;
`;

export const UserItem = styled.li`
  list-style: none;
  box-shadow: 0px 0px 5px 0px rgba(184, 184, 184, 1);
  padding: 10px;
  border-radius: 7px;
  margin: 10px;
  width: 20%;
  min-width: 180px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(156, 156, 156, 1);
    transition: 0.2s;
  }
`;

export const UserImage = styled.img`
  max-width: 100px;
`;

export const UserName = styled.h5`
  font-size: 20px;
`;

export const UserContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #cfcfcf;
`;

export const UserLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  margin-top: 10px;
`;

export const UserLocationImage = styled.img`
  width: 15px;
`;

export const UserLocationText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
`;

export const SearchBarContainer = styled.label`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: text;
  border: 2px solid #adadad;
  padding: 5px;
  border-radius: 20px;
  padding: 8px;
  margin: 10px 0;
`;

export const SearchBarIcon = styled.img`
  width: 5%;
  max-width: 20px;
`;

export const SearchBarField = styled.input`
  border: 0;
  width: 90%;
  font-size: 1rem;
  text-align: left;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const FilterOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const FilterOptionsText = styled.h4`
  margin-bottom: 15px;
  font-size: 18px;
  color: #404040;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  label {
    margin-left: 15px;
    cursor: pointer;
    color: #404040;
  }

  label span {
    margin-left: 5px;
    color: #404040;
  }
`;
