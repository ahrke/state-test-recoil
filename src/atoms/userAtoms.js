import { atom } from 'recoil';

const userName = atom({
  key: 'UserName',
  default: 'Dave'
})

export default userName;