import RoleThemeWrapper from "../theme/RoleThemeWrapper.jsx";

export default function AppShell({ role, className = "", children }) {
  return (
    <RoleThemeWrapper role={role} className={className}>
      {children}
    </RoleThemeWrapper>
  );
}

