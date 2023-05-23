import Banner from './components/Banner'
import './App.css';
import EnjoySection from './components/EnjoySection';
import WatchEveryWhere from './components/WatchEveryWhere';
import CreateProfileForChildren from './components/CreateProfileForChildren';
import DownloadYourProgram from './components/DownloadYourProgram';
import FreaquentlyAskedQuestions from './components/FreaquentlyAskedQuestions';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Banner/>
      <EnjoySection/>
      <WatchEveryWhere/>
      <CreateProfileForChildren/>
      <DownloadYourProgram/>
      <FreaquentlyAskedQuestions/>
      <Footer/>
    </div>
  );
}

export default App;
