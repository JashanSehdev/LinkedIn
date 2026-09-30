import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navbar from "../ui/navbar/navbar-variant-1";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <main>
        <AppRouterCacheProvider>
          <nav>
            <Navbar />
          </nav>

          {children}
        </AppRouterCacheProvider>
      </main>
  );
}
