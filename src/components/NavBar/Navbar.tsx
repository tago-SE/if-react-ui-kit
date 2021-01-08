import React from 'react';
import { Nav } from './Navbar.elements';

const Navbar = () => {
    /*
        Mock Global Header Implementation
    */
    return (
        <header className="if global-header">
        <a href="#content" className="if axe skip-to-content">Skip to content</a>
        <nav className="if primary">
          <div className="if mobile">
            <ul className="if mobile-menu-list">
              <li className="if mobile-menu-item logo-holder">
                <a href="/" className="if mobile-menu-action logo small"><span className="if axe sr-only">Home</span></a>
              </li>
              <li className="if mobile-menu-item shopping-cart-holder">
                <a href="/my-pages.html" className="if mobile-menu-action shopping-cart">Varukorg</a>
              </li>
              <li className="if mobile-menu-item login-holder">
                <button type="button" className="if mobile-menu-action button login">Logga in</button>
                <div className="if menu accordion">
                  <ul className="if">
                    <li className="if"><a href="/index-logged-in.html" className="if">Privat</a></li>
                    <li className="if"><a href="/index-logged-in.html" className="if">Företag</a></li>
                    <li className="if"><a href="/index-logged-in.html" className="if">Stora företag</a></li>
                    <li className="if"><a href="/index-logged-in.html" className="if">Mäklare</a></li>
                  </ul>
                </div>
              </li>
              <li className="if mobile-menu-item mobile-menu-holder">
                <button type="button" className="if mobile-menu-action button mobile-menu">Meny</button>
                <div className="if menu accordion">
                  <div className="if mobile-search">
                    <form className="if">
                      <input type="search" placeholder="Sök If.se" className="if input-field js-if-mobile-search" name="if-mobile-search"/>
                      <label htmlFor="if-mobile-search" className="if"><span className="if axe sr-only">Search If</span></label>
                    </form>
                  </div>
                  <ul className="if">
                    <li className="if is-parent">
                      <button type="button" className="if">
                        Privat
                      </button>
                      <div className="if menu">
                        <ul className="if">
                          <li className="if is-parent">
                            <a href="/" className="if">Försäkringar</a>
                            <div className="if menu">
                              <ul className="if">
                                <li className="if is-parent">
                                  <a href="/" className="if"><span aria-hidden="true" className="if icon ui house"></span>Hem</a>
                                  <div className="if menu">
                                    <ul className="if">
                                      <li className="if"><a href="/adasdsad" className="if">Villaförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Hyresrättförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Bostadsrättförsäkring</a></li>
                                      <li className="if">
                                        <a href="/adasdsad" className="if">Försäkring vid studier eller praktik utomlandsförsäkring</a>
                                      </li>
                                      <li className="if"><a href="/adasdsad" className="if">Fritidshusförsäkring</a></li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="if is-parent">
                                  <a href="/" className="if"><span aria-hidden="true" className="if icon product car"></span>Fordon</a>
                                  <div className="if menu">
                                    <ul className="if">
                                      <li className="if"><a href="/adasdsad" className="if">Bilförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">MC-försäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Mopedförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Husbildsförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Släpvagnsförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Visa fler...</a></li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="if is-parent">
                                  <a href="/" className="if"><span aria-hidden="true" className="if icon product paw"></span>Djur</a>
                                  <div className="if menu">
                                    <ul className="if">
                                      <li className="if"><a href="/adasdsad" className="if">Hundförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Kattförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Hästförsäkring</a></li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="if is-parent">
                                  <a href="/" className="if"><span aria-hidden="true" className="if icon product bag"></span>Resa</a>
                                  <div className="if menu">
                                    <ul className="if">
                                      <li className="if"><a href="/adasdsad" className="if">Reseförsäkring</a></li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="if is-parent">
                                  <a href="/" className="if"><span aria-hidden="true" className="if icon symbol single-body"></span>Person</a>
                                  <div className="if menu">
                                    <ul className="if">
                                      <li className="if"><a href="/adasdsad" className="if">Personförsäkringar</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Barnförsäkringar</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Gravidförsäkringar</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Livförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Olycksfallsförsäkring</a></li>
                                      <li className="if"><a href="/adasdsad" className="if">Visa fler..</a></li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="if is-parent">
                                  <a href="/" className="if"><span aria-hidden="true" className="if icon product boat"></span>Boat</a>
                                  <div className="if menu">
                                    <ul className="if">
                                      <li className="if"><a href="/adasdsad" className="if">Båtförsäkring</a></li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="if"><a href="/" className="if">Skador</a></li>
                          <li className="if"><a href="/" className="if">Kundservice</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className="if">
                      <a href="/" className="if">Företag</a>
                    </li>
                    <li className="if">
                      <a href="/" className="if">Stora Företag</a>
                    </li>
                  </ul>
                  <div className="if mobile-language">
                    <ul className="if mobile-language-list">
                      <li className="if mobile-language-item">
                        <button type="button" className="if mobile-language-action" data-language="nb">NB</button>
                      </li>
                      <li className="if mobile-language-item">
                        <button type="button" className="if mobile-language-action" data-language="da">DA</button>
                      </li>
                      <li className="if mobile-language-item is-active">
                        <button type="button" className="if mobile-language-action" data-language="sv">SV</button>
                      </li>
                      <li className="if mobile-language-item">
                        <button type="button" className="if mobile-language-action" data-language="fi">FI</button>
                      </li>
                      <li className="if mobile-language-item">
                        <button type="button" className="if mobile-language-action" data-language="en">EN</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="if desktop container">
            <ul className="if desktop-menu-list">
              <li className="if desktop-menu-item">
                <button type="button" className="if desktop-menu-action button is-active">Privat</button>
              </li>
              <li className="if desktop-menu-item">
                <button type="button" className="if desktop-menu-action button desktop-menu-action">Företag</button>
              </li>
              <li className="if desktop-menu-item">
                <button type="button" className="if desktop-menu-action button desktop-menu-action">Stora företag</button>
              </li>
              <li className="if  desktop-menu-item change-language-holder is-parent">
                <button type="button" className="if desktop-menu-action change-language">SV</button>
                <div className="if menu top">
                  <ul className="if">
                    <li className="if">
                      <button type="button" className="if" data-language="nb">Norsk bokmål</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="da">Dansk</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="sv">Svenska</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="fi">Suomen kieli</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="kl">Kalaallit oqaasii</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="en">English</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="lv">Latviešu valoda</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="lt">Lietuvių kalba</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="et">Eesti keel</button>
                    </li>
                    <li className="if">
                      <button type="button" className="if" data-language="ru">Pусский язык</button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="if desktop-menu-item login-holder">
                <button type="button" className="if desktop-menu-action button login">Logga in</button>
                <div className="if menu">
                  <ul className="if">
                    <li className="if"><a href="/index-logged-in.html" className="if">Privat</a></li>
                    <li className="if"><a href="/my-business.html" className="if">Företag</a></li>
                    <li className="if"><a href="/index-logged-in.html" className="if">Stora företag</a></li>
                    <li className="if"><a href="/index-logged-in.html" className="if">Mäklare</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="if secondary">
          <div className="if desktop container">
            <ul className="if desktop-menu-list">
              <li className="if desktop-menu-item logo-holder">
                <a href="/" className="if desktop-menu-action logo small"><span className="if axe sr-only">Home</span></a>
              </li>
              <li className="if desktop-menu-item is-parent">
                <button type="button" className="if desktop-menu-action">Försäkringar</button>

                <div className="if tertiary" style={{width: "997px"}}>
                  <div className="if container">
                    <div className="if holder">
                      <div className="if description">
                        <strong className="if">Försäkringskategorier</strong>&nbsp;<button type="button" className="if toggle-all js-toggle-insurance-sub-categories">
                          Visa alla försäkringar
                        </button>
                      </div>
                      <ul className="if crosslinks">
                        <li className="if">
                          <a href="/" className="if crosslink button house">Hem</a>
                          <div className="if menu">
                            <ul className="if">
                              <li className="if"><a href="/adasdsad" className="if">Villaförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Hyresrättförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Bostadsrättförsäkring</a></li>
                              <li className="if">
                                <a href="/adasdsad" className="if">Försäkring vid studier eller praktik utomlandsförsäkring</a>
                              </li>
                              <li className="if"><a href="/adasdsad" className="if">Fritidshusförsäkring</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="if">
                          <a href="/" className="if crosslink button vehicles">Fordon</a>
                          <div className="if menu">
                            <ul className="if">
                              <li className="if"><a href="/adasdsad" className="if">Bilförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">MC-försäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Mopedförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Husbildsförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Släpvagnsförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Visa fler...</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="if">
                          <a href="/" className="if crosslink button paw">Djur</a>
                          <div className="if menu">
                            <ul className="if">
                              <li className="if"><a href="/adasdsad" className="if">Hundförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Kattförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Hästförsäkring</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="if">
                          <a href="/" className="if crosslink button bag">Resa</a>
                          <div className="if menu">
                            <ul className="if">
                              <li className="if"><a href="/adasdsad" className="if">Reseförsäkring</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="if">
                          <a href="/" className="if crosslink button single-body">Person</a>
                          <div className="if menu">
                            <ul className="if">
                              <li className="if"><a href="/adasdsad" className="if">Personförsäkringar</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Barnförsäkringar</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Gravidförsäkringar</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Livförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Olycksfallsförsäkring</a></li>
                              <li className="if"><a href="/adasdsad" className="if">Visa fler..</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="if">
                          <a href="/" className="if crosslink button boat">Boat</a>
                          <div className="if menu">
                            <ul className="if">
                              <li className="if"><a href="/adasdsad" className="if">Båtförsäkring</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="if holder">
                      <div className="if showcase">
                        <div className="if description">
                          <strong className="if">Populära försäkringar</strong>
                        </div>

                        <ul className="if">
                          <li className="if"><a className="if" href="/asd">Bilförsäkring</a></li>
                          <li className="if"><a className="if" href="/asd">Reseförsäkring</a></li>
                          <li className="if"><a className="if" href="/asd">Gravidförsäkring</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="if desktop-menu-item">
                <a href="/my-pages.html" className="if desktop-menu-action">Vid skada</a>
              </li>
              <li className="if desktop-menu-item">
                <a href="/my-pages.html" className="if desktop-menu-action">Kundservice</a>
              </li>
            </ul>
            <ul className="if global-menu-list global">
              <li className="if global-menu-item"><a href="/my-pages.html" className="if global-menu-action search">Sök</a></li>
              <li className="if global-menu-item shopping-cart-holder">
                <a href="/my-pages.html" className="if global-menu-action shopping-cart">Varukorg</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;
