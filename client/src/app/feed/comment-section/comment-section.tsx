'use client'
import { Box } from "@mui/material";
import { useState } from "react";
import CommentInput from "./comment-input/comment-input";

export default function CommentSection() {
    const [toogleInput, setToggleInput] = useState(false);

    return (
        <Box>
            <Box>
                <CommentInput postId={1}/>
            </Box>
            
        </Box>
    )
}