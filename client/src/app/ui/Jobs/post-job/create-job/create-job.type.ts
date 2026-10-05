import z from "zod";

export const jobSchema = z.object({
  position: z.string(),
  salary: z.coerce.number().min(1, "salary should be greater than 0"),
  experience: z.string().min(1, "Experience required"),
});

export type createJob = z.input<typeof jobSchema>;

export type createJobOutput = z.infer<typeof jobSchema>;
