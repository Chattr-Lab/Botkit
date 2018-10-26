module.exports = function(controller) {

  controller.hears(['hi', 'hello', 'hey', 'hi there'],['message_received'] function(bot, message) {

    bot.reply(message,'I heard a test');

  });

  controller.hears('typing','message_received', function(bot, message) {


    bot.reply(message,{
      text: 'Hello there! This is suicide screening bot!',
      typing: true,

      });
}
