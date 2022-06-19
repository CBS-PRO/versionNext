interface User {
  email: string;
  name: string;
}

interface SharedUserInfo {
  first_name: string;
  id: number;
  last_name: string;
}

interface Login {
  token: string;
  success: boolean;
  user: {
    email: string;
    name: string;
  };
}

export type { User, Login, SharedUserInfo };
