import { AppDispatch } from "../store";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

////Первая реализация
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const { data } = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(data));
//   } catch (e: any) {
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (e:any) {
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);
