module.exports = () => {
  return {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Detail"
    },
    close: {
      type: "plain_text",
      text: "Back"
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "plain_text",
          text: "Bye!"
        }
      },
      {
        type: "section",
        text: {
          type: "plain_text",
          text: "Updated"
        }
      }
    ]
  };
};
