import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AuthenticatedContent from "./pages/AuthenticatedContent.jsx";
import { useSupabaseAuth, SupabaseAuthProvider } from "./integrations/supabase/auth.jsx";

function App() {
  const { session } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        {session && <Route path="/authenticated-content" element={<AuthenticatedContent />} />}
      </Routes>
    </Router>
  );
}

export default App;
