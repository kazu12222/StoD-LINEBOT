const userIdMap = new Map();
export const generateToken = () => Math.random().toString(36).substring(2);
export const userIdMapping = (token, userId) => {
  userIdMap.set(token, userId);
  return userIdMap;
};
export const getUserId = (token) => {
  const userId = userIdMap.get(token);
  userIdMap.delete(token);
  return userId;
};
