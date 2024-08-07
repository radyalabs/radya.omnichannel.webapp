export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const ENDPOINT = {
  IDENTITY: {
    LOGIN: '/identity/sign-in',
    PROFILE: '/identity/me',
    REFRESH: '/identity/refresh',
  },
  USER_MGMT: {
    USERS: '/user-management/users',
    USERS_BY_ID: (id: string) => `user-management/users/${id}`,
    SCOPES: '/user-management/users/application-scopes',
  },
  MESSAGE: {
    CONVERSATION: '/conversation',
    CONVERSATION_MESSAGE: (conversationId: string) => `/conversation/${conversationId}/messages`,
    CHAT_HUB: (userId: string) => `https://api-omnichannel.radyalabs.id/chatHub?userId=${userId}`,
    UPDATE_STATUS_BOT: (conversationId: string, botStatus: string) => `/conversation/${conversationId}/${botStatus}/bot`,
    UPDATE_STATUS_CONVERSATION: (conversationId: string, conversationStatus: string) => `/conversation/${conversationId}/${conversationStatus}/status`,
  },
  DASHBOARD: {
    OMNI_DASHBOARD_EMBED_SRC: 'https://metabase.radyalabs.id/public/dashboard/403bfe1c-79a2-4f47-9d07-bbdebd465b76',
  },
} as const;
