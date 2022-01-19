import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { Categorylist } from '../components/CategoryList';

export const Home = () => {
  const [ catalog, setCatalog ] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  return (
    <div>
      <Categorylist catalog={catalog} />
    </div>
  );
};
