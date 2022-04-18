import axios from "axios";

export const getAchievement = async () => {
  const result = await axios("/api/cat/AchievementBar");

  return result;
};

export const getCeleb = async () => {
  const result = await axios("/api/cat/Celebrations");

  return result;
};

export const getClean = async () => {
  const result = await axios("/api/cat/Cleanliness");

  return result;
};

export const getCommon = async () => {
  const result = await axios("/api/cat/CommonVenues");

  return result;
};
export const getDFF = async () => {
  const result = await axios("/api/cat/DemandForFurniture");

  return result;
};
export const getFacilities = async () => {
  const result = await axios("/api/cat/Facilities");

  return result;
};
export const getGallery = async () => {
  const result = await axios("/api/cat/Gallery");

  return result;
};
export const getHouse = async () => {
  const result = await axios("/api/cat/Housekeeping");

  return result;
};
export const getInven = async () => {
  const result = await axios("/api/cat/Inventory");

  return result;
};
export const getMaintain = async () => {
  const result = await axios("/api/cat/Maintainance");

  return result;
};
export const getNews = async () => {
  const result = await axios("/api/cat/Newsletters");

  return result;
};
export const getPantries = async () => {
  const result = await axios("/api/cat/Pantries");

  return result;
};
export const getPolicies = async () => {
  const result = await axios("/api/cat/Policies");

  return result;
};
export const getSanit = async () => {
  const result = await axios("/api/cat/Sanitisation");

  return result;
};
export const getSpace = async () => {
  const result = await axios("/api/cat/SpaceAllotment");

  return result;
};
export const getSus = async () => {
  const result = await axios("/api/cat/SustainabilityReport");

  return result;
};

export const getTeam = async () => {
  const result = await axios("/api/cat/Team");

  return result;
};
export const getWaste = async () => {
  const result = await axios("/api/cat/WasteManagement");

  return result;
};

export const getWater = async () => {
  const result = await axios("/api/cat/WaterManagement");

  return result;
};
