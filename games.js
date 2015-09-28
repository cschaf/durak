Games = new Meteor.Collection('games');

/*
game = {
    currentTurn = [],
    deck = [],
    table = [],
    players = {
        a:{
            hand:[]
        }
        b:{
            hand:[]
        }
    }
    inProgress: true/false
    stared: date,
    finished: date,
    winner: id
}
 */

if (Meteor.isServer) {
    Meteor.publish('games', function () {
         return Games.find({currentTurn: this.userId});
    });

    Meteor.publish('users', function(){
        Meteor.users.find();
    });
}


if (Meteor.isClient){
    Meteor.subscribe('games');
    Meteor.subscribe('users');
}