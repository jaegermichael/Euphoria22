/** Anodised Standard style: a dark-first material system supports the architectural landing page. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Services} path="/services" />
        <Route component={Business} path="/business" />
        <Route component={Contact} path="/contact" />
        <Route component={NotFound} path="/404" />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
