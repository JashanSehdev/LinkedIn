'use client'

import { Box, Button, FormHelperText, TextField, Typography } from "@mui/material";
import { Dispatch, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../../../features/store";
import { createJobAsync } from "../../../../../features/job/handle-job/job.action";
import { createJob, createJobOutput, jobSchema } from './create-job.type'
import { Company } from "@/types/job";

const inputField: {
  type: string;
  placeholder: string;
  name: keyof createJobOutput;
  label: string;
}[] = [
  {
    name: "position",
    type: "text",
    placeholder: "eg: Frontend Developer",
    label: "Position",
  },
  {
    name: "salary",
    type: "number",
    placeholder: "eg: 120000",
    label: "Salary",
  },
  {
    name: "experience",
    type: "text",
    placeholder: "eg: 2 years",
    label: "Experience",
  },
];

type Prop = {
  setCompany: Dispatch<React.SetStateAction<Company | undefined>>;
  readonly company : Company
} 

export default function CreateJob( {company, setCompany}: Prop) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createJob, unknown, createJobOutput>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit: SubmitHandler<createJobOutput> = async (data: createJobOutput) => {
    setLoading(true);

    const inputData = {
      companyId:company.id,
      job_description: {
        position: data.position,
        salary: data.salary,
        experience: data.experience,
      },
    };

    await dispatch(createJobAsync(inputData));
    setLoading(false);
  };

  return (
    <Box>
      <Box>
        <Typography>Create Job</Typography>
      </Box>

      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputField.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <TextField
                type={item.type}
                placeholder={item.placeholder}
                label={item.label}
                {...register(item.name)}
              />
              {errors[item.name] && (
                <FormHelperText error>{errors[item.name]?.message}</FormHelperText>
              )}
            </Box>
          ))}

          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </Button>
          <Button onClick={()=> setCompany(undefined)}>
            Back
          </Button>
        </form>
      </Box>
    </Box>
  );
}
