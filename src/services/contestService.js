import http from ".";

export const fetchActiveContests = body => http.get("activeContests");