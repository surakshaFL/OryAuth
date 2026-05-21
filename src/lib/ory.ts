import { FrontendApi, Configuration } from "@ory/client"

const ory = new FrontendApi(
  new Configuration({
    // Use the Vite dev proxy so browser requests stay same-origin in development.
    basePath: "/ory",
    baseOptions: {
      withCredentials: true,
    },
  })
)

export default ory
