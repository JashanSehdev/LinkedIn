"use client";

import { Avatar, Box, Button } from "@mui/material";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./comments.module.css";
import { Comment } from "@/types/feed";
import CommentMenuPopover from "./comments-menu-popover/menu-popover";
import { KeyboardEvent, useState } from "react";
import { useAppDispatch } from "@/features/store";
import { createNestedCommentAsync } from "@/features/feed/handle-feed/feed.action";
import { clear } from "console";

type Prop = {
  readonly comment: Comment;
};

const dummyProfilePic = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADcQAAEEAQIDBQUIAQUBAAAAAAEAAgMRBBIhBTFBEyJRYXEGFDKBoUJSkbHB0eHwIxVDU3LxJP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAB8RAAICAgMBAQEAAAAAAAAAAAABAhEDIRIxQTIiE//aAAwDAQACEQMRAD8A4tCLQpLBCEIAEIQgBUBIhFAOtCRBKKAUlMLkhKRNIlsXUUBxSITCyVjrUlquDXJPtQ0XGRKHI1KK0WlRXIl1oUSE+IrBCEIJBCKRSYwSJ7WPINCwN0mk9WlADUJ7I3PkbG1h1ONBWZeG5UeCMyRhbGSduob970StBTfRStHMoIqr6ix6JvVUSwQnMYXmk9zKRYqI6RScAn6e+wJWOiKk9u4PknOZRvxQRVhKx0NQnAN8Sim+KLHQ1CR96tkJ2KxUJEqAAJWglwaBZJqk8QylnaCKQsq9YYa/FX/ZxkUnGcds7Q5veIB5XRpTKVKykrdMkPAuIQRzXHGToDu67wI29VUgwZsjKbFHbWPpwkIOkNIsWfou4llJkfCT8QIBViRjIsXQGjuxgDbouVZ2dLwI42CEY2Q+WWg5jY2NBPJx2JXQROEnBpJnfG4aTfgANlzntDzY8c7IPn4KwziRZwkQVduFb7ocW6kKMlFtGfFAzL4wIXmmOkOr0Av9FRkbqyHgCu8aU8BMWe0ucCWy7uHI+iucWw2473PjcH6gXb8x/bXRyp0ZceUWyiC2FrgTTz9E6ZtxtcOqpk6jbiT6q/hjtIWg9D/H6qpKtkxfLRCyO6BHPkpNOpmrkW0VKGns9P8Axn6ILm6iW/A4UP1UWXVEU4tod0u/1/VRO+Bp8eSkmPdq+QUJd3QPRUiJdjRzKckd8RPilVEiFCCkQAiXeiALSJQdJBHMHZNgjvY2kYmM54dG7QGmM8waWZxHhrW5Bnxqjy4n6wQNnddwm8P4xDmRtjyXCPIrmdmv/lWJsjvl7z3g2t+RXF+os7E4yiVGcYiyWtkkcI5w89zyvYK7j8dxM2SVjpOzdpLWh+2rwpctlxdhJ2o7zXkPYR08lVlOp5dQF2aHJarFGW0YvNJaNbjkkbgI2ODnXZo8gFnNeHP7ZwDQxoDQOhSBthtDdw00B1v/AMUkoaJiGt1HclvQeS0ilFUZyk5OyBzjZcTz3tanH5O07CRrgWllWDzFrOlptU36clESa0/ZvkqcbaYlKk0NK0IKDI3Ha+YVR0YI2U0co7JrHUTSU9oIaZYyCWvDhvYo/mqxcQAL2O48lI+QSRc6cDarg7UlFFyY9x1XfgoSdgPBTNFEWOijkbW46qkQwPIJQmXyThyTJQpQhCBjLSpo5pUxC+nNWIc2WIaSdTPPmPQqsl6JSSfY7fhpaBkRMZJQ195vp4jzHULOmjdFK9jx3mEjyXXZeEJPZzHEbdM0MTXtI5g1Z/Gyue4nGJIocpnN7Bq8/wC7rDHLdGuXG0iHFmDCzUNmg7/ePmpWObE2KQU573d4+XKlVxoXTEgnS0b2US7Na0eq147MrYwkkknqUVab1tW+HYzsqdrA3VZ2Cp6QqtjG6ZWiNjDrFknpSZPjz4zw2eNzCRYB6jxWliRMglz2SODXsOgWOYvp67K3xvJbnYbLaAWAUdufqo5VKjXh+bfZgQu7wBSS92Rw8CiNp1easyQa3c61G7VN0yEm0RMltzSegopJjvQ5fqmOYYXFr+Y+qQm06Qm9UxvVSNUfVSNKbJQ4ITmCwhTZdEO3LqEIQqJBKBq7o67JWNc9waxpc48gBdq7gYGQ7PgbJEWDUHEuFbAqZNJFRTbO2Yz/AOYR19ilmO4RjxanT2+G7EQJ5nzWqXhouxsuc4/xPb3eN3feasdB1XBDk5aPRycYxtlHMmie5zMaMRwgbkCtSyXv1OLvFWJ6ZFoHMlW+D8JOXc0/dx2H5vPgu2FRVnnzbkyvg8OyM0/426Y+r3f3ddJgcPbhsLWONkUXXzVhlMY1rAGtGwaOQUuoaTY5JOVjSoo5nDMbIcHvB1/eBorI4pgtigMg1OeCALPRb73CjW7ugKgmAGzqN89utfkgbOV7NsTmvDiW3uVdEjAHsBDrbzBtT8VgIjL2fD1WURrApwDuh8U65Cvj0RvJ1U42RsmjmhxPVItfDH0cQgWnvA0orYJWVRNACWc+qEsbmBtHmhQWVLRugJVoZG/7HshknymvLTMY+4086G5r6LpocInIhjke6N16w/wHl8l57DK+GVkkTtL2G2kdFvYXtDnzZkIkbE5tjVpYba35Fc+bG27OnDkSVG7lARe8B9209y+osrAzMOOUGctp+/Ic6XQcSlMu8p7o5UsTOzxjwvGPF2jjTCXD4R+5NLHG96N8q1syOGwvzeIxxiq5uPgF2cYhaCG0IoCG6B4+C5/2fxvd8aSd1skfsPGlpyBuPEMeH/s/ey57v4pa5H4jDHHVs2MJjX4naytBdIS7lyHIKOfHhvud0gW79lJkye640Mbd3UGtHnyUMgMccbHG3kkvPiVkm7N6TMmZk3vxa5pDGgFp6FSyAFt/ircoErnN+6Nj5qu4EbFbRdowkqM3OGnGe0jvbbeKwsiF0Og3sR+B8F0mdFri1AEuYb9QqOTDqhbYLtrAZ4eipOiGrMDmkNgkcipJWaJCNxvyI3QWl7CaFg7jkVrZlQ1ztQA8lKwbBQBPjJLgES6HHbLPuwO9lC0sZuMIRqeL80LHkzo/mjDQhC3OagXQ+yIiyZZcOSMgkdqJWncVQr6rnl0nsQ0DNynaeUTQD4WVnk+S8f0jpp8GExU7W6h9p37BZ+BitdmajGNEQ1gefILZc0voEWCoWNDWSPArW+vkFxrXR2vfZXycdscbpQQZCab4NWdw6F0+fE02Q1xkJPUjl9aWjmyVw/tBvQpV+FVj4+VmO/226W/L+aVLoVbHiX3ri7urMZuw8Xcv3UmQ4CVou1V4GS3EdK/d2VKTfgAK/NJnvczOLPugb+ZTrYN6JMQOnnLBvbuak4kxkc1M6AWPBXOFY4hxtY+J249EPx2yumdL3WuqifJClUiXG0Y5NiiaWbluGO2QHZoGpg8jz/BWc2U48haXWByd4hZPGJtcMO+9H5jZdCRzN0Z88rZHB7gQaPJEA7VxDhTiLB8wo3NLXtaRR516p/aFkjHc6p1foq8JvZHLZdTjZCVuwT8hzXyEsFAm0wJ+CrZIHbITEJUirGIQhWQAC632IaOwy3/aL2t+VLkl1XsVKGx5Yd9ktd+ayy/Jri+0dJkz9k0MZvIdgPNRZTuxijjc63AW5yixNWRlPmJ2jqr6EqPiUoc+h9llfLdctbOpsiyX3wiEHm91/JQ8Yk914LBCNnS94/mkaXScOibWwnDAfL+lQ8ckGRx3Gxxu2OrHlzP0VJbJb0aMbPdmYUJ+xHqd69VWwm/6hxSW94g63+nh81HxLL0U4cwzSPVQ48kuOyLGL3wseNb3NPekcehPh+ytRZDkkb+TxOFhMOP/AJJW92mjut9SseYZs0/avynUPhjawUPxVqHs3RDswBt0Ub3aXeHIgqlFIlybKWbiHLla/JLnBraqxbvWlRkwxPlNc8d1m7q5Bo6BbMj3aRZJHn0Vef8Ax47g0d5ypEM5iR3a55LhVuKhLbP0Uz4nMy9F7gE/S1Hpcb8R0VkeCOAHw8kg5oa4fabv6oTAVCEiYDUBKhBILc9lXEZeRGPhdDqPqD/KEKMnyXj+kb+MT7zHH9h7i5w8SGlR5wDMmcN5BwACELmXZ1Ponxom/wCiRHr2t38/4WFiuMvGMmV571n9kiFcCJk8UbcrOjZNZaO9Xj6q3xNg7K+o/v6oQtEZTKnBsiQvfGTbQNvotCg424WaB/EWhCbEiMHW/vb8k/QHtJd03QhIZyvEe5MHD4nOdZ+iq6j4pELREBZQEiEwFQhCAP/Z'
export default function CommentCard(prop: Prop) {
  const { comment } = prop;

  const [toggleInput, setToggleInput] = useState(false);
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch()
  const handleAddComment = ( event :  KeyboardEvent<HTMLInputElement>) => {
    const {key, target} = event;

    if (key!== 'Enter' || !target.value.trim()) return;
    
    const dispatchData = {
      postId : comment.postId,
      parentId : comment.id,
      text : input
    }
    console.log("dispatchData" , dispatchData)
    dispatch(createNestedCommentAsync(dispatchData))
    setInput("")
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.section1}>
        <Avatar src={ dummyProfilePic} />
      </Box>
      <Box className={styles.section2}>
        <Box className={styles.header}>
          <Box>
            <p className={styles.name}>{"name"}</p>
            <p className={styles.bio}>{"headline"}</p>
          </Box>
          <Box className={styles.options}>
            <p>9h</p>
            <p>Follow</p>
            <CommentMenuPopover commentId={comment.id} postId={comment.postId} />
          </Box>
        </Box>
        <Box className={styles.section3}>
          <p>{comment.text}</p>
        </Box>
        <Box><Button>Like</Button><Button onClick={() => setToggleInput(!toggleInput)}>Comment</Button></Box>
        {
          toggleInput && <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Comment Here" onKeyDown={handleAddComment}/>
        }
        <Box>{comment.childComments?.map((reply) => <CommentCard key={reply.id} comment={reply}/>)}</Box>
      </Box>
    </Box>
  );
}
