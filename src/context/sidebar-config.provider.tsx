import { createContext, FC, useContext, useState } from "react";

interface ISidebarConfigContext {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => React.SetStateAction<void>;
}

interface ISidebarConfigProviderProps {
  children?: React.ReactNode;
  initialCollapsed?: boolean;
}

const SidebarConfigContext = createContext<ISidebarConfigContext | undefined>(undefined);

export const SidebarConfigProvider: FC<ISidebarConfigProviderProps> = ({
  children,
  initialCollapsed,
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed || false);

  return (
    <SidebarConfigContext.Provider
      value={{
        collapsed,
        setCollapsed,
      }}
    >
      {children}
    </SidebarConfigContext.Provider>
  );
};

export const useSidebarConfig = (): ISidebarConfigContext => {
  const context = useContext(SidebarConfigContext);

  if (!context) {
    throw new Error("useSidebarConfig must be used within a SidebarConfigProvider");
  }

  return context;
};
