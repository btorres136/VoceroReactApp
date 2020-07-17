import * as React from "react";

export const tabBarContext = React.createContext({
    showTabBar: true,
    setShowTabBar: () => {}
});