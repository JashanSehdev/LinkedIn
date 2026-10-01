'use client'
import { Box } from "@mui/material";
import { useState } from "react";
import CommentInput from "./comment-input/comment-input";

type Prop =  {
    postId : number
}
export default function CommentSection({postId} : Prop) {
    const [toggleInput, setToggleInput] = useState(false);

    return (
        <Box>
            <Box>
                <CommentInput postId={postId}/>
            </Box>
            
        </Box>
    )
}