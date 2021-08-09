const { Comment } = require('../models');

const commentData = [{
        comment_text: "I agree 100% with you",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "The ones that are old i guess",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "i always ask my self that question too, is there other universe?",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;