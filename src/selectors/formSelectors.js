import { selector } from 'recoil';

import form, { currPage } from '../atoms/formAtoms';

const currentPage = selector({
  key: 'currentPageState',
  get: ({ get }) => {
    const cPage = get(form).pages[get(currPage)]
    return cPage;
  },
  set: ({ get, set }, newValues) => {
    const updatedForm = JSON.parse(JSON.stringify(get(form)))
    updatedForm.pages[get(currPage)] = newValues
    set(form, updatedForm)
  }
})

const updatePage = selector({
  key: 'pageUpdater',
  get: ({ get }) => get(currentPage),
  set: ({ set }, newValues) => {
    set(currentPage, newValues)
  }
})

export { updatePage };
export default currentPage;