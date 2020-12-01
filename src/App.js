import './App.css';
import Parent from './Parent';

function App() {
  return (
    <div className="App">
      {/* <Layout className="layout">
        <Header>
          <div className="logo" style={{ float: "left", marginLeft: '15px', fontSize: "1.3rem", color: "white" }}>
            Kelompok 19
          </div>
          <div style={{float: "right"}}>
           <Link background="rgba(255, 255, 255, 0.0)" href="https://www.w3schools.com">About</Link>
           <Link background="rgba(255, 255, 255, 0.0)" href="https://www.w3schools.com">Links</Link>
         </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="Components">
            <Parent bgcolor="#ededed" />
          </div>
        </Content>
      </Layout> */}
      <Parent />
    </div>
  );
}

export default App;
