// export type NotificationCategory =
//   | "jobs"
//   | "my-posts"
//   | "mentions";

// export interface Notification {
//   id: number;
//   category: NotificationCategory;
//   type: "comment" | "like" | "mention" | "job";
//   user: {
//     id: number;
//     name: string;
//     profileImage: string;
//   };
//   targetUser?: string;
//   postTitle?: string;
//   message: string;
//   time: string;
//   read: boolean;
// }

export enum NotificationType {
  CONNECTION_REQUEST = 'CONNECTION_REQUEST',
  CONNECTION_ACCEPTED = 'CONNECTION_ACCEPTED',
  POST_LIKED = 'POST_LIKED',
  POST_COMMENTED = 'POST_COMMENTED',
  FOLLOWED = 'FOLLOWED',
}

export interface Notification {
  id: number;
  recipientId: number;
  senderId: number;
  type: NotificationType;
  isRead: boolean;
  referenceId: number | null;
  createdAt: string;
  sender: string;
}
