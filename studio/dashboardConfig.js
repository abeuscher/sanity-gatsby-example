export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6226d2b96d63823923bdf630',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-example-studio',
                  apiId: 'ada904ca-5f50-4a25-9239-92cb3f688c2d'
                },
                {
                  buildHookId: '6226d2baf692e12fc4e6c9a4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-example',
                  apiId: '6090740e-947e-4b65-8a2e-86fdd66c932e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abeuscher/sanity-gatsby-example',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-example.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
