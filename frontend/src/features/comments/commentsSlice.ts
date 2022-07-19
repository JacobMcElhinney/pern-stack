import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const COMMENTS_API_URL = "http://localhost:3000/api/comments";

export interface Comment {
  id: number;
  content: string;
  author: string;
  postId: number;
  createdAt: string;
  updatedAt: string;
}

export interface CommentsState {
  status: "idle" | "loading" | "failed";
  comments: [];
  error?: string;
}

// ENTITY ADAPTER
const commentsAdapter = createEntityAdapter<Comment>({
  //If we don't explicitly provide `selectId`,
  //it defaults to assuming `entity.id` is the right field
  selectId: (comment) => comment.id,
  // Keep the "all IDs" array sorted based on creation date
  // sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

// ASYNC THUNKS
export const getComments = createAsyncThunk(
  "comments/getComments", //slice name/action name (thunk name)
  async () => {
    const response = await axios.get(COMMENTS_API_URL);
    return response.data;
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async (comment: object) => {
    const response = await axios.post(COMMENTS_API_URL, comment);
    //if error message log message

    if( response.data.error ) {
      return {  status: "failed", error: response.data.error };
    }

    return response.data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState({
    status: "idle",
    comments: [],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("getComments.fulfilled: ", action.payload)
        commentsAdapter.upsertMany(state, action.payload);
      })
      .addCase(getComments.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.message);
      })
      .addCase(postComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.status = "idle";
        commentsAdapter.addOne(state, action.payload);
      })

      .addCase(postComment.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// export commentsSelectors from the adapter
export const commentsSelectors = commentsAdapter.getSelectors(
  (state: RootState) => state.comments
);

export default commentsSlice.reducer;
 