import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
// import { fetchCount } from './counter/counterAPI';

interface User {
  displayName: string;
  photoUrl: string;
}

export const userSlice = createSlice({
  name: "user",
  //reduxのstoreで扱いたいstateの内容
  initialState: {
    user: { uid: "", photoUrl: "", displayName: "" },
  },
  reducers: {
    //ログイン成功時、fbのuser情報をreact側のreduxのstateに反映
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: "", photoUrl: "", displayName: "" };
    },
    updateUserProfile: (state, action: PayloadAction<User>) => {
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    }
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
