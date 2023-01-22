export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'string',
    },
    {
      name: 'techStackReasoning',
      title: 'Tech Stack Reasoning',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
    },
    {
      name: 'projectGif',
      title: 'Project Gif',
      type: 'image',
    },
    {
      name: 'projectImageDesktop',
      title: 'Project Image Desktop',
      type: 'image',
    },
    {
      name: 'projectImageMobile',
      title: 'Project Image Mobile',
      type: 'image',
    },
    {
      name: 'ssOfHurdle',
      title: 'Ss Of Hurdle',
      type: 'image',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'string',
    },
    {
      name: 'biggestChallenge',
      title: 'Biggest Challenge',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'motivation',
      title: 'Motivation',
      type: 'string',
    },
    {
      name: 'liveSite',
      title: 'Live Site',
      type: 'url',
    },
    {
      name: 'repo',
      title: 'Repo',
      type: 'url',
    },
    {
      name: 'FuturePlans',
      title: 'Future Plans',
      type: 'string',
    },
    {
      name: 'prerequisiteProject',
      title: 'Prerequisite Project',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'picture',
              title: 'Picture',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
