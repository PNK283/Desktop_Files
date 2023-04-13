import './App.css';
import './style.css';
import './img.jpg'

function App() {
  return (
    <div className="App">
      <div class='navbar'>
        <ul>
         <li><h1 class='head1'>TUITION</h1></li>
         <li><h1 class='head2'>WORLD</h1></li>
         <div class='topnav-right '>
          <li><a href='#home'>HOME</a></li>
          <li><a href='#Aboutus'>ABOUT US</a></li>
          <li><a href='#our courses'>OUR COURSES</a></li>
          <li><a href='#Contact us'>CONTACT US</a></li>
          <li><a href='#Enquire form'>ENQUIRE</a></li>
          </div>
        </ul>
      </div>
        <div class='container'>
          <img src='https://www.finance-monthly.com/Finance-Monthly/wp-content/uploads/2019/08/iStock-1049293238.jpg' class='img_1'></img>
          <h1 class='h-container'>Welcome to Tuition world</h1>
          <div class='Sign_in-options'>
          <button class='tutor'>Tutor</button>
          <button class='student'>Student</button>
          <button class='institute  '>Institute</button>
          </div>
        </div>
    </div>
    
    
  );
}

export default App;
