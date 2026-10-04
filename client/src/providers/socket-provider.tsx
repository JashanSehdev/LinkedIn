"use client";

import { useEffect } from "react";
import { socket } from "@/lib/socket";

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleConnect = () => {
      console.log("Socket connected:", socket.id);
    };

    const handleDisconnect = () => {
      console.log("Socket disconnected");
    };

    const handleConnectError = (error: Error) => {
      console.error("Socket connection error:", error.message);
    };

    const handleNotification = (notification: unknown) => {
      console.log("New notification:", notification);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleConnectError);
    socket.on("notification", handleNotification);

    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);
      socket.off("notification", handleNotification);
      socket.disconnect();
    };
  }, []);

  return <>{children}</>;
}