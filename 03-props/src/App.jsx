import React from "react";
import Card from './components/Card';

const App = () => {
  return (
    <div className='parent'>
    
         <Card user='varun' age={20} img = 'https://plus.unsplash.com/premium_photo-1761779542229-ee0d4bb8a82f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8' />
         <Card user='varuna' age={19} img = 'https://plus.unsplash.com/premium_photo-1760583232675-44b82dcfc19f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
  
    </div>
  )
}
export default App;