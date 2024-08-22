const axios = require("axios");

const token = "uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA=";

const url = "https://flag-gilt.vercel.app/api/challenge";

let cursor = null;

async function getFlag() {
  try {
    while (true) {
      const requestBody = cursor ? { cursor } : {};

      const response = await axios.post(url, requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { message, nextCursor } = response.data;
      console.log(message);

      // if there is no next cursor then break the loop
      if (!nextCursor) {
        console.log(
          "\nFlag found, challenge likely complete or new instructions."
        );
        break;
      }

      cursor = nextCursor;
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getFlag();
