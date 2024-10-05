import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import "../globals.css";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import FAQ from "../components/organisms/FAQ";
import "acm-cs-sjsu-hero-component/dist/styles.css";

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />
        <Outlet />
        <div className="flex">
          <FAQ />
        </div>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      {process.env.NODE_ENV === 'development' && <TanStackRouterDevtools />}
    </QueryClientProvider>
  ),
})
