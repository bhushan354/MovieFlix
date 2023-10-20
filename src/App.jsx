/* eslint-disable */
import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

function App() {
  const dispatch = useDispatch();
  //to use values from url
  // {} this is used to destructure data from url
  //this state contains whole store means url and genres ,use what you want
  const { url } = useSelector((state) =>
    //this state is returning reducer object from store.js
    state.home);
    // this state.home is stored to url object with destructuring
    console.log(url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <div className="App">
      App
      {url?.total_pages}
    </div>
  )
}

export default App;
