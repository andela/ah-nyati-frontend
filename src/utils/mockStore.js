const mockArticle = {
  mockArticleResponse: {
    status: 200,
    message: 'All articles fetched successfully',
    data: [
      {
        articles: [
          {
            id: 1,
            title: 'title 1',
            imageUrl: 'http://img.com',
            body: 'I am the body',
            Category: {
              name: 'Game',
            },
            views: '34',
          },
        ],
        totalArticles: 60,
        limit: '1',
        totalPages: 60,
      },
    ],
  },
  mockUserResponse: {
    status: 200,
    data: {
      user: {
        userName: 'nyati',
      },
    },
  },
};

export default mockArticle;
