import React, { Component } from 'react';
import '../public/styles.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
        <div className="mdl-layout mdl-js-11layout mdl-layout--fixed-header">
          <Header />
          <main className="mdl-layout__content">
            <div className="mdl-layout__tab-panel is-active" id="overview">
              <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                <div className="mdl-card mdl-cell mdl-cell--12-col">
                  <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                    <h4 className="mdl-cell mdl-cell--12-col">Details</h4>
                    <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                      <div className="section__circle-container__circle mdl-color--primary"></div>
                    </div>
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                      <h5>Lorem ipsum dolor sit amet</h5>
                      Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
                    <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                      <div className="section__circle-container__circle mdl-color--primary"></div>
                    </div>
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                      <h5>Lorem ipsum dolor sit amet</h5>
                      Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
                    <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                      <div className="section__circle-container__circle mdl-color--primary"></div>
                    </div>
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                      <h5>Lorem ipsum dolor sit amet</h5>
                      Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
                  </div>
                  <div className="mdl-card__actions">
                    <a href="#" className="mdl-button">Read our features</a>
                  </div>
                </div>
                <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn2">
                  <i className="material-icons">more_vert</i>
                </button>
                <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn2">
                  <li className="mdl-menu__item">Lorem</li>
                  <li className="mdl-menu__item" disabled>Ipsum</li>
                  <li className="mdl-menu__item">Dolor</li>
                </ul>
              </section>

              <section className="section--footer mdl-color--white mdl-grid">
                <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
                </div>
                <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
                <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
                </div>
                <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
              </section>
            </div>

            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
