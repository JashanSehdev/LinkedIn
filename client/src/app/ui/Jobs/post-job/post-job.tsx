"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,

} from "@mui/material";
import CreateCompany from "./create-company/create-a-company";
import CreateJob from "./create-job/create-a-job";
import SelectCompany from "./select-company/select-company";
import { Company } from "@/types/job";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width:"100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PostJobModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [company, setCompany] = React.useState<Company | undefined>()
  const [createCompany, setCreateCompany] = React.useState<boolean>(false)

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
          {
            !createCompany && !company &&<SelectCompany setCompany={setCompany} setcreateCompany={setCreateCompany}/>
          }
          
          {
            createCompany && !company && <CreateCompany setcreateCompany={setCreateCompany} setCompany={setCompany}/>
          }
          {
            company && <CreateJob company={company} setCompany={setCompany}/>
          }
          
  

        </Box>
      </Modal>
    </div>
  );
}
