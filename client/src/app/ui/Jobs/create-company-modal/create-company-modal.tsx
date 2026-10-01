"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormHelperText,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { companySchema, CreateCompany } from "./create-company-type";
import { FieldName, SubmitHandler, useForm } from "react-hook-form";
import CloudinaryUploader from "../../upload-widget/cloudinary-widget";
import { useAppDispatch } from "@/features/store";
import { createCompanyAsync } from "@/features/job/handle-job/job.action";
import { zodResolver } from "@hookform/resolvers/zod";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateCompanyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  const inputField: {
    type: string;
    placeholder: string;
    name: FieldName<CreateCompany>;
    label: string;
  }[] = [
    {
      name: "company_name",
      type: "text",
      placeholder: "eg: Flipkart",
      label: " Company Name",
    },
    {
      name: "category",
      type: "text",
      placeholder: "eg : IT solutions",
      label: "Category",
    },
    {
      name: "location",
      type: "text",
      placeholder: "eg: Bangalore, Pune",
      label: "Location",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateCompany>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit: SubmitHandler<CreateCompany> = async (data: CreateCompany) => {
    setLoading(true);
    await dispatch(createCompanyAsync(data));
    setLoading(false);
    handleClose();
  };
  return (
    <div>
      <ListItem disablePadding onClick={handleOpen}>
        <ListItemButton>
          <ListItemIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="compose-medium"
              fill="currentColor"
              aria-hidden="true"
              data-supported-dps="24x24"
              viewBox="0 0 24 24"
              data-token-id="96"
              width="24"
              height="24"
              style={{
                width: "24px",
                minWidth: "24px",
                height: "24px",
                minHeight: "24px",
                color: "#0a66c2",
              }}
            >
              <path d="M19 12h2v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm4-8a2.9 2.9 0 0 1-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0 1 23 4m-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary={"Post a free Job"} />
        </ListItemButton>
      </ListItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Box component={"img"} height={100} width={100} src={watch("company_logo")} />
              <CloudinaryUploader setValue={setValue} fieldName="company_logo" />
            </Box>
            {inputField.map((item, index) => (
              <Box key={index}>
                <TextField
                  placeholder={item.placeholder}
                  label={item.label}
                  {...register(item.name)}
                />
                {errors[item.name] && (
                  <FormHelperText error>{errors[item.name]?.message}</FormHelperText>
                )}
              </Box>
            ))}

            <input type="text" hidden />
            <Button type="submit">Create</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
