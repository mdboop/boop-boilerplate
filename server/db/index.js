const typeorm = require('typeorm');

typeorm
  .createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'admin',
    database: 'test',
    synchronize: true,
    entitySchemas: [require('./entity/Post'), require('./entity/Category')],
  })
  // .then(connection => {
  //   const postRepository = connection.getRepository('Post');
  //   postRepository
  //     .save(post)
  //     .then(savedPost => {
  //       console.log('Post has been saved: ', savedPost);
  //       console.log('Now lets load all posts: ');

  //       return postRepository.find();
  //     })
  //     .then(allPosts => {
  //       console.log('All posts: ', allPosts);
  //     });
  // })
  // .catch(error => {
  //   console.log('Error: ', error);
  // });
