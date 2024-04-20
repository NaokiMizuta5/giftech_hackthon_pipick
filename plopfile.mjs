export default function (plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
      // {
      //   type: "list",
      //   name: "componentType",
      //   message: "Component type",
      //   choices: ["atoms", "molecules", "organisms", "templates"],
      // },
    ],
    actions: (data) => {
      const featuresDirectoryPath = `src/features/${data.name}/`;
      return [
        // atom
        {
          type: "add",
          path: `${featuresDirectoryPath}/atom/index.ts`,
          templateFile: "plop-templates/atom/index.ts.hbs",
        },

        // components
        {
          type: "add",
          path: `${featuresDirectoryPath}/components/{{pascalCase name}}/index.tsx`,
          templateFile: "plop-templates/components/index.tsx.hbs",
        },
        {
          type: "add",
          path: `${featuresDirectoryPath}/components/index.ts`,
          templateFile: "plop-templates/components/index.ts.hbs",
        },

        // constants
        {
          type: "add",
          path: `${featuresDirectoryPath}/constants/index.ts`,
          templateFile: "plop-templates/constants/index.ts.hbs",
        },

        // hooks
        {
          type: "add",
          path: `${featuresDirectoryPath}/hooks/index.ts`,
          templateFile: "plop-templates/hooks/index.ts.hbs",
        },

        // types
        {
          type: "add",
          path: `${featuresDirectoryPath}/types/index.ts`,
          templateFile: "plop-templates/types/index.ts.hbs",
        },

        // root index
        {
          type: "add",
          path: `${featuresDirectoryPath}/index.ts`,
          templateFile: "plop-templates/index.ts.hbs",
        },
      ];
    },
  });
}
