import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../service";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";
import { TForgetData } from "../schema/schema";

interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string | null;
  typeUser: string;
  createdAt: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  singIn: (data: TLoginData) => void;
  login: boolean;
  messageError: boolean;
  user: User;
  forgetPassword: (formData: TForgetData) => Promise<void>;
  forgetPasswordToken: (formData: object) => Promise<void>;
  setTokenPassword: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [tokenPassword, setTokenPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const { dataUser }: any = useContext(Context);

  const [user, setUser] = useState<User>({} as User);

  const singIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);
      const token: string = response.data.token;
      localStorage.setItem("@Token", token);

      const responseUser = await api.get("/users/unique/users", {
        headers: { authorization: `Bearer ${token}` },
      });
      const user: User = responseUser.data;
      setUser(user);

      setMessageError(false);
      setLogin(true);

      if (user.typeUser === "Anunciante") {
        navigate("/userAdvertiser");
      } else {
        navigate("/");
      }
    } catch (err) {
      setMessageError(true);
    }
  };
  async function forgetPassword(formData: TForgetData) {
    try {
      await api.post("/users/resetPassword", formData);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }
  async function forgetPasswordToken(formData: object) {
    console.log(formData);
    try {
      await api.patch(`/users/resetPassword/${tokenPassword}`, formData);

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  }
  const loadUser = async () => {
    const token: string | null = localStorage.getItem("@Token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const responseUser = await api.get("/users/unique/users", {
        headers: { authorization: `Bearer ${token}` },
      });
      const user: User = responseUser.data;
      setUser(user);
      setLogin(true);
    } catch (err) {
      return null;
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.clear()
    setLogin(false)
    navigate("/login")
  }
  useEffect(() => {
    loadUser();
  }, [messageError, dataUser]);

  return (
    <AuthContext.Provider
      value={{
        singIn,
        login,
        messageError,
        user,
        forgetPassword,
        forgetPasswordToken,
        setTokenPassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
