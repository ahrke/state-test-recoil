import React from 'react';
import { useRecoilValue } from 'recoil';

import { randomMeme } from '../../selectors/memeSelectors';

const RandomMeme = () => {
  const imageUrl = useRecoilValue(randomMeme);

  return (
    <div>
      <img src={imageUrl} alt='meme' />
    </div>
  )
}

export default RandomMeme;
