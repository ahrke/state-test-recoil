import React from 'react';
import { useRecoilState } from 'recoil';

import userName from '../../atoms/userAtoms';

const UserNameInput = () => {
  const [name, setName] = useRecoilState(userName);

  const onNameChange = (e) => {
    console.log("===> changing to:", e.target.value)
    setName(e.target.value)
  }

  return (
    <div>
      <input onChange={onNameChange} value={name} />
    </div>
  )
}

export default UserNameInput;