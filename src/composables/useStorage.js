import { ref } from "vue";
import {
  getDownloadURL,
  ref as firebaseRef,
  uploadBytes,
} from "firebase/storage";
import { storage } from "@/configs/firebase";
import { useUser } from "./useUser";
const { getUser } = useUser();
const { user } = getUser();
export const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);
  const uploadFile = async (file) => {
    error.value = null;
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const storageRef = firebaseRef(storage, filePath.value);
    try {
      await uploadBytes(storageRef, file);
      url.value = await getDownloadURL(storageRef);
      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  };
  return { error, uploadFile, url };
};
