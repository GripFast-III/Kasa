const getData = async (url) => {
  try {
    const baseUrl = window.location.origin;
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    console.log("🚀 ~ getData ~ getData:", getData);
    return data;
  } catch (error) {
    console.log(`Erreur lors de la récupération des données : ${error}`);
  }
};

const getDataByProperty = async (url, property) => {
  try {
    const data = await getData(url);
    const getDataByProperty = data[property];
    return getDataByProperty;
  } catch (error) {
    console.log(`Erreur lors de la récupération des données : ${error}`);
  }
};

const getDataById = async (url, id) => {
  try {
    const data = await getData(url);
    const dataById = data.find((item) => item.id === id);
    return dataById;
  } catch (error) {
    console.log(`Erreur lors de la récupération des données : ${error}`);
  }
};

export { getData, getDataByProperty, getDataById };
