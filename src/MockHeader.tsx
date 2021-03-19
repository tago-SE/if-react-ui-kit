import React from 'react';
import { GlobalHeader, SecondaryNavbar, SecondaryParentItem } from './components/If-Design-System/GlobalMenu';
import { GlobalHeaderStore } from './components/If-Design-System/GlobalMenu/GlobalHeaderContext';
import { Container, Holder } from './components/If-Design-System/Container';
import { MockProductsMenu } from './components/If-Design-System/GlobalMenu/MockProductsMenu';

export const MockHeader = () => {

    // React.useEffect(() => {
    //     window.addEventListener("dblclick", handleClick);

    //     return ();
    //   }, []);
    return null;
    return (
    <GlobalHeaderStore>
    <GlobalHeader isSticky style={{backgroundColor: "red"}}>
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
            <li className="if mobile-menu-item mobile-menu-holder is-open">
            <button type="button" className="if mobile-menu-action button mobile-menu">Meny</button>
            <div className="if menu accordion is-open">
                <div className="if mobile-search">
                <form className="if">
                    <input
                    type="search"
                    placeholder="Sök If.se"
                    className="if input-field js-if-mobile-search"
                    name="if-mobile-search"
                    />
                    <label htmlFor="if-mobile-search" className="if"><span className="if axe sr-only">Search If</span></label>
                </form>
                <div className="if quick-links-holder is-active">
                    <p className="if text meta">Snabblenkär</p>
                    <ul className="if quick-links">
                    <li className="if"><a href="/" className="if">Buy insurance</a></li>
                    <li className="if"><a href="/" className="if">Buy insurance</a></li>
                    <li className="if"><a href="/" className="if">Buy insurance</a></li>
                    <li className="if"><a href="/" className="if">Buy insurance</a></li>
                    <li className="if"><a href="/" className="if">Buy insurance</a></li>
                    <li className="if"><a href="/" className="if">Buy insurance</a></li>
                    </ul>
                </div>
                </div>
                <ul className="if is-open">
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
                                    <a href="/adasdsad" className="if"
                                        >Försäkring vid studier eller praktik utomlandsförsäkring</a
                                    >
                                    </li>
                                    <li className="if"><a href="/adasdsad" className="if">Fritidshusförsäkring</a></li>
                                </ul>
                                </div>
                            </li>
                            <li className="if is-parent">
                                <a href="/" className="if"
                                ><span aria-hidden="true" className="if icon product car"></span>Fordon</a
                                >
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
                                <a href="/" className="if"
                                ><span aria-hidden="true" className="if icon product paw"></span>Djur</a
                                >
                                <div className="if menu">
                                <ul className="if">
                                    <li className="if"><a href="/adasdsad" className="if">Hundförsäkring</a></li>
                                    <li className="if"><a href="/adasdsad" className="if">Kattförsäkring</a></li>
                                    <li className="if"><a href="/adasdsad" className="if">Hästförsäkring</a></li>
                                </ul>
                                </div>
                            </li>
                            <li className="if is-parent">
                                <a href="/" className="if"
                                ><span aria-hidden="true" className="if icon product bag"></span>Resa</a
                                >
                                <div className="if menu">
                                <ul className="if">
                                    <li className="if"><a href="/adasdsad" className="if">Reseförsäkring</a></li>
                                </ul>
                                </div>
                            </li>
                            <li className="if is-parent">
                                <a href="/" className="if"
                                ><span aria-hidden="true" className="if icon symbol single-body"></span>Person</a
                                >
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
                                <a href="/" className="if"
                                ><span aria-hidden="true" className="if icon product boat"></span>Boat</a
                                >
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
              <a href="/" className="if desktop-menu-action button is-active">Privat</a>
            </li>
            <li className="if desktop-menu-item">
            <a href="/" className="if desktop-menu-action button desktop-menu-action">Företag</a>
            </li>
            <li className="if desktop-menu-item">
            <a href="/" className="if desktop-menu-action button desktop-menu-action">Stora företag</a>
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
    <SecondaryNavbar>
        <div className="if desktop container">
            {/* <div className="if desktop-search is-open">
                <form className="if">
                <input
                    type="search"
                    placeholder="Sök If.se"
                    className="if input-field large-search js-if-desktop-search"
                    name="if-desktop-search"
                />
                <label htmlFor="if-desktop-search" className="if"><span className="if axe sr-only">Search If</span></label>
                <button type="button" className="if close" title="Closes the search">
                    <span className="if axe sr-only">Close search</span>
                </button>
                </form>
                <div className="if tertiary is-open" style={{width: "360px"}}>
                    <div className="if container">
                        <div className="if quick-links-holder">
                        <p className="if text meta">Snabblenkär</p>
                        <ul className="if quick-links">
                            <li className="if"><a href="/" className="if">Buy insurance</a></li>
                            <li className="if"><a href="/" className="if">Buy insurance</a></li>
                            <li className="if"><a href="/" className="if">Buy insurance</a></li>
                            <li className="if"><a href="/" className="if">Buy insurance</a></li>
                            <li className="if"><a href="/" className="if">Buy insurance</a></li>
                            <li className="if"><a href="/" className="if">Buy insurance</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <ul className="if desktop-menu-list">
                <li className="if desktop-menu-item logo-holder">
                    <a href="/" className="if desktop-menu-action logo small"><span className="if axe sr-only">Home</span></a>
                </li>
                <SecondaryParentItem displayName="Cars">
                    <Container>
                        <MockProductsMenu />
                        <div className="if holder">
            
                        </div>
                    </Container>
                </SecondaryParentItem>
                <SecondaryParentItem displayName="Cars">
                    <Container>
                        <MockProductsMenu />
                        <div className="if holder">
            
                        </div>
                    </Container>
                </SecondaryParentItem>
                {/* <li className="if desktop-menu-item is-parent is-active">
                    <button type="button" className="if desktop-menu-action">
                        Products
                    </button>
                    <div className="if tertiary is-open">
                        
                    </div>
                </li> */}
            </ul>
        </div>
        </SecondaryNavbar>
    </GlobalHeader>
    </GlobalHeaderStore>
    );
}