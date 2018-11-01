import React from "react";
import { Link } from "gatsby";

import Header from './Header';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default Template;
