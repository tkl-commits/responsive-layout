interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateAreas: `'topbar topbar topbar'
                            'leftsidebar section rightsidebar'`,
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "auto 1fr auto",
      }}
    >
      {children}
    </div>
  );
}
