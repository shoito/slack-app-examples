module.exports = () => {
  return {
    type: "home",
    callback_id: "home_view",
    title: {
      type: "plain_text",
      text: "Modal"
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Welcome!*"
        },
        accessory: {
          type: "button",
          action_id: "open_modal_clicked",
          text: {
            type: "plain_text",
            text: "Open modal"
          }
        }
      }
    ]
  };
};
