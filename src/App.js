// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Navigate,
//   Routes
// } from 'react-router-dom';

// import Users from './user/pages/Users';
// import NewPlace from './places/pages/NewPlace';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact>
//           <Users />
//         </Route>
//         <Route path="/places/new" exact>
//           <NewPlace />
//         </Route>
//         <Navigate to="/" />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Users />} />

        {/* New Place Route */}
        <Route path="/places/new" element={<NewPlace />} />

        {/* Redirect all unmatched routes to "/" */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;
