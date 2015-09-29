GameFactory = {};

GameFactory.createGame = function (playerIds) {
    var deck = createDeck();
    var players = createPlayers(playerIds);

    GameFactory.dealPlayers(players, deck);
    var table = dealTable(deck);

    return {
        deck:deck,
        players: players,
        table: table,
        currentTurn: playerIds,
        inProgress: true,
        started: new Date()
    }
};

GameFactory.dealPlayers = function (players, deck) {
    for (var i = 0; i < 6; i++) {
        Object.keys(players).forEach(function (id) {
            players[id].hand.push(deck.shift());
        });
    }
};

function dealTable (deck){
    var table = {
        trump: deck.shift(),
        ground: [deck.shift(), deck.shift(), deck.shift(),deck.shift()],
        pile: []
    };

    return table;
};

function createPlayers(ids) {
    var o = {};
    ids.forEach(function (id) {
        o[id] = {
            hand:[]
        }
    });
    return o;
}

function createDeck() {
    var suits = ['Heart', 'Spades', 'Clubs', 'Diamonds'];
    var cards = [];
    suits.forEach(function (suit) {
        for (var i = 6; i <= 14; i++) {
            var name = i;
            if (i === 11) name = 'B';
            if (i === 12) name = 'D';
            if (i === 13) name = 'K';
            if (i === 14) name = 'A';

            cards.push({
                suit: suit,
                name: name
            });
        }
    });
    return _.shuffle(cards);
}