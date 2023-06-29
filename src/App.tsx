import { AnnouncementPageProvider } from "./providers/AnnouncementPageProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { CarProvider } from "./providers/CarProvider";
import { PublicUserProvider } from "./providers/PublicUserProvider";
import { UserCarProvider } from "./providers/UserCarProvider";
import { RoutesMain } from "./routes";

function App() {
  return (
    <AuthProvider>
      <CarProvider>
        <UserCarProvider>
          <PublicUserProvider>
            <AnnouncementPageProvider>
              <RoutesMain/>
            </AnnouncementPageProvider>
          </PublicUserProvider>
        </UserCarProvider>
      </CarProvider>
    </AuthProvider>
  )

}

export default App;
