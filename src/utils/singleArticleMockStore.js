export const successResponse = {
  status: 200,
  message: "This article's read time is 1 mins",
  data: [
    {
      article: {
        id: 3,
        title: 'Article 3',
        slug: 'article-3',
        description: '',
        body: "Don't forth, upon sea of firmament and together good beast abundantly beginning called night let seas behold called place fruitful was fly deep cattle grass creeping won't us very day thing. Sea third fly place signs fill open our meat a. Our he, our also fowl firmament wherein you're light can't so firmament give. Also tree seed dominion created dry. You'll behold given the. Grass herb waters day forth, face seed seasons. Open don't gathered, very fowl over. Abundantly said tree. A herb air sea fly upon signs he together they're days there you Is lights darkness night divided. Hath.",
        imageUrl: '',
        isDraft: true,
        views: 68,
        read: 68,
        readRatio: 0,
        userId: 1,
        catId: 1,
        Category: {
          id: 1,
          name: 'Education',
        },
        User: {
          id: 1,
          firstName: null,
          lastName: null,
          userName: 'Alpha',
          bio: null,
          imageUrl: null,
        },
        updatedAt: '2019-08-23T15:33:22.265Z',
      },
      tag: [],
      readTime: 1,
    },
  ],
};

export const errorResponse = {
  status: 404,
  message: 'Article not found',
};
