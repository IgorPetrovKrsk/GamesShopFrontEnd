import AuthProvider from "./auth/authContext";
import UserProvider from "./user/userContext";

export default function AppProvider({ children }) {
    return <AuthProvider>
        <UserProvider>{children}</UserProvider>
    </AuthProvider>

}