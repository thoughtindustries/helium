# Custom graphql codegen plugin

This plugin extends the existing plugin `@graphql-codegen/typescript` to generate only the object types used in operations. 

Like the existing plugin, this plugin works well with `@graphql-codegen/typescript-operations` to generate global types and operation types (as well as other operation resources) based on the graphql schema and operations. The plugin `@graphql-codegen/typescript` does not currently support generating only the object types used in operations. Which, does not work quite as intended when working with a large graphql schema. The maintainer for the codegen is aware of this use case and are planning to improve the existing plugins.

In the meantime, the source of this plugin is cloned from one of the contributors. This would serve as an intermediate solution.

## Usage

Replace `@graphql-codegen/typescript` with the package name of this plugin. 

In your `codegen.yml` use the following configs:
- omitObjectTypes: false
- preResolveTypes: true 

With these configurations, based on the instrospected schema (downloaded from remote graphql endpoint) and operations, it will generate the following:
- global types including scalars, enums, input types, and object types for the operations.
- operation types and resources. The operation types will use primitive types as much as possible.

## References

- Source of the plugin: https://github.com/dotansimha/graphql-code-generator/pull/7150