import * as yup from "yup";

export const SongSchema = yup.object().shape({
    title: yup.string().required("Title is required").max(30).min(1),
    artist: yup.string().required("Artist is required").max(30).min(1),
    album: yup.string().required("Album is required").max(30).min(1),
    genre: yup.string().required("Genre is required").max(30).min(1),
});
