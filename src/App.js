import logo from './logo.svg';
import './App.css';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';


function App() {
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </section>
  );
}

export default App;
