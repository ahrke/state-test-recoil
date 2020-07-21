import { atom } from 'recoil';

const form = atom({
  key: 'form',
  default: {
    pages: [
      {
        page: 1,
        name: 'no one',
        address: 'anywhere, Earth, 0',
        selected: 'Mango',
        checked: false,
        description: 'false positives',
        pageBack: '#fff'
      },
      {
        page: 2,
        spiritAnimal: 'no one',
        imgUrl: 'https://i.pinimg.com/originals/6c/8a/f1/6c8af1b0168f8f3c919c3e93d05a0474.jpg',
        checked: false,
        description: 'falcon in dolphin clothing',
        pageBack: '#fff'
      },
      {
        page: 3,
        name: 'rasputin',
        formType: 'Earth being application',
        checked: false,
        description: 'originally from planet E887c90-ZZ20',
        pageBack: '#fff'
      }
    ]
  }
})

const currPage = atom({
  key: 'page',
  default: 0
})

export { currPage };
export default form;