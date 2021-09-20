import logo from './logo.svg';
import './App.css';
import data from './data'
import Navbar from './components/Navbar'
import Card from './components/Card'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <>
      <Navbar />
      <section className='section card__section'>
          {cards}
      </section>
    </>
  );
}

