import React, { PureComponent } from 'react';

import PackItem from '../packItem/packItem';

class PackList extends PureComponent {

  getPacks = (packs) => (
    packs.map(item => (
      <PackItem title={item.title} />
    ))
  )

  render() {
    const { packs } = this.props;

    return (
      <section>
        {
          this.getPacks(packs)
        }
      </section>
    )
  }
}

export default PackList
