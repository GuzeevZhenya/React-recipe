import { useState, useEffect } from 'react';
import { getAllCatogories } from '../api';
import { Categorylist } from '../Components/CategoryList';

export const Home = () => {
  const [catalog, setCatalog] = useState([]);
  useEffect(() => {
    getAllCatogories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  return (
    <div>
      <Categorylist catalog={catalog} />
    </div>
  );
};
