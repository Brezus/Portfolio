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
      name: 'techStack',
      title: 'Tech Stack',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'Project Image',
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
