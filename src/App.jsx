
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Row from './Components/Row'
import requests from './requests'



function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row isPoster={true} title="Trending in India" fetchUrl={requests.fetchTrending}/>
     <Row isPoster={true} title="Top Rated Movie" fetchUrl={requests.fetchTopRated}/>
     <Row isPoster={true} title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row isPoster={true} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row isPoster={true} title="Horror Movies" fetchUrl={requests. fetchHorrorMovies}/>
     <Row isPoster={true} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row isPoster={true} title="Documentaries" fetchUrl={requests. fetchDocumentaries}/>
    </div>
  );
}

export default App;
