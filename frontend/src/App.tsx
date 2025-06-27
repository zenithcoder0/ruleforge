import './App.css'
import { useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  useEffect(() => {
    supabase.auth.getSession().then(console.log);
  }, []);

  return <h1>Supabase Connected</h1>;
}

export default App;