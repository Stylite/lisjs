const lisjs = require('../index');
const assert = require('assert');
var botClient = new lisjs.Client('test', true);

describe('bot token', () => {
  it('should have prefix',() => {
    assert.ok(botClient.token.startsWith('Bot'));
  });
});

describe('bot token with no options', () => {
  it('should have prefix',() => {
    botClient = new lisjs.Client('test');
    assert.ok(botClient.token.startsWith('Bot'));
  });
});

describe('bot token with option false but prefix defined', () => {
  it('should have prefix',() => {
    botClient = new lisjs.Client('Bot test', false);
    assert.ok(botClient.token.startsWith('Bot'));
  });
});

describe('bearer token', () => {
  it('should NOT have prefix',() => {
    botClient = new lisjs.Client('test', false);
    assert.ok(!botClient.token.startsWith('Bot'));
  });
});