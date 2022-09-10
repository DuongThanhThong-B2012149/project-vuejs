import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/configs/firebase";
export const useCollection = (name) => {
  const error = ref(null);

  const addRecord = async (record) => {
    error.value = null;
    try {
      // Add a new document with a generated id.
      const response = await addDoc(collection(db, name), record);
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  };
  return { error, addRecord };
};
