const magic8Responses = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes - Definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes, and signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];
  
  const generateRandomRes = (arr) => {
    randomRes = Math.floor(Math.random() * arr.length);
    const item = magic8Responses[randomRes];
    return item;
  };
  
  module.exports = { magic8Responses, generateRandomRes };