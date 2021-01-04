import React from 'react';

interface IShareBannerCompany {
    company: "facebook" | "linkedin" | "twitter"
    text: string,
    href: string, 
}

const ShareBannerCompany: React.FC<IShareBannerCompany> = ({
    company,
    text,
    href
}) => {
    return (
        <li className={`if ${company}`}>
            <a className="if" href={href}>{text}</a>
        </li>
    );
}

interface IShareBanner {
    companies: Array<IShareBannerCompany>,
}

export const ShareBanner: React.FC<IShareBanner> = ({
    companies,
}) => {
    return (
        <div className = "if banner share">
            <div className = "if content">
                <ul className="if">
                    {companies.map( (item: IShareBannerCompany) => (
                        <ShareBannerCompany company={item.company} href={item.href} text={item.text}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ShareBanner;