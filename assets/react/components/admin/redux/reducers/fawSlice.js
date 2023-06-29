import { createSlice } from "@reduxjs/toolkit";

const FawSome = createSlice({
  name: "fawsome",
  initialState: {
    icons: [
      "facebook",
      "youtube",
      "twitter",
      "instagram",
      "telegram",
      "github",
      "microsoft",
      "apple",
      "linux",
      "twitch",
      "steam",
      "discord",
    ],
  },
});


export default FawSome.reducer;