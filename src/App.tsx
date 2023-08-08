import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(25);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <title>Document</title>
      <link rel="stylesheet" href="C:\Users\LENOVO\OneDrive\Masaüstü\smart-home-control-panel\src\App.css" />
      <div className="container">
        <div className="pagePart">
          <div className="header">
            <div className="input-container">
              <input type="text" defaultValue="SENARYO İSMİ GİRİNİZ" />
              <div className="btnScenario">
                <div className="cancelDiv">
                  <button>
                    <span className="material-symbols-outlined"> close </span>
                  </button>
                  <span style={{color: 'white'}}>Cancel</span>
                </div>
                <div className="saveDiv">
                  <button>
                    <span className="material-symbols-outlined"> download </span>
                  </button>
                  <span style={{color: 'white'}}>Save</span>
                </div>
              </div>
            </div>
            <form className="radio-container">
              <div className="radio-div">
                <label htmlFor="hepsi">Hepsi</label>
                <input type="radio" id="hepsi" name="Hepsi" defaultValue="hepsi" />
              </div>
              <div className="radio-div">
                <label htmlFor="alan">Alan</label>
                <input type="radio" id="alan" name="Alan" defaultValue="alan" />
              </div>
              <div className="radio-div">
                <label htmlFor="tip">Tip</label>
                <input type="radio" id="tip" name="Tip" defaultValue="tip" />
              </div>
              <div className="radio-div">
                <label htmlFor="az">a-z</label>
                <input type="radio" id="az" name="AZ" defaultValue="az" />
              </div>
            </form>
          </div>
          <div className="lighting">
            <div className="label">
              <span>2</span>
            </div>
            <div className="lighting-icon">
              <span className="material-symbols-outlined"> lightbulb </span>
            </div>
            <div className="lighting-switch">
              <button className="lighting-btn">I</button>
              <button className="lighting-btn">0</button>
            </div>
            <div className="lighting-add">
              <span className="add-lighting">EKLE</span>
            </div>
          </div>
          <div className="lighting">
            <div className="label">
              <span>3</span>
            </div>
            <div className="lighting-icon">
              <span className="material-symbols-outlined"> lightbulb </span>
            </div>
            <div className="lighting-switch">
              <button className="lighting-btn">I</button>
              <button className="lighting-btn">0</button>
            </div>
            <div className="lighting-add">
              <span className="add-lighting">EKLE</span>
            </div>
          </div>
          <div className="lighting">
            <div className="label">
              <span>vana</span>
            </div>
            <div className="lighting-icon">
              <span className="material-symbols-outlined"> valve </span>
            </div>
            <div className="lighting-switch">
              <button className="lighting-btn">I</button>
              <button className="lighting-btn">0</button>
            </div>
            <div className="lighting-add">
              <span className="add-lighting">EKLE</span>
            </div>
          </div>
          <div className="term">
            <div className="label">
              <span>panel<br />combi</span>
            </div>
            <div className="term-icon" style={{width: '10%'}}>
              <span className="material-symbols-outlined"> thermometer </span>
            </div>
            <div className="term-switch">
              <button className="term-btn" onClick={decreaseCount}>
                <span style={{fontSize: '2.5rem', padding: 0, margin: 0}}>-</span>
              </button>
            </div>
            <div className="term-value">
              <span>{count.toFixed(1)}</span>
            </div>
            <div className="term-switch">
              <button className="term-btn" onClick={increaseCount}>
                <span style={{fontSize: '2.5rem', padding: 0, margin: 0}}>+</span>
              </button>
            </div>
            <div className="lighting-add">
              <span className="add-lighting">EKLE</span>
            </div>
          </div>
          <div className="lighting">
            <div className="label">
              <span>yakut</span>
            </div>
            <div className="lighting-icon">
              <span className="material-symbols-outlined"> lightbulb </span>
            </div>
            <div className="lighting-switch">
              <button className="lighting-btn">I</button>
              <button className="lighting-btn">0</button>
            </div>
            <div className="lighting-add">
              <span className="add-lighting">EKLE</span>
            </div>
          </div>
          <div className="term">
            <div className="label">
              <span>kombi</span>
            </div>
            <div className="term-icon" style={{width: '10%'}}>
              <span className="material-symbols-outlined"> thermometer </span>
            </div>
            <div className="term-switch">
              <button className="term-btn" onClick={decreaseCount}>
                <span style={{fontSize: '2.5rem', padding: 0, margin: 0}}>-</span>
              </button>
            </div>
            <div className="term-value">
              <span>{count.toFixed(1)}</span>
            </div>
            <div className="term-switch">
              <button className="term-btn" onClick={increaseCount}>
                <span style={{fontSize: '2.5rem', padding: 0, margin: 0}}>+</span>
              </button>
            </div>
            <div className="lighting-add">
              <span className="add-lighting">EKLE</span>
            </div>
          </div>
        </div>
        <div className="pagePart">
          <div className="delay">
            <div className="label" style={{width: '25%'}}>
              <span>Gecikme Süresi</span>
            </div>
            <div className="delay-buttons">
              <button className="delay-btn">-10</button>
              <button className="delay-btn">-1</button>
            </div>
            <div className="delay-value">
              <span>00sn</span>
            </div>
            <div className="delay-buttons">
              <button className="delay-btn">+1</button>
              <button className="delay-btn">+10</button>
            </div>
          </div>
          <div className="row">
            <div className="row-start">
              <div className="label" style={{width: '40%'}}><span>Alarm</span></div>
              <div className="row-icons">
                <span className="material-symbols-outlined">
                  notifications_active
                </span>
                <button className="info-btn">EV</button>
              </div>
            </div>
            <div className="row-end">
              <div className="up-arrow">
                <span className="material-symbols-outlined"> north </span>
              </div>
              <div className="down-arrow">
                <span className="material-symbols-outlined"> south </span>
              </div>
              <div className="delete-btn">
                <span className="material-symbols-outlined"> delete </span>
              </div>
            </div>
          </div>
          <div className="delay">
            <div className="label" style={{width: '25%'}}>
              <span>Gecikme Süresi</span>
            </div>
            <div className="delay-buttons">
              <button className="delay-btn">-10</button>
              <button className="delay-btn">-1</button>
            </div>
            <div className="delay-value">
              <span>00sn</span>
            </div>
            <div className="delay-buttons">
              <button className="delay-btn">+1</button>
              <button className="delay-btn">+10</button>
            </div>
          </div>
          <div className="row">
            <div className="row-start">
              <div className="label" style={{width: '40%'}}><span>4</span></div>
              <div className="row-icons">
                <span className="material-symbols-outlined"> lightbulb </span>
                <button className="info-btn">0</button>
              </div>
            </div>
            <div className="row-end">
              <div className="up-arrow">
                <span className="material-symbols-outlined"> north </span>
              </div>
              <div className="down-arrow">
                <span className="material-symbols-outlined"> south </span>
              </div>
              <div className="delete-btn">
                <span className="material-symbols-outlined"> delete </span>
              </div>
            </div>
          </div>
          <div className="delay">
            <div className="label" style={{width: '25%'}}>
              <span>Gecikme Süresi</span>
            </div>
            <div className="delay-buttons">
              <button className="delay-btn">-10</button>
              <button className="delay-btn">-1</button>
            </div>
            <div className="delay-value">
              <span>00sn</span>
            </div>
            <div className="delay-buttons">
              <button className="delay-btn">+1</button>
              <button className="delay-btn">+10</button>
            </div>
          </div>
          <div className="row">
            <div className="row-start">
              <div className="label" style={{width: '40%'}}><span>Garaj2</span></div>
              <div className="row-icons">
                <span className="material-symbols-outlined"> lightbulb </span>
                <button className="info-btn">I</button>
              </div>
            </div>
            <div className="row-end">
              <div className="up-arrow">
                <span className="material-symbols-outlined"> north </span>
              </div>
              <div className="down-arrow">
                <span className="material-symbols-outlined"> south </span>
              </div>
              <div className="delete-btn">
                <span className="material-symbols-outlined"> delete </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
