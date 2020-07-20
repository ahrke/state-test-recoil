import { selector } from 'recoil';

import userName from '../atoms/userAtoms';

const userNameState = selector({
  key: 'userNameState',
  get: ({get}) => {
    const name = get(userName);

    return name;
  }
})

export default userNameState;