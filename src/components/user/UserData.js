import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import userName from '../../atoms/userAtoms';
import userNameState from '../../selectors/userSelectors';

const UserData = () => {
  const [name, setName] = useRecoilState(userName);
  // const name = useRecoilValue(userNameState)
  return (
    <div>
      <header>
        <p>
          {name}
        </p>
      </header>
    </div>
  )
}

export default UserData;