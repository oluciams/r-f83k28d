import React, { useState } from 'react';
import './App.css';

function App (){

  const [value, setValue] = useState(0)

  return (

    <div>
        <span className="value">{value}</span>
        <button onClick={()=>setValue(value + 1)} id="inc">Incrementa</button>
      </div>
  )

} 

export default App


// class App extends Component {
//   render() {    

//     return (
//       <div>
//         <span className="value">0</span>
//         <button id="inc">Incrementa</button>
//       </div>
//     );
//   }
// }

// export default App;
