import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// providers
const UserProvider = ({ children }) => {
    const [user] = useState({
        name: "strange",
        email: "strange@loco.com",
        dob: "00/00/00"
    });

    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

// consumer
export const useUserContext = () => useContext(UserContext);

export default UserProvider;
