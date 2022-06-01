const port = process.env.APP_PORT || 3000;

const apiBasePath = "/api/v1/auth/";
const apiVersionPath = "/api/v1/";

export const websiteDomain =
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${port}`;

export const appInfo = {
  appName: "Recommender System - Frontend",
  websiteDomain,
  apiDomain: "http://localhost:8000",
  apiBasePath,
  apiVersionPath,
};
