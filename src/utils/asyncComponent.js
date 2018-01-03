// @flow

import * as React from 'react';

export default function (module: Function) {
  class AsyncComponent extends React.Component<any, any> {

    /**
     * The component state.
     *
     * @type {Object}
     */
    state = {
      component: null,
    }

    /**
     * The async component render.
     *
     * @return {Reqact.Node}
     * @author Seven Du <shiweidu@outlook.com>
     */
    render(): React.Node {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : null;
    }

    /**
     * The cmponent did mount async.
     *
     * @return {void}
     * @author Seven Du <shiweidu@outlook.com>
     */
    async componentDidMount() {
      const { default: component } = await module();

      this.setState({ component });
    }
  }

  return AsyncComponent;
};
