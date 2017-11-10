import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery'

const albums = [
  { name: 'Portrety', href: '/portfolio/portrait' },
  { name: 'Rodzina', href: '/portfolio/family' },
  { name: 'Dzieci', href: '/portfolio/kids' },
  { name: 'Miłość', href: '/portfolio/love' },
  { name: 'Studio', href: '/portfolio/studio' },
]

const albumIds = {
  studio: '72157683777711661',
  family: '72157684058306315',
  kids: '72157681227076032',
  portrait: '72157681870738141',
  love: '72157684051869535',
}

export default ({match}) => {
  const albumId = albumIds[match.params.albumId]

  return(
    <div>
      <div className="sub-nav">
        <ul className="sub-nav__list">
          { albums.map(
              album =>
                <li className="sub-nav__list_item" key={album.name}>
                  <Link to={album.href}>
                    { album.name }
                  </Link>
                </li>
            )
          }
        </ul>
      </div>
      <Gallery albumId={albumId} />
    </div>
  )
}
