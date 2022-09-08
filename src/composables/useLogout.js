import { auth } from "@/configs/firebase";
import { ref } from "vue";
const error = ref(null);
const signOut = async () => {
  error.value = null;
  try {
    const response = await auth.signOut();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};
export const useLogout = () => {
  return { error, signOut };
};
