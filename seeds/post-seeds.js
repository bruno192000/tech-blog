const { Post } = require('../models');

const postData = [{
        title: 'Batman is a great character',
        content: 'Batman is one of the most important characters in DC UNIVERSE.',
        user_id: 1

    },
    {
        title: 'Who is next?',
        content: 'Always asking my self which celebrity is going to die next',
        user_id: 2
    },
    {
        title: 'Multiverse?',
        content: 'Theory of other realities where we already died.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;