export const sessionStatus = typeof window !== "undefined" ? localStorage.getItem("token") : null;
