import fetcher from "./fetcher";

type Body = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export const auth = (mode: "signin" | "signup", body: Body) => {
  return fetcher(`/${mode}`, body);
};
