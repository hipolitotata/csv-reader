import { use, useCallback, useEffect, useState } from "react";

import api from "../services/api";
import { isAxiosError } from "axios";
import { IUseUsers, User } from "@/types";

import { useDebounce } from "usehooks-ts";

export default function useUsers({ isLoading }: IUseUsers) {
  const [listUsers, setListUsers] = useState<User[]>();
  const [searchListUsers, setSearchListUsers] = useState<User[]>();
  const [search, setSearch] = useState("");
  const [field, setField] = useState("name");

  const debounceSearch = useDebounce<string>(search, 500);
  const debounceField = useDebounce<string>(field, 500);

  const filterOptions = [
    {
      field: "name",
      onClick: () => setField("name"),
      label: "Name",
    },
    {
      field: "city",
      onClick: () => setField("city"),
      label: "City",
    },
    {
      field: "country",
      onClick: () => setField("country"),
      label: "Country",
    },
    {
      field: "favorite_sport",
      onClick: () => setField("favorite_sport"),
      label: "Favorite Sport",
    },
  ];

  const getUsers = useCallback(async () => {
    try {
      const { data } = await api.get("/api/users");
      if (data) {
        setListUsers(data);
      }
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err, err.response);
      }

      console.log(err);
    }
  }, [isLoading]);

  const handleSearch = async (search: string) => {
    try {
      const { data } = await api.get(`/api/users?${field}=${search}`);
      setSearchListUsers(data);
    } catch (err) {
      if (isAxiosError(err)) {
        console.log(err, err.response);
      }

      console.log(err);
    }
  };

  const handleSearchText = (search: string) => {
    setSearch(search);
  };

  const _listUsers = search ? searchListUsers : listUsers;

  useEffect(() => {
    if (!isLoading) {
      getUsers();
    }
  }, [isLoading]);

  useEffect(() => {
    handleSearch(search);
  }, [debounceSearch, debounceField]);

  return {
    searchText: search,
    listUsers: _listUsers,
    handleSearch: handleSearchText,
    filterOptions,
  };
}
