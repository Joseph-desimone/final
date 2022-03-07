import { use } from 'chai';
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; 
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { gerald } from './components/gerald';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';



export default function App() {

  const {useState} = React;
  const apiKey = 'b82e2284-6b30-4739-a005-19b90365c12c';
  const url = 'https://api.thecatapi.com/v1/images/search';
  const dogKey = '5fab3086-7493-4915-a9fa-7717dc7a0d80';
  const dogUrl = 'https://api.thedogapi.com/v1/images/search'



  return (
    <Container>
    <Router>
      <div className='App'>
        <ButtonGroup>
          <Button variant="outline-secondary">
          <Link to="/"><h1>Home</h1></Link>
          </Button>
          <Button variant="outline-secondary">
          <Link to="/cats"><h1>Cats</h1></Link>
          </Button>
          <Button variant="outline-secondary">
          <Link to="/dogs"><h1>Dogs</h1></Link>
          </Button>
        </ButtonGroup>
        <Switch>

          <Route path="/cats">
            <Felix about={['Felix is a gray cat and is very talkative']} />
            <Cooper about={['Cooper is also a gray cat and is very shy']} />
            <Gerald about={["Gerald is an orange cat and is very fluffy"]} />
            </Route>

          <Route path="/dogs">
            <Randall about={['Randall is a very good boy and loves treats.']} />
            <George about={['George is a very small dog and loves to play catch.']} />
            <Sonny about={['Sonny is the best dog and no other dog will ever top him.']} />
            
          </Route>

          <Route path="/">

            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
  );
  
  
  
  function Home() {
    const [ catUrl, setCatUrl ] = useState('https://cdn2.thecatapi.com/images/PYMhnN8sD.jpg');

    const getCat = () => {
      console.log();

      fetch(url)
        .then((res) => res.json())
        .then((cats) => {
          console.log('Cats: ', cats);
          const catUrl = cats[0].url; 

          setCatUrl(catUrl);
        })
        .catch((error) => {
          console.log('Oops...no cat to be found', error);
        });
    }
    console.log('Cat URL:', catUrl);
  return (
    <Container>
    <div className='button-wrapper App'>
      <h1>Welcome to the World of Pets!</h1>
      <p>Please navagate to the according tab and add your pet to our site!</p>
      <img src={catUrl} height="720" width='1272'></img>
      <p>Press the button to see some of the cats we have on our site!</p>
      <button onClick={getCat} variant='default' style={{color:"white", background: "Purple"}} >Click me!</button>
      <form>
  <label>
    Submit your pet here!:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
    
    </Container>
   ); 
  };
  

  function Dogs(props) {
  const { names } = props;
  


   
    
  return (
    <div>
      <h2>Doggos</h2>
     
      <ul>
      {names.map((dog, index) => (
    <Alert key={index} variant="primary">{dog}</Alert>
            ))}
      </ul>
          
      </div>
    );
  };



  function Gerald(props) {
  const { about } = props;
  const [likes, setCount] = useState(0);

  return (
    <div className="app">
      <ul>
        {about.map((geraldo, index) => (
          <Alert key={index} variant="primary">{geraldo} <img src="/images/pic.png" height="400px" width="300px"></img> <img src="/images/IMG_2484.jpg" height="400px" width="300px"></img> <img src="/images/IMG_2487.jpg" height="400px" width="250px"></img>
          <br></br>
          <h4>{likes}</h4>
          <div className='button-wrapper'>
          <button
          variant='default'
          style={{ color: "white", background: "Pink"}}
          onClick={() => setCount( likes+1 )}>👍</button>
          </div>
          </Alert>
        ))}
      </ul>
    
    </div>
  )
  };

  function Felix(props) {
  const { about } = props;
  const [likes, setCount] = useState(0);

  return (
    <div className='app'>
      <ul>
        {about.map((felixo, index) => (
          <Alert key={index} variant="primary">{felixo} <img src="/images/IMG_2481.jpg" height="400px" width="250px"></img> <img src="/images/IMG_2491.jpg" height="400px" width="250px"></img>
          <br></br>
          <h4>{likes}</h4>
          <div className='button-wrapper'>
          <button
          variant='default'
          style={{ color: "white", background: "Purple"}}
          onClick={() => setCount( likes+1 )}>👍</button>
          </div>
          </Alert>
        ))}
      </ul>
    </div>
  )
  };
  function Cooper(props) {
  const { about } = props;
  const [likes, setCount] = useState(0);

  return (
    <div className='app'>
      <ul>
        {about.map((coopy, index) => (
          <Alert key={index} variant="secondary">{coopy} <img src="/images/IMG_2256.jpg" height="400px" width="250px"></img>
          <br></br>
          <h4>{likes}</h4>
          <div className='button-wrapper'>
          <button
          variant='default'
          style={{ color: "white", background: "Blue"}}
           onClick={() => setCount( likes+1 )}>👍</button>
          </div>
          </Alert>
        ))}
      </ul>
    </div>
  )
  };






  function Randall(props) {
    const { about } = props;
    const [likes, setCount] = useState(0);
  
    return (
      <div className='app'>
        <ul>
          {about.map((felixo, index) => (
            <Alert key={index} variant="primary">{felixo} <img src="/images/treat doggo.jpg" height="400px" width="250px"></img> 
            <br></br>
            <h4>{likes}</h4>
            <div className='button-wrapper'>
            <button
            variant='default'
            style={{ color: "white", background: "Purple"}}
            onClick={() => setCount( likes+1 )}>👍</button>
            </div>
            </Alert>
          ))}
        </ul>
      </div>
    )
    };
    function George(props) {
      const { about } = props;
      const [likes, setCount] = useState(0);
    
      return (
        <div className='app'>
          <ul>
            {about.map((felixo, index) => (
              <Alert key={index} variant="primary">{felixo} <img src="/images/fetch.jpg" height="400px" width="500px"></img>
              <br></br>
              <h4>{likes}</h4>
              <div className='button-wrapper'>
              <button
              variant='default'
              style={{ color: "white", background: "Purple"}}
              onClick={() => setCount( likes+1 )}>👍</button>
              </div>
              </Alert>
            ))}
          </ul>
        </div>
      )
      };








      function Sonny(props) {
        const { about } = props;
        const [likes, setCount] = useState(0);
      
        return (
          <div className='app'>
            <ul>
              {about.map((felixo, index) => (
                <Alert key={index} variant="primary">{felixo} <img src="/images/IMG_3665.jpg" height="400px" width="250px"></img> <img src="/images/IMG_3545.jpg" height="400px" width="250px"></img> <img src="/images/IMG_3125.jpg" height="400px" width="250px"></img>
                <br></br>
                <h4>{likes}</h4>
                <div className='button-wrapper'>
                <button
                variant='default'
                style={{ color: "white", background: "Purple"}}
                onClick={() => setCount( likes+1 )}>👍</button>
                </div>
                </Alert>
              ))}
            </ul>
          </div>
        )
        };



};

