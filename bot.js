function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        if (cmd = 'test') {
			switch(getRandomInt(0, 8)) {
				// !ping
				case 0:
				
					bot.sendMessage({
						to: channelID,
						message: user + ' fell into a hole. He died.'
					});
				break;
				
				case 1:
				
					bot.sendMessage({
						to: channelID,
						message: user + ' believed the cake wasn\'t a lie.'
					});
				break;
				
				case 2:
				
					bot.sendMessage({
						to: channelID,
						message: user + ' said "apple."'
					});
				break;
				
				case 3:
				
					bot.sendMessage({
						to: channelID,
						message: user + ' was pecked by birds.'
					});
				break;
				
				case 4:
				
					bot.sendMessage({
						to: channelID,
						message: user + ' came into contact with the gel.'
					});
				break;
				
				case 5:
					bot.sendMessage({to: channelID, message: 'This next test is impossible.'});
				break;

				case 6:
					bot.sendMessage({to: channelID, message: 'Well done, android. Remember that android hell is a real place where you will be sent at the first sign of resistance.'});
					break;
				
				
				case 7:
					bot.sendMessage({to: channelID, message: 'In laymens terms: Speedy thing goes in, Speedy thing comes out.'});
					break;
				
				
				case 8:
					bot.sendMessage({to: channelID, message: 'We at the Enrichment Center would like to remind you that the Weighted Companion Cube will never threaten to stab you, and in fact, cannot speak.'});
					break;
				
			}
		}
	 }
});