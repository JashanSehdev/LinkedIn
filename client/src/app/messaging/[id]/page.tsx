"use client";

import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export default function MessagingDetailPage() {
  const params = useParams<{ id?: string }>();
  const conversationId = params?.id ?? "unknown";

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Messaging</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Conversation ID: {conversationId}
      </Typography>
    </Box>
  );
}
