const data = require('../data/friends.js');

module.exports = (app) => {
    app.get('/api/friends', (_req, res) => {
        res.json(data);
    });

    app.post('/api/friends', (req, res) => {
        let newFriendScore = parseInt(req.body.score);
        console.log(newFriendScore);  

        //starts top friend score at new friend's submission
        let newTopFriendScore = 0;
        
        for(let i = 0; i < data.length; i++){
            let comparisonFriend = parseInt(data[i].score);
            let totalDifference = Math.abs(newFriendScore - comparisonFriend);

            console.log(totalDifference);

            if(totalDifference >= newTopFriendScore){
                newTopFriendScore = totalDifference; 
            } else if(totalDifference < newTopFriendScore){
                console.log(`${data[i].name} is not perfect match`);
            } 
        }

        data.push(req.body); 
        res.json();
    })
}