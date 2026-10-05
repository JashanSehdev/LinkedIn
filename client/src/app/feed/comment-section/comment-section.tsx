'use client'
import { Avatar, Box, CircularProgress, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CommentInput from "./comment-input/comment-input";
import { fetchPostCommentAsync } from "@/features/feed/handle-feed/feed.action";
import { useAppDispatch } from "@/features/store";
import { Comment } from "@/types/feed";
import CommentCard from "./comments/comments";

type Prop =  {
    readonly postId : number
}
export default function CommentSection({postId} : Prop) {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState<Comment[]>([])
    useEffect(() => {
       
        const fetchParentComments = async() => {
            try{
                const result = await dispatch(fetchPostCommentAsync(postId)).unwrap()
                setComments(result)
            } catch(error) {
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        fetchParentComments();
    },[dispatch, postId])
    return (
        <Box>
            <Box>
                <CommentInput postId={postId}/>
                {
                    loading ? <CircularProgress/> : 
                        comments && (comments.length===0 ? 'No Comment yet' : 
                            comments.map((item) => (
                            <CommentCard key={item.id} comment={item}/>
                        )))
 
                }
            </Box>
            
        </Box>
    )
}