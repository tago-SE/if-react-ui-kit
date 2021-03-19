import React from 'react';

export const MockProductsMenu = () => {

    const [viewAll, setViewAll] = React.useState(false);
    
    return (
        <div className="if holder ">
            <div className="if description">
                <strong className="if">All data products</strong>
                <button onClick={() => setViewAll(!viewAll)} type="button" className="if toggle-all">View all</button>
            </div>
            <ul className="if crosslinks buttons two is-open">
                <li className="if">
                    <a className="if crosslink button car" rel="" href="/products/mobility/" >Other</a>
                    <div className={`if menu${viewAll ? " is-open" : ""}`}>
                        <ul className="if">
                            <li className="if">
                                <a className="if" rel="" href="/products/mobility/car-insurance-norway/">
                                    Car Insurance Norway
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}