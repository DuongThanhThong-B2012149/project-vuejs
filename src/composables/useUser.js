import { auth } from "@/configs/firebase";
import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
const user = ref(auth.currentUser);
onAuthStateChanged(auth, (_user) => {
  if (_user) user.value = _user;
});

const getUser = () => {
  return { user };
};

export const useUser = () => {
  return { getUser };
};
