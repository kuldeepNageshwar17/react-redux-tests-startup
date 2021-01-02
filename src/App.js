import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss"

function App() {
  return (
    <div className="App">
   <Header />   
  
<section className="main">
<Headline header="Posts"  desc="click the button to render post"/>  
</section>
    </div>
  );
}

export default App;
 