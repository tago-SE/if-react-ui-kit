import React from 'react';
import { IFHeader } from '../If-Design-System/Header';

/*
    Todo add clickable mini buttons as is shown under
*/
export const GrowthTreeMock = () => {

    return (
        <div className="if block">
            <div className="if container">
                <div className="ecmt-image ecmt-image-block ecmt-image-block-wide ecmt-IFS-05555" data-src="ecmt-IFS-05555">
                    <div className="if" id="X">
                        <header className="block-header">
                        <span className="text-above-pageheading screaming-frog-legacy-property"></span>
                        <h2 className="banner-heading">Vid ditt företags sida</h2>
                        <span className="text-below-pageheading screaming-frog-legacy-property"></span>
                        </header>
                        <div className=""><p>Varje dag möter vi människor som följt sin dröm om att driva eget företag. Ibland ställs du inför utmaningar, och då vill vi finnas där för att göra vardagen tryggare för dig. De företag som råkat illa ut, är också våra nöjdaste kunder och ger oss 9 av 10 i betyg.&nbsp;</p>
                        <p>Som försäkringsbolag vet vi att varje företag är unikt. För oss är det viktigt att erbjuda rätt försäkring och att du får den hjälp du behöver, när du behöver den. Genom personlig hjälp när du ringer oss eller via smidiga tjänster online. Vi är vid din sida.</p>
                        <p>Välkommen till If.</p></div>
                    </div>
                    <div className="if overlay">
                        <span className="if image lifestyle" style={{height:"100%", width: "100%"}}>
                            <img src="https://www.if.no/magasinet/images/2020/04/av1-in-group-work-1560x900.jpg" alt="X" className="if " style={{height:"100%", width: "100%"}}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const GrowthTreeMockColumn = () => {
    const points = [
        { 
            name: "Developer Conferences",
            text: "Our own yearly developer conference",
        },
        { 
            name: "Developer Conferences",
            text: "Our own yearly developer conference",
        },
        { 
            name: "Developer Conferences",
            text: "Our own yearly developer conference",
        },
        { 
            name: "Developer Conferences",
            text: "Our own yearly developer conference",
        },
        { 
            name: "Developer Conferences",
            text: "Our own yearly developer conference",
        },
        { 
            name: "Developer Conferences",
            text: "Our own yearly developer conference",
        },
        { 
            name: "Developer Conferences",
            text: "Our own yearly developer conference",
        },
    ];
      
    /*
     <section className="if split">
            <div className="if container">
              <div className="if image" style={{backgroundImage: "url(https://test.developer.ifext.biz/content/grown_in_if.jpg)"}}></div>
              <div className="if content">
                <h2 className="if heading larger">How you grow in a year at If</h2>
                <p className="if text lead"><b>Spara till barnen och ge bort en tryggare framtid</b></p>
                <p className="if text lead"><b>Spara till barnen och ge bort en tryggare framtid</b></p>
                <p className="if text body">
                  Nu är semestertiden över för de flesta av oss och förhoppningsvis har ni haft en härlig sommar. Utöver
                  strand, hängmatta och grill så innebär ledigheten en möjlighet att reflektera och stanna upp. För mig
                  innebär höstterminen en möjlighet att sätta upp nya mål. Det är ett utmärkt tillfälle att ta tag i de
                  där sakerna som inte riktigt prioriterats de senaste månaderna. Jag ser över sparandet, försäkringar
                  och diverse andra viktiga saker som inte känns lika intressant under de varmaste sommarmånaderna.
                </p>
              </div>
            </div>
          </section>
          */
        return <section className="if split">
          <div className="if container">
            <div className="if image" style={{backgroundImage: "url(https://test.developer.ifext.biz/content/grown_in_if.jpg)"}}></div>
            {/* Hero content! */}
            <div className="if content">
                <IFHeader level={2} size="large" trailingClassName="center" style={{ bottomMargin: "4rem"}}>How you grow in a tear at If</IFHeader>
                <ul className="if crosslinks studio one" data-anatomy="outline right">
                {points.map(listItemData => <>
                    <li className="if">
                    <a className="if crosslink studio" href="/asd">
                    {/*<img className="if image" src="https://if-design-cdn.azureedge.net/images/documentation/studio/If-studio-documents-IFS-04772_PNG.PNG"/>*/}
                    <p className="if text lead">
                        <span className="if">
                        {listItemData.name}
                        <span className="if inline-nowrap">
                            {/*<span className="if arrow"></span>*/}
                        </span>
                        </span>
                    </p>
                    <p className="if text meta">{listItemData.text}</p>
                    </a>
                </li>
                </>)}
                </ul>
                <span className="dissection outline right"/>
            </div>
            
          </div> 
        </section>
}

export default GrowthTreeMock;