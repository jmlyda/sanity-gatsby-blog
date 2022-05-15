export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "628135ed5239266044b6e3f4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-38rq1dxg",
                  apiId: "4dd6a716-0437-45be-b329-0c3da25940de",
                },
                {
                  buildHookId: "628135ed5239266044b6e3f5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ggi9qjyu",
                  apiId: "d405e092-3648-491e-bf23-76c3fdefd375",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jmlyda/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ggi9qjyu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
