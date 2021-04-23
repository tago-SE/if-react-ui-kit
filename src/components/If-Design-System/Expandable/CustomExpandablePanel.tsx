import React from "react";
import './expandable.scss';

interface ITitleStyle extends React.CSSProperties {
    /**
     * Use to override normal padding behaviour for the expandable-icon (div.if.title::after).
     */
    "--right"?: string,
}

interface ITitleProps {
    style?: ITitleStyle,
    [x: string]: any,
}

interface IExpandableProps {
  id: string | number,
  tabIndex?: number,
  variant?: 'light' | 'dark',
  defaultOpen?: boolean,
  title: any,
  titleProps?: ITitleProps,
  content?: any,
  contentProps?: any,
  [x: string]: any,
}

/**
 * Extracts the right side padding which is applied to the expandable-icon component. 
 * If the variable '--right' is present we use that rather than override it with default padding values.
 * @param style 
 */
function getPseudoElementRightSidePadding(style: any) {
    if (style['--right']) return style['--right'];
    const { padding, paddingLeft } = style;
    if (paddingLeft) {
      return paddingLeft;
    } else {
        if (padding) {
            let paddingValues = padding.split(" ");
            if (paddingValues.length === 1) {
                return paddingValues[0];
            }
            if (paddingValues.length > 1) {
                return paddingValues[1];
            }
      }
    }
    return undefined;
}

export function ExpandablePanel({
  id,
  tabIndex = 0,
  title,
  variant,
  defaultOpen,
  titleProps,
  content,
  contentProps,
  style,
  ...props
}: IExpandableProps) {
  const [expanded, toggleExpandable] = React.useState(defaultOpen);
  let paddingValue = getPseudoElementRightSidePadding(titleProps.style);
  const titleStyle = {
    ...titleProps.style,
    "--right": paddingValue,
  };
  return (
    <div
      className={`if panel${variant ? " " + variant : ""} is-expandable${expanded ? " is-open" : ""}`} 
      style={{
        marginTop: "0px", marginBottom: "0px", marginLeft: "0px", marginRight: "0px",
        paddingRight: "0px", paddingLeft: "0px"
      }}
      {...props}
    >
      <div
        className="if title"
        aria-expanded={expanded}
        aria-controls={`expandable-${id}`}
        tabIndex={tabIndex}
        onClick={() => toggleExpandable(expanded ? false : true)}
        {...titleProps}
        style={titleStyle}
      >
        {title}
      </div>
      {content && <div className="if content" role="region" id={`expandable-${id}`} {...contentProps}>
        {content}
      </div>}
    </div>
  );
}