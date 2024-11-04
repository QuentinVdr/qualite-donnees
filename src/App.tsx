import Home from '@components/Home/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("Démarrage de l'application");
    console.log(" (\\ (\\ \n ( -.-)\n o_('')('')");
  }, []);

  return <Home />;
}

export default App;
