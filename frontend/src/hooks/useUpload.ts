import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import api from "../services/api";
import { isAxiosError } from "axios";
import { FormatedFiled } from "@/types";

export default function useUpload() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function getExtension(filename: string) {
    return filename?.split(".").pop() || "";
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file?.name) return;
    else if (
      file &&
      file.name &&
      getExtension(file?.name).toLowerCase() === "csv"
    ) {
      let newFile;

      newFile = {
        file,
        name: file.name,
        size: file.size,
        preview: URL.createObjectURL(file),
        url: null,
      };

      await uploadImage(newFile);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "text/csv": [".csv"],
    },
  });

  async function uploadImage(uploadedFile: FormatedFiled) {
    const data = new FormData();

    data.append("usersCsv", uploadedFile.file, uploadedFile.name);

    try {
      setIsLoading(true);
      const response = await api.post("/api/files", data);
      alert("Data loaded with success !!!")
    } catch (err) {
      if (isAxiosError(err) && err.response?.data.message) {
        alert(err.response.data.message);
      }

      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isLoading,
  };
}
