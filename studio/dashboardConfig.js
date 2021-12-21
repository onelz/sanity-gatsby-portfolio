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
                  buildHookId: '61c208a2d194b031f691f01b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7fzws299',
                  apiId: 'ff227ca4-fbfe-4b2b-9437-287104ebd587'
                },
                {
                  buildHookId: '61c208a22288bf30a821485f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tib6ogvq',
                  apiId: 'f754b8c2-8cd8-4326-968a-6604a4a3fc18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/onelz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tib6ogvq.netlify.app',
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
