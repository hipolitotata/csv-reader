import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";

export interface IListUsers {
  listUsers?: User[];
  handleSearch: (search: string) => void;
  searchText: string;
  filterOptions: {
    field: string;
    onClick: () => void;
    label: string;
  }[];
}

export interface IUploadCsv {
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
  getRootProps: (params: any) => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
  isLoading: boolean;
}

export interface FormatedFiled {
  file: any;
  name: string;
  size: number;
  preview: string;
  url: string | null;
}

export interface User {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
  _id: string;
  __v: number;
}

export interface IUseUsers {
  isLoading: boolean;
}

export interface IDivUpload {
  isDragReject: boolean;
  isDragActive: boolean;
}
