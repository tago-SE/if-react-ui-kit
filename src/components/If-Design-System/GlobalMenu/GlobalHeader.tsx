import React from 'react';
import { GlobalHeaderContext } from './GlobalHeaderContext';
import { createCloseTertiaryMenuAction } from './GlobalHeaderReducer';

interface Props {
    isSticky?: boolean,
    isLocked?: boolean,
    [x: string]: any,
}

interface State {
    isFixed?: boolean,
    hasScrolled: boolean,
    hasScrolledDown: boolean,
}

export default class GlobalHeader extends React.Component<Props, State> {

    static contextType = GlobalHeaderContext;
    static defaultProps = { 
        isSticky: true,
        isLocked: false,
    };
    private _props: any;

    scrollable() {
        return this.props.isSticky && !this.props.isLocked;
    }

    constructor(props: Props | Readonly<Props>) {
        super(props);
        this._props = { ...props };
        delete this._props.isSticky;
        delete this._props.isLocked;
        if (this.scrollable()) this.handleScroll = this.handleScroll.bind(this);
        this.state = { isFixed: this.props.isSticky || this.props.isLocked, hasScrolled: false, hasScrolledDown: false };
    }

    componentDidMount() {
        if (this.scrollable()) {
            window.addEventListener('scroll', this.handleScroll);
        }
        let x = document.querySelector('.if.global-header');
        const h = x.getBoundingClientRect().height;
        console.log("x", h);
    }
    
    componentWillUnmount () {
        if (this.scrollable()) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    componentDidUpdate() {
    }

    getClassName () {
        return `if global-header${
            this.state.isFixed ? " is-fixed" : ""
        }${
            this.state.hasScrolled ? " has-scrolled" : ""
        }${
            this.state.hasScrolledDown ? " has-scrolled-down" : ""
        }`;
    }

    handleScroll () {
        if (!this.props.isSticky) return; 
        let scrollTop = document.querySelector('html').scrollTop;
        const navbar = document.querySelector('.if.global-header');
        const currentMenuHeight = navbar.getBoundingClientRect().height;
        console.log("navbar", currentMenuHeight);
        console.log("scroll", scrollTop);
        if (scrollTop === 0) {
            this.setState({ isFixed: this.props.isSticky, hasScrolled: false, hasScrolledDown: false });
        } 
        else {
            this.setState({ hasScrolled: true });
            if (scrollTop > 2*currentMenuHeight) {
                this.context.dispatch(createCloseTertiaryMenuAction());
                this.setState({ hasScrolledDown: true });
            } 
            else if (scrollTop <= currentMenuHeight*8) {
                this.setState({ hasScrolledDown: false });
            }
        }
    }

    render() {
        return (
            <header 
                onScroll={this.handleScroll}
                className={this.getClassName()} 
                {...this._props}
            />
        );
    }
}
