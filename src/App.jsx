import { useState } from 'react';
import PreLoginHome from './pages/PreLoginHome';
import PostLoginHome from './pages/PostLoginHome';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="relative">

      {/* Page Transition */}
      <div className="transition-opacity duration-300">
        {isLoggedIn ? (
          <PostLoginHome onLogout={() => setIsLoggedIn(false)} />
        ) : (
          <PreLoginHome onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
    </div>
  );
}
