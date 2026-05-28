import type { LoginFlow, RegistrationFlow } from "@ory/client";
import { getHiddenValue } from "./flow";
import ory from "./ory";

type LoginParams = {
  email: string;
  password: string;
  flow: LoginFlow;
};

type RegisterParams = {
  fullName: string;
  email: string;
  password: string;
  flow: RegistrationFlow;
};

export async function signInWithPassword({
  email,
  password,
  flow,
}: LoginParams): Promise<void> {
  await ory.updateLoginFlow({
    flow: flow.id,
    updateLoginFlowBody: {
      method: "password",
      csrf_token: getHiddenValue(flow, "csrf_token"),
      identifier: email,
      password,
    },
  });
}

export async function registerWithPassword({
  fullName,
  email,
  password,
  flow,
}: RegisterParams): Promise<void> {
  await ory.updateRegistrationFlow({
    flow: flow.id,
    updateRegistrationFlowBody: {
      method: "password",
      csrf_token: getHiddenValue(flow, "csrf_token"),
      password,
      traits: {
        email,
        full_name: fullName,
      },
    },
  });
}

export async function startLogout(): Promise<string> {
  const { data } = await ory.createBrowserLogoutFlow({
    returnTo: `${window.location.origin}/login`,
  });

  return data.logout_url;
}
