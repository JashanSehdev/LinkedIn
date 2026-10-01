"use client";
import { IconButton } from "@mui/material";
import { CldUploadWidget } from "next-cloudinary";
import { FieldPath, FieldValues, UseFormSetValue } from "react-hook-form";
import { Inputs } from "../create-post/create-post";
import ImageIcon from "@mui/icons-material/Image";
import EditIcon from "@mui/icons-material/Edit";

type Prop<TFieldValues extends FieldValues> = {
  readonly setValue: UseFormSetValue<TFieldValues>;
  readonly fieldName: FieldPath<TFieldValues>;
};
export default function CloudinaryUploader<TFieldValues extends FieldValues>({ setValue, fieldName }: Prop<TFieldValues>) {
  const handleSuccess = (result) => {
    console.log("Uploaded:", result.info.secure_url);
    setValue(fieldName, result.info.secure_url, { shouldValidate: true });
  };

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
      onSuccess={handleSuccess}
    >
      {({ open }) => (
        <IconButton type="button" onClick={() => open()}>
          <ImageIcon />
        </IconButton>
      )}
    </CldUploadWidget>
  );
}
