export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff372ac9095fb014cbc16ea',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6x22ukpi',
                  apiId: 'cc15c0ea-178b-407e-9ffd-b85058336549'
                },
                {
                  buildHookId: '5ff372ad9095fb013dbc18f4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z8bx59kg',
                  apiId: 'e4b3458b-98cb-4579-aa00-49a31a1f9b3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nikolavas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z8bx59kg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
