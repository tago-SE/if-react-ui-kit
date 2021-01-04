export const TeaserList: React.FC<{[x: string]: any}>= (props) => {
    return (<ul className="if teasers">{props.children}</ul>);
};

export default TeaserList;