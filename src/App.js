import React, { Suspense } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import User from './components/user/User';
import UserNameInput from './components/user/UserNameInput';
import RandomMeme from './components/meme/RandomMeme';
import RandomMemeButton from './components/meme/RandomMemeButton';

import Form from './components/form/Form';

import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* <UserNameInput />
        <header className="App-header">
          <p>
            Welcome =)
            <User />
          </p>
        </header>
        <Suspense fallback={<p>'Suspense'fully awaiting meme</p>}>
          <RandomMemeButton />
          <RandomMeme />
        </Suspense> */}
        <Form />
      </div>
    </RecoilRoot>
  );
}

export default App;
