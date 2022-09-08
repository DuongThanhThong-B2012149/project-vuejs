import { auth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";
const error = ref(null);
const isPending = ref(false);
const signUp = async (fullName, email, password) => {
  // Cần clear cái value lại mỗi khi gọi hàm này vì có thể có nhiều component sử dụng
  // Nếu có nhiều component sử dụng mà k clear thì nó vẫn giữ cái value cũ
  isPending.value = true;
  error.value = null;
  try {
    // Create user
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (!response) throw new Error("Could not create a new user");
    // Update username
    await updateProfile(auth.currentUser, {
      displayName: fullName,
    });
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};
export const useSignUp = () => {
  return { error, isPending, signUp };
};
