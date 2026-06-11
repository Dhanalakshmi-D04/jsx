import react from "react";
 const App = () => {

  {/*function btnClicked() {
    console.log("hi there");
  }
  return (
    <div>
      <button onClick= {btnClicked}>Click Here</button>

    </div>

     another method to cl function directly 
     <button onClick = { () => console.log("hi there") } > Click Here </button>
  ) */}
   function onChange (val) {
    console.log(val);
   }
   return (
    <div>
      <input onChange = { function(elem) {
        onChange(elem.target.value) }} type = "text" placeholder = "Enter here"/> 
      

    </div>
   )
 }
 export default App;