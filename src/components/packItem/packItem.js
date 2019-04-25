import React, { PureComponent } from 'react';

class PackItem extends PureComponent {
  render() {
    const { title } = this.props;

    return (
      <section>
        <div>{title}</div>
      </section>
    )
  }
}

export default PackItem
