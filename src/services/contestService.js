import http from ".";

export const fetchActiveContests = body => http.get("activeContests");

export const fetchArchivedContests = (page, limit) => http.get(`archivedContests?_page=${page}&_limit=${limit}`);