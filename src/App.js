import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss"

const tempArr=[{
fName:"kuldeep",
lName:"nageshwar",
age:23,
email:"coolkn17@gmail.com",
onlineStatus:true
}]

function App() {
  return (
    <div className="App">
   <Header />   
  
<section className="main">
<Headline header="Posts"  desc="click the button to render post" tempArr={tempArr}/>  
</section>
    </div>
  );
} 

export default App;
 