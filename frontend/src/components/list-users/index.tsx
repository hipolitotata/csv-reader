import { IListUsers } from "@/types";
import React, { ReactNode } from "react";

import {
  ContainerUsers,
  ListUserUl,
  Title,
  SubTitle,
  UserContent,
  UserImage,
  UserItem,
  UserLocation,
  UserLocationImage,
  UserLocationText,
  UserName,
  SearchBarContainer,
  SearchBarField,
  SearchBarIcon,
  FilterOptions,
  FilterOptionsContainer,
  FilterOptionsText,
} from "./styles";

export default function ListUsers({
  listUsers,
  handleSearch,
  searchText,
  filterOptions,
}: IListUsers) {
  return (
    <ContainerUsers>
      <Title>Users List</Title>

      <SearchBarContainer htmlFor="search-input">
        <SearchBarIcon src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" />
        <SearchBarField
          key="search-input"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            handleSearch(e.target.value);
          }}
          placeholder="Search for users..."
          id="search-input"
          name="searchBar"
          value={searchText}
        />
      </SearchBarContainer>

      <FilterOptionsContainer>
        <FilterOptionsText>Filter by:</FilterOptionsText>
        <FilterOptions>
          {filterOptions?.map((item, key) => (
            <label htmlFor={`${key.toString()}-${item.field}`} key={key}>
              <input
                defaultChecked={key === 0}
                id={`${key.toString()}-${item.field}`}
                type="radio"
                onClick={item.onClick}
                value={item.field}
                name="field"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </FilterOptions>
      </FilterOptionsContainer>

      {!listUsers || listUsers?.length === 0 && !searchText && (
        <ContainerUsers>
          <SubTitle>
            After you have uploaded the file, the list of users will be
            displayed here.
          </SubTitle>

          <img
            src="https://clipart-library.com/images/8czKMEXMi.png"
            width={50}
          />
          <b>No user has been added yet</b>
        </ContainerUsers>
      )}

      {listUsers?.length === 0 && searchText && (
        <ContainerUsers>
          <img
            src="https://clipart-library.com/images/8czKMEXMi.png"
            width={50}
          />
          <b>No results.</b>
        </ContainerUsers>
      )}

      {listUsers?.length !== 0 && (
        <ListUserUl className="list-users">
          {listUsers?.map((user, key) => (
            <UserItem key={key}>
              <UserImage src="https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_people_person_profile_student_user_icon_123383.png" />

              <UserContent className="userContent">
                <UserName className="userName">{user.name}</UserName>

                <UserLocation className="userSport">
                  <UserLocationImage src="https://gifs.eco.br/wp-content/uploads/2023/02/imagens-de-bola-de-futebol-png-0.png" />
                  <UserLocationText className="userSportLabel">
                    Favorite Sport: {user.favorite_sport}
                  </UserLocationText>
                </UserLocation>

                <UserLocation className="userLocation">
                  <UserLocationImage src="https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png" />
                  <UserLocationText className="userLocationText">
                    {user.city} - {user.country}
                  </UserLocationText>
                </UserLocation>
              </UserContent>
            </UserItem>
          ))}
        </ListUserUl>
      )}
    </ContainerUsers>
  );
}
