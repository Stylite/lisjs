module.exports = {
  getChannel: channelId => ({
    endpoint: `/channels/${channelId}`,
    method: "GET"
  }),
  modifyChannel: channelId => ({
    endpoint: `/channels/${channelId}`,
    method: "PATCH"
  }),
  deleteChannel: channelId => ({
    endpoint: `/channels/${channelId}`,
    method: "DELETE"
  }),
  getChannelMessages: channelId => ({
    endpoint: `/channels/${channelId}/messages`,
    method: "GET"
  }),
  getChannelMessage: (channelId, messageId) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}`,
    method: "GET"
  }),
  createMessage: channelId => ({
    endpoint: `/channels/${channelId}/messages`,
    method: "POST"
  }),
  createReaction: (channelId, messageId, emoji) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`,
    method: "PUT"
  }),
  deleteOwnReaction: (channelId, messageId, emoji, userId) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`,
    method: "DELETE"
  }),
  deleteUserReaction: (channelId, messageId, emoji, userId) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}/`,
    method: "DELETE"
  }),
  getReactions: (channelId, messageId, emoji) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`,
    method: "GET"
  }),
  deleteAllReactions: (channelId, messageId, emoji) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}/reactions`,
    method: "DELETE"
  }),
  editMessage: (channelId, messageId) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}`,
    method: "PATCH"
  }),
  deleteMessage: (channelId, messageId) => ({
    endpoint: `/channels/${channelId}/messages/${messageId}`,
    method: "DELETE"
  }),
  bulkDeleteMessages: channelId => ({
    endpoint: `/channels/${channelId}/messages/bulk-delete`,
    method: "POST"
  }),
  editChannelPermission: (channelId, overwriteId) => ({
    endpoint: `/channels/${channelId}/permissions/${overwriteId}`,
    method: "PUT"
  }),
  getChannelInvites: id => ({
    endpoint: `/channels/${id}/invites`,
    method: "GET"
  }),
  createChannelInvite: id => ({
    endpoint: `/channels/${channelId}/invites`,
    method: "POST"
  }),
  deleteChannelPermission: (channelId, overwriteId) => ({
    endpoint: `/channels/${channelId}/permissions/${overwriteId}`,
    method: "DELETE"
  }),
  triggerTyping: channelId => ({
    endpoint: `/channels/${channelId}/typing`,
    method: "POST"
  }),
  getPinnedMessages: id => ({
    endpoint: `/channels/${id}/pins`,
    method: "GET"
  }),
  addPinnedMessage: (channelId, messageId) => ({
    endpoint: `/channels/${channelId}/pins/${messageId}`,
    method: "PUT"
  }),
  deletePinnedMessage: (channelId, messageId) => ({
    endpoint: `/channels/${channelId}/pins/${messageId}`,
    method: "DELETE"
  }),
  dmAddRecipient: (channelId, userId) => ({
    endpoint: `/channels/${channelId}/recipients/${userId}`,
    method: "PUT"
  }),
  dmRemoveRecipiend: (channelId, userId) => ({
    endpoint: `/channels/${channelId}/recipients/${userId}`,
    method: "DELETE"
  }),
  guildBan: (channelId, userId) => ({
    endpoint: `/guilds/${guildId}/bans/${userId}`,
    method: "PUT"
  }),
  guildUnban: (channelId, userId) => ({
    endpoint: `/guilds/${guildId}/bans/${userId}`,
    method: "DELETE"
  }),
  guildEmojiDelete: (guildId, emojiId) => ({
    endpoint: `/guilds/${guildId}/emojis/${emojiId}`,
    method: "DELETE"
  }),
  guildEmojis: guildId => ({
    endpoint: `/guilds/${guildId}/emojis`,
    method: "GET"
  }),
  getGuildEmojis: (guildId, emojiId) => ({
    endpoint: `/guilds/${guildId}/emojis/${emojiId}`,
    method: "GET"
  }),
  createGuildEmoji: guildId => ({
    endpoint: `/guilds/${guildId}/emojis`,
    method: "POST"
  }),
  modifyGuildEmoji: (guildId, emojiId) => ({
    endpoint: `/guilds/${guildId}/emojis/${emojiId}`,
    method: "PATCH"
  }),
  deleteGuildEmoji: (guildId, emojiId) => ({
    endpoint: `/guilds/${guildId}/emojis/${emojiId}`,
    method: "DELETE"
  }),
  createGuild: () => ({ endpoint: `/guilds`, method: "POST" }),
  getGuild: guildId => ({ endpoint: `/guilds/${guildId}`, method: "GET" }),
  modifyGuild: guildId => ({ endpoint: `/guilds/${guildId}`, method: "PATCH" }),
  deleteGuild: guildId => ({
    endpoint: `/guilds/${guildId}`,
    method: "DELETE"
  }),
  getGuildChannels: guildId => ({
    endpoint: `/guilds/${guildId}/channels`,
    method: "POST"
  }),
  modifyGuildChannelPositions: guildId => ({
    ednpoint: `/guilds/${guildId}/channels`,
    method: "PATCH"
  }),
  getGuildMember: (guildId, userId) => ({
    endpoint: `/guilds/${guildId}/members/${userId}`,
    method: "GET"
  }),
  listGuildMembers: guildId => ({
    endpoint: `/guilds/${guildId}/members`,
    method: "GET"
  }),
  addGuildMember: (guildId, userId) => ({
    endpoint: `/guilds/${guildId}/members/${userId}`,
    method: "PUT"
  }),
  modifyGuildMember: (guildId, userId) => ({
    endpoint: `/guilds${guildId}/members/${userId}`,
    method: "PATCH"
  }),
  modifyCurrentUsersNick: guildId => ({
    endpoint: `/guilds/${guildId}/members/@me/nick`,
    method: "PATCH"
  }),
  addGuildMemberRole: (guildId, userId, roleId) => ({
    endpoint: `/guilds/${guildId})`,
    method: "PUT"
  }),
  removeGuildMemberRole: (guildId, userId, roleId) => ({
    endpoint: `/guilds/${guildId}/members/${userId}/roles/${roleId}`,
    method: "DELETE"
  }),
  removeGuildMember: (guildId, userId) => ({
    endpoint: `/guilds/${guildId}/members/${userId}`,
    method: "DELETE"
  }),
  getGuildBans: guildId => ({
    endpoint: `/guilds/${guildId}/bans`,
    method: "GET"
  }),
  createGuildBan: (guildId, userId) => ({
    endpoint: `/guilds/${guildId}/bans/${userId}`,
    method: "PUT"
  }),
  removeGuildBan: (guildId, userId) => ({
    endpoint: `/guilds/${guildId}/bans/${userId}`,
    method: "DELETE"
  }),
  getGuildRoles: guildId => ({
    endpoint: `/guilds/${guildId}/bans/${userId}`,
    method: "GET"
  }),
  createGuildRoles: guildId => ({
    endpoint: `/guilds/${guildId}/roles`,
    method: "POST"
  }),
  modifyGuildRolePositions: guildId => ({
    endpoint: `/guilds/${guildId}/roles`,
    method: "PATCH"
  }),
  modifyGuildRole: (guildId, roleId) => ({
    endpoint: `/guilds/${guildId}/roles/${roleId}`,
    method: "PATCH"
  }),
  deleteGuildRole: (guildId, roleId) => ({
    endpoint: `/guilds/${guildId}/roles/${roleId}`,
    method: "DELETE"
  }),
  getGuildPruneCount: guildId => ({
    endpoint: `/guilds/${guildId}/prune`,
    method: "GET"
  }),
  beginGuildPrune: guildId => ({
    endpoint: `/guilds/${guildId}/prune`,
    method: "POST"
  }),
  getGuildVoiceRegions: guildId => ({
    endpoint: `/guilds/${guildId}/regions`,
    method: "GET"
  }),
  getGuildInvites: guildId => ({
    endpoint: `/guilds/${guildId}/invites`,
    method: "GET"
  }),
  getGuildIntegration: guildId => ({
    endpoint: `/guilds/${guildId}/integrations`,
    method: "POST"
  }),
  modifyGuildIntegration: (guildId, integrationId) => ({
    endpoint: `/guilds/${guildId}/intergrations/${integrationId}`,
    method: "PATCH"
  }),
  deleteGuildIntegration: (guildId, integrationId) => ({
    endpoint: `/guilds/${guildId}/intergrations/${intergration}`,
    method: "DELETE"
  }),
  syncGuildIntegration: (guildId, integrationId) => ({
    endpoint: `/guilds/${guildId}/intergrations/${integrationId}/sync`,
    method: "POST"
  }),
  getGuildEmbed: guildId => ({
    endpoint: `/guilds/${guildId}/embed`,
    method: "GET"
  }),
  modifyGuildEmbed: guildId => ({
    endpoint: `/guilds/${guildId}/embed`,
    method: "PATCH"
  }),
  getInvite: inviteCode => ({
    endpoint: `/invites/${inviteCode}`,
    method: "GET"
  }),
  deleteInvite: inviteCode => ({
    endpoint: `/invites/${inviteCode}`,
    method: "POST"
  }),
  getCurrentUser: me => ({ endpoint: `/users/@me`, method: "GET" }),
  getUser: userId => ({ endpoint: `/uses/${userId}`, method: "GET" }),
  modifyCurrentUser: me => ({ endpoint: `/users/@me`, method: "PATCH" }),
  getCurrentUserGuilds: me => ({
    endpoint: `/users/@me/guilds`,
    method: "GET"
  }),
  leaveGuild: guildId => ({
    endpoint: `/users/@me/guilds/${guildId}`,
    method: "DELETE"
  }),
  getUserDMS: me => ({ endpoint: `/users/@me/channels`, method: "GET" }),
  createDM: me => ({ endpoint: `/users/@me/channels`, method: "POST" }),
  createGroupDM: me => ({ endpoint: `/users/@me/channels`, method: "POST" }),
  getUserConnections: me => ({ endpoint: `/users/@me/connections` }),
  listVoiceRegions: voice => ({ endpoint: `/voice/regions`, method: "GET" }),
  createWebhook: channelId => ({
    endpoint: `/channels/${channelId}/webhooks`,
    method: "POST"
  }),
  getChannelWebhooks: channelId => ({
    endpoint: `/channels/${channelId}/webhooks`,
    method: "GET"
  }),
  getGuildWebhooks: guildId => ({
    endpoint: `/guilds/${guildId}/webhooks`,
    method: "GET"
  }),
  getWebhook: webhookId => ({
    endpoint: `/weebhooks/${webhookId}`,
    method: "GET"
  }),
  getWebhookWithToken: (webhookId, webhookToken) => ({
    endpoint: `/webhooks/${webhookId}/${webhookToken}`,
    method: "GET"
  }),
  modifyWebhook: webhookId => ({
    endpoint: `/webhooks/${webhookId}`,
    method: "PATCH"
  }),
  modifyWebhookWithToken: (webhookId, webhookToken) => ({
    endpoint: `/webhooks/${webhookId}/${webhookToken}`,
    method: "PATCH"
  }),
  deleteWebhook: webhookId => ({
    endpoint: `/webhooks/${webhookId}`,
    method: "DELETE"
  }),
  deleteWebhookWithToken: (webhookId, webhookToken) => ({
    endpoint: `/webhooks/${webhookId}/${webhookToken}`,
    method: "DELETE"
  }),
  executeWebhook: (webhookId, webhookToken) => ({
    endpoint: `/webhooks/${webhookId}/${webhookToken}`,
    method: "POST"
  }),
  executeSlackWebhook: (webhookId, webhookToken) => ({
    endpoint: `/webhooks/${webhookId}/${webhookToken}/slack`,
    method: "POST"
  }),
  executeGithubWebhook: (webhookId, webhookToken) => ({
    endpoint: `/webhooks/${webhookId}/${webhookToken}/github`,
    method: "POST"
  }),
  getGuildAuditLog: guildId => ({
    endpoint: `/guilds/${guildId}/audit-logs`,
    method: "GET"
  })
};
