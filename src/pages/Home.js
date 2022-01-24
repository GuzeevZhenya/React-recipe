import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Categorylist } from '../components/CategoryList';
import { Search } from '../components/Search';
import { useLocation, useHistory } from 'react-router-dom';

export const Home = () => {
  const [ catalog, setCatalog ] = useState([]);
  const [ filteredCatalog, setFilteredCatalog ] = useState([]);

  const { pathname, search } = useLocation();
  const {push} = useHistory()

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())),
    );
    //Добавляем в поисковую строку названия того что ищем
    push({
      pathname,
      search:`?search=${str}`
    })
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(search ? data.categories.filter(item=>item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())): data.categories);
    });
  }, [search]);
  return (
    <div>
      <Search cb={handleSearch} />
      <Categorylist catalog={filteredCatalog} />
    </div>
  );
};
