import { BrowserRouter as Router, Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import StartAProject from "./components/StartAProject"
import ExploreOurWork from "./components/ExploreOurWork"
import NotFoundPage from './pages/NotFoundPage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import WhoWeArePage from './pages/WhoWeArePage'
import OurWorkPage from './pages/OurWorkPage'
import CursorGlow from './components/CursorGlow'

import Resource from './pages/Resource'
const App = () => {
  return (

    <Router>
      <CursorGlow/>
      <Routes>
        <Route path ="/" element = {<MainLayout/>}>
        <Route index element = {<HomePage/>}/>
        <Route path="/start-a-project" element={<StartAProject/>}/>
        <Route path="/explore-our-work" element={<ExploreOurWork/>}/>
        <Route path="/what-we-do" element={<WhatWeDoPage/>}/>
        <Route path="/who-we-are" element={<WhoWeArePage/>}/>
        <Route path="/our-work" element={<OurWorkPage/>}/>
         <Route path="/resources" element={<Resource />} />
        
        </Route>
         <Route path="*" element={<NotFoundPage/>}/>
      </Routes>

    </Router>
   
  )
}

export default App