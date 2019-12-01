module.exports = () => {
  return {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Result"
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
          text: "Hello!"
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Show detail"
            },
            action_id: "show_detail_clicked"
          }
        ]
      }
    ]
  };
};
