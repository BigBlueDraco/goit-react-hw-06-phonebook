import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';

export const Filter = () => {
  const dispath = useDispatch();
  const searche = e => {
    dispath(setFilter(e.target.value.toLowerCase()));
  };
  return <input type="text" name="filter" onInput={searche} />;
};
