const BASE_URL = "http://localhost:3000/";
import axios from "axios";
import { Song } from "../types/SongType";

export const fetchSongs = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/songs/`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const addSong = async (song: Song) => {
  try {
    const response = await axios.post(`${BASE_URL}api/songs/`, song);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const updateSong = async (id: string, song: Song) => {
  try {
    const response = await axios.patch(`${BASE_URL}api/songs/${id}`, song);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const deleteSong = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}api/songs/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getStastics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/songs/gen/stats`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
