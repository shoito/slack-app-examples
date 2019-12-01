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
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Expand"
            },
            action_id: "expand_clicked"
          }
        ]
      }
    ]
  };
};
