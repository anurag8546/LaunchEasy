import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="main_div">
      {/*   
      <div>
       
    
          <div  className='div1'>
          <div className='mplace'>Marketplace</div>
            <div className = 'div2' style={{ color: '#24A148', fontSize: 56, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: 5 }}>Email Templates</div>
          </div>
          <div style={{ width: 1034, height: 0, left: 0, top: 100 }}>
            <div style={{ left: 0, top: 0, position: 'absolute', color: '#161616', fontSize: 56, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: 5, wordWrap: 'break-word' }}>by the community, for the community.</div>
            <div style={{ alignSelf: 'stretch', color: '#525252', fontSize: 20, fontFamily: 'Helvetica Neue', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word' }}>100s of free templates to help you craft the perfect marketing journey.</div>
        

          </div>


        
      </div> */}
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

                <div style={{ width: 150, height: 36, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 40, /*border: '1px #C6C6C6 solid', */justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'inline-flex' }}>
                  <div style={{ paddingLeft: 4, paddingRight: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'flex' }}>
                    <div style={{ color: '#161616', fontSize: 16, fontFamily: 'Helvetica Neue', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word' }}>Sort by:</div>
                    <button className="dropdown-button">Recent</button>

                    <div className="dropdown-content">
                      <a href="#">Popular</a>
                      <a href="#">Latest</a>
                      <a href="#">Categories(Descending)</a>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.25518 9.51143L9.41352 11.6698C9.73852 11.9948 10.2635 11.9948 10.5885 11.6698L12.7468 9.51143C13.2718 8.98643 12.8968 8.08643 12.1552 8.08643H7.83852C7.09685 8.08643 6.73018 8.98643 7.25518 9.51143Z" fill="#161616" />
                  </svg>
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
