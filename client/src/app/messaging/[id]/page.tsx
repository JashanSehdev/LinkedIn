import ChatMain from "@/app/ui/chat/chat-main";



export default async function MessagingRoom({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ChatMain roomId={Number(id)} />;
}