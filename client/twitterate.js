var T = new TWIT({
                consumer_key: 'GvmS1qpA8JXLL9pRhnSNig',
                consumer_secret: '31lUbb1LQIfShYDS4ZxhEudBst6nxzkLi98JmFuBo',
                access_token: '5719602-20bU1bGWPBxbtTUjpnM7Qw7OiRftJfspinZWmRIE',
                access_token_secret: 'IBgrhJoPm1wR7JWZbvYYDEcFe3qOrsrbLG1n32BreM'
})

T.get( 'search/tweets',
       { q: '@bravuomo', count: 10 },
       function(err, reply) { console.log(reply); });				

Template.twitterate.helpers({ tweets: T });

