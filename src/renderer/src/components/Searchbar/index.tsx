import { useContext } from 'react';

import { DataContext } from '../../context';

import type { SyntheticEvent } from 'react';

// TODO: Display all tasks (and subtasks) in a nice fashion - refer to Figma
export default function () {
  const data = useContext(DataContext);

  // TODO: correct types
  // TODO: add function description
  const handleSearch = (event: SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const search = event.target.value.slice();
    data.filter(search);
  };

  return (
    <div className='searchbar'>
      <label htmlFor='searchbar'></label>
      <input
        type='text'
        name='searchbar'
        id='searchbar'
        onInput={handleSearch}
      />
    </div>
  );
}
