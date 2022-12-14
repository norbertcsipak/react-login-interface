import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="justify-between mr-3">
      <hr class="my-8 h-px w-90 ml-3 bg-gray-200 border-0 dark:bg-gray-700"/>
      <Navbar />
      <hr class="my-3 h-px w-90 ml-3 bg-gray-200 border-0 dark:bg-gray-700"/>
      <Banner />
      <hr class="my-3 h-px w-90 ml-3 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SocialMedia />
   </div>
  );
}

export default App;
