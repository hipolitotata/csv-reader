import React from "react";

import UploadCsv from "@/components/upload-csv";
import ListUsers from "@/components/list-users";
import useUpload from "@/hooks/useUpload";
import useUsers from "@/hooks/useUsers";
import { CustomBody, CustomContainer } from "@/styles/globalStyles";

export default function UploadPage() {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isLoading,
  } = useUpload();

  const { listUsers, handleSearch, searchText, filterOptions } = useUsers({
    isLoading,
  });

  return (
    <CustomBody>
      <CustomContainer>
        <UploadCsv
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
          isDragAccept={isDragAccept}
          isDragReject={isDragReject}
          isLoading={isLoading}
        />

        <ListUsers
          filterOptions={filterOptions}
          searchText={searchText}
          handleSearch={handleSearch}
          listUsers={listUsers}
        />
      </CustomContainer>
    </CustomBody>
  );
}
