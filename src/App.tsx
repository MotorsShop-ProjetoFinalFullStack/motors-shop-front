import { AuthProvider } from "./providers/AuthProvider";
import { CarProvider } from "./providers/CarProvider";
import { UserCarProvider } from "./providers/UserCarProvider";
import { RoutesMain } from "./routes";

function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <UserCarProvider>
          <RoutesMain/>
        </UserCarProvider>
      </CarProvider>
    </AuthProvider>
  )

}

export default App;
