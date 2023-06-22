import { IUploadCsv } from "@/types";
import React from "react";
import { ContainerUpload, DivUpload, SubTitle, Title } from "./styles";

export default function UploadCsv({
  getRootProps,
  getInputProps,
  isDragActive,
  isDragAccept,
  isDragReject,
  isLoading,
}: IUploadCsv) {
  return (
    <ContainerUpload>
      {isLoading && (
        <>
          <Title>Loading...</Title>
          <SubTitle>One moment, we are processing your data....</SubTitle>
        </>
      )}

      {!isLoading && (
        <>
          <Title>Upload your CSV file</Title>
          <SubTitle>
            Please upload your CSV file here. Only files with the extension .csv
            are accepted.
          </SubTitle>
          <DivUpload
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            {...getRootProps({ className: "dropzone" })}
          >
            <input {...getInputProps()} />

            {isDragAccept && <p>Great ! This file can be uploaded</p>}
            {isDragReject && (
              <p>
                We don't accepted this type of file, please upload a CSV file
              </p>
            )}
            {!isDragActive && (
              <p>Drag 'n' drop your csv file, or click to select the file</p>
            )}
          </DivUpload>
        </>
      )}
    </ContainerUpload>
  );
}
