import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'
import $ from 'jquery'
export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () => {this.setState({ currentPath: this.props.location.pathname });
    (function() {
      $(".skills-prog li")
        .find(".skills-bar")
        .each(function(i) {
          $(this)
            .find(".bar")
            .delay(i * 150)
            .animate(
              {
                width:
                  $(this)
                    .parents()
                    .attr("data-percent") + "%"
              },
              1000,
              "linear",
              function() {
                return $(this).css({
                  "transition-duration": ".5s"
                });
              }
            );
        });

      $(".skills-soft li")
        .find("svg")
        .each(function(i) {
          var c, cbar, circle, percent, r;
          circle = $(this).children(".cbar");
          r = circle.attr("r");
          c = Math.PI * (r * 2);
          percent = $(this)
            .parent()
            .data("percent");
          cbar = (100 - percent) / 100 * c;
          circle.css({
            "stroke-dashoffset": c,
            "stroke-dasharray": c
          });
          circle.delay(i * 150).animate(
            {
              strokeDashoffset: cbar
            },
            1000,
            "linear",
            function() {
              return circle.css({
                "transition-duration": ".3s"
              });
            }
          );
          $(this)
            .siblings("small")
            .prop("Counter", 0)
            .delay(i * 150)
            .animate(
              {
                Counter: percent
              },
              {
                duration: 1000,
                step: function(now) {
                  return $(this).text(Math.ceil(now) + "%");
                }
              }
            );
        });
    }.call(this));
  }


  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/components/">Components</NavLink>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('blog') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
              >
                Blog
                <div className="Nav--GroupLinks">
                  <NavLink to="/blog/" className="Nav--GroupLink">
                    All Posts
                  </NavLink>
                  {subNav.posts.map((link, index) => (
                    <NavLink
                      to={link.slug}
                      key={'posts-subnav-link-' + index}
                      className="Nav--GroupLink"
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </div>
              </span>
            </div>
            <NavLink to="/default/">Default</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
            <NavLink to="/about/">About</NavLink>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
