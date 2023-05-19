// countryCodeModel.js
import fetch from 'node-fetch';

const API_URL = 'https://4bwp3j8vdl.execute-api.ap-south-1.amazonaws.com/Prod/api/Candidateregistration/GetCountryWithCountryCodesList';

const getCountryCodes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const parsedData = JSON.parse(data.data);
  const countryCodes = parsedData.map(({ value, label }) => ({ label, value }));
  return countryCodes;
};

export default getCountryCodes

