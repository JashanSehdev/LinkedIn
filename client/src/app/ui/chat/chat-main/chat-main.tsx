import { Box } from "lucide-react";
import { useRouter } from "next/navigation";

type ChatMainPron = {
    roomId ?: number
}

export default function ChatMain({roomId} : ChatMainPron) {
    const router = useRouter();
    return (
    <Box>

    </Box>)
}