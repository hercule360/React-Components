import './App.css';
import Navb from './components/Navb';
import Product from './components/Product';
import Title from './components/Title';

function App() {
  const styleProp = {color: 'red',fontSize: '33px' }
  return (
    <div className="App">
      <Navb />
     <Title props={styleProp} />
     <div className='cards'>
    <Product mark='ATHOL MGHREB'  country ='Tunis'   name='plante pomme '> < img src='https://minimum-design.com/wp-content/uploads/2019/05/cache-pot-bois-noir-design-geometrique-et-minimaliste-apple-decoration-scandinave-5cd02a82.jpg' alt='abc' />  </Product>
    <Product mark='ETHIQ PARIS'  country ='France'   name='plante ETHIQ '> < img src='https://www.e-thiq.fr/2964/pot-pour-plantes-apple-naturel.jpg' alt='abc' />  </Product>
    <Product mark='ETniy UK'   country ='Irlend IKEA'  name='plante etniy '> < img src='https://i.etsystatic.com/13346155/c/2268/2268/0/0/il/40e6e5/1889697591/il_300x300.1889697591_n2q6.jpg' alt='abc' />  </Product>
    </div>
    
    
    </div>
  )
}
 
export default App;
