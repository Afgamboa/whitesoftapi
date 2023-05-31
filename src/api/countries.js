import axios from "axios";
import {LocalStorage} from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');

const getCountries = async () => {
  const cachedCountries = localStorage.getItem('countries');
    if (cachedCountries) {
        return JSON.parse(cachedCountries);
    }
  const response = await axios.get("https://restcountries.com/v3.1/all");
  let countries = [];
  if (response.status === 200) {
    for (let i = 0; i < response.data.length; i++) {
      countries.push(response.data[i].name.common);
    }
    countries.sort();
    localStorage.setItem('countries', JSON.stringify(countries));
    return countries;
  } else {
    return null;
  }
};

export { getCountries };
