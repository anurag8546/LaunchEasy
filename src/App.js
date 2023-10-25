import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="main_div">
      <div className="D_1">
        <div className='mplace'> Marketplace</div>
        <div className='etemp' >Email Templates</div>
        <div className='btc'>by the community, for the community.</div>
        <div className='free'>100s of free templates to help you craft the perfect marketing journey.</div>
      </div>

      <div className="container">
        <div className="left">
          <h2>Categories</h2>
          <ul>
            <li>
              <input type="checkbox" id="category1" />
              <label htmlFor="category1">Announcements</label>
            </li>
            <li>
              <input type="checkbox" id="category2" />
              <label htmlFor="category2">Educate & Inform</label>
            </li>
            <li>
              <input type="checkbox" id="category3" />
              <label htmlFor="category3">Invitations</label>
            </li>
            <li>
              <input type="checkbox" id="category4" />
              <label htmlFor="category4">Ocassions</label>
            </li>
          </ul>
        </div>

        <div className="right">
          <div className="rgttop">
            <div className="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" className="bg_box" placeholder= "🔍 Search Email Template"/>
            
            </div>
            <div className="sort-dropdown">
              <div className="dropdown">

               
                    <div className="xyz2">Sort by:</div>
                    <div className="rec"><button className="dropdown-button">Recent</button></div>
                    

                    <div className="dropdown-content">
                      <a href="#">Popular</a>
                      <a href="#">Latest</a>
                      <a href="#">Categories(Descending)</a>
                    </div>
                  </div>
                </div>
             
          </div>
          <div className="rgtbtm">
            <div className="bottom-content">
              <div className="category">
                <h3>Announcements</h3>
                <div className="cards">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div className="card" key={index}>
                      <img src={require(`../images/feature${index + 1}.png`)} alt={`Image ${index + 1}`} />
                      <p>Image {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="category">
                <h3>Educate & Inform</h3>
                <div className="cards">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div className="card" key={index}>
                             <img src={require(`../images/feature${index + 1}.png`)} alt={`Image ${index + 1}`} />
                      <p>Image {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="category">
                <h3>Invitations</h3>
                <div className="cards">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div className="card" key={index}>
                             <img src={require(`../images/feature${index + 1}.png`)} alt={`Image ${index + 1}`} />
                      <p>Image {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="category">
                <h3>Ocassions</h3>
                <div className="cards">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div className="card" key={index}>
                         <img src={require(`../images/feature${index + 1}.png`)} alt={`Image ${index + 1}`} />
                      <p>Image {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






    </div>



  );
}

export default App;
