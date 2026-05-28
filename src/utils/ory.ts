import { Configuration, FrontendApi } from "@ory/client";

const ory = new FrontendApi(
  new Configuration({
    basePath: "/ory",
    baseOptions: {
      withCredentials: true,
    },
  }),
);

export default ory;
