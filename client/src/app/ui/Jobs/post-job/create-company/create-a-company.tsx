import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FieldName, SubmitHandler, useForm } from "react-hook-form";
import { companySchema, CreateCompanyType } from "./create-company.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/features/store";
import { Dispatch, useState } from "react";
import { createCompanyAsync } from "@/features/job/handle-job/job.action";
import CloudinaryUploader from "@/app/ui/upload-widget/cloudinary-widget";
import { Company } from "@/types/job";
import styles from './create-company.module.css'

const inputField: {
  type: string;
  placeholder: string;
  name: FieldName<CreateCompanyType>;
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

type Prop = {
  setcreateCompany: Dispatch<React.SetStateAction<boolean>>;
  setCompany: Dispatch<React.SetStateAction<Company | undefined>>;
};
export default function CreateCompany({ setcreateCompany, setCompany }: Prop) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateCompanyType>({
    resolver: zodResolver(companySchema),
    defaultValues:{
      company_logo: "https://semantic-web.com/wp-content/uploads/underpin-pan-european-data-space-for-holistic-asset-management-in-critical-manufacturing-industries-3-300x143@2x.png"
    }
  });

  const onSubmit: SubmitHandler<CreateCompanyType> = async (
    data: CreateCompanyType,
  ) => {
    setLoading(true);
    await dispatch(createCompanyAsync(data));
    setLoading(false);
  };
  return (
    <Box>
      <Box className={styles.heading}>
        <Typography variant="h4">Create Your Company</Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid >
            <Stack spacing={4}>
            <Box
              component={"img"}
              height={100}
              width={100}
              src={watch("company_logo")}
              className={styles.image}
            />
            <CloudinaryUploader setValue={setValue} fieldName="company_logo" />
            {errors.company_logo && (
              <FormHelperText>{errors.company_logo.message}</FormHelperText>
            )}
            </Stack>
          </Grid>
          <Grid spacing={6}>
            {inputField.map((item, index) => (
              <Box key={index}>
                <TextField className={styles.input}
                  placeholder={item.placeholder}
                  label={item.label}
                  {...register(item.name)}
                  
                />
                {errors[item.name] && (
                  <FormHelperText error>
                    {errors[item.name]?.message}
                  </FormHelperText>
                )}
              </Box>
            ))}
          </Grid>

          <Grid>
            <Button onClick={() => setcreateCompany(false)}>Back</Button>
          </Grid>
          <Grid>
            <Button type="submit">Create</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
