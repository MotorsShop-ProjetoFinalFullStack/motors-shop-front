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
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const { dataUser }: any = useContext(Context);

  const [user, setUser] = useState<User>({} as User);

  const singIn = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);
      const token: string = response.data.token;
      localStorage.setItem("@Token", token);

      setMessageError(false);
      setLogin(true);
    } catch (err) {
      setMessageError(true);
    }
  };

  useEffect(() => {
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

        if (user.typeUser === "Anunciante") {
          navigate("/userAdvertiser");
        } else {
          navigate("/");
        }
      } catch (err) {
        return null;
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [login, dataUser]);

  return (
    <AuthContext.Provider value={{ singIn, login, messageError, user }}>
      {children}
    </AuthContext.Provider>
  );
};
