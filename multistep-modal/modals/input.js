module.exports = () => {
  return {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Input"
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
          text: "Hi!"
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Show result"
            },
            action_id: "show_result_clicked"
          }
        ]
      }
    ]
  };
};
