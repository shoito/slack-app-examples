const { App } = require("@slack/bolt");
const appHome = require("./appHome");
const inputModal = require("./modals/input");
const resultModal = require("./modals/result");
const detailModal = require("./modals/detail");
const detailExpandModal = require("./modals/detail_expand");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.event("app_home_opened", async ({ event, context, payload }) => {
  try {
    const result = await app.client.apiCall("views.publish", {
      token: context.botToken,
      user_id: event.user,
      view: appHome()
    });
  } catch (e) {
    console.log(e);
    app.error(e);
  }
});

app.action("open_modal_clicked", async ({ ack, body, context }) => {
  ack();

  try {
    const result = await app.client.views.open({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: inputModal()
    });
  } catch (e) {
    console.log(e);
    app.error(e);
  }
});

app.action("show_result_clicked", async ({ ack, body, context }) => {
  ack();

  try {
    const result = await app.client.views.push({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: resultModal()
    });
  } catch (e) {
    console.log(e);
    app.error(e);
  }
});

app.action("show_detail_clicked", async ({ ack, body, context }) => {
  ack();

  try {
    const result = await app.client.views.push({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: detailModal()
    });
  } catch (e) {
    console.log(e);
    app.error(e);
  }
});

app.action("expand_clicked", async ({ ack, body, context }) => {
  ack();

  try {
    const result = await app.client.views.update({
      token: context.botToken,
      view_id: body.view.id,
      view: detailExpandModal()
    });
  } catch (e) {
    console.log(e);
    app.error(e);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();

module.exports = { app };
