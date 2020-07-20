import { selector, selectorFamily } from 'recoil';
import axios from 'axios';

const randomMeme = selector({
  key: 'RandomMemeQuery',
  get: async ({get}) => {
    const meme = await axios.get('https://meme-api.herokuapp.com/gimme')
    console.log("===> result from meme api:", meme)
    const memeImage = meme.data.url;

    return memeImage
  }
})

const randomMemeOf = selectorFamily({
  key: 'RandomMemeFamilyQuery',
  get: count => async () => {
    const memes = await axios.get('https://meme-api.herokuapp.com/gimme/' + count)
    console.log("===> result from meme api:", memes)

    const memeImages = memes.data.map(meme => meme.url);

    return memeImages;
  }
})

export {
  randomMeme,
  randomMemeOf
};
