# Get package name
package=''
read -p 'Name of package: ' package

path=./packages/$package
graphqlPath=$path/src/graphql

cd $path/src/graphql

mutations=$(ls | grep "mutations")
queries=$(ls | grep "queries")

cd ../../../../

echo 'export * from '"'"'./graphql'"'"';' >> $path/src/index.ts

# Create graphql code
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run generate -w $path

# Export queries and mutations
if [[ $mutations = 'mutations' && $queries = 'queries' ]]
then
  echo 'export * from '"'"'./queries'"'"';
  export * from '"'"'./mutations'"'"';' >> $graphqlPath/index.ts
  echo 'export * from '"'"'./Query.generated'"'"';' >> $graphqlPath/queries/index.ts
  echo 'export * from '"'"'./Mutation.generated'"'"';' >> $graphqlPath/mutations/index.ts

elif [[ $mutations != 'mutations' && $queries = 'queries' ]]
then
  echo 'export * from '"'"'./queries'"'"';' >> $graphqlPath/index.ts
echo 'export * from '"'"'./Query.generated'"'"';' >> $graphqlPath/queries/index.ts

elif [[ $mutations = 'mutations' && $queries != 'queries' ]]
then 
  echo 'export * from '"'"'./mutations'"'"';' >> $graphqlPath/index.ts
echo 'export * from '"'"'./Mutation.generated'"'"';' >> $graphqlPath/mutations/index.ts

else
echo 'export * from '"'"'./queries'"'"';' >> $graphqlPath/index.ts
echo 'export * from '"'"'./Query.generated'"'"';' >> $graphqlPath/queries/index.ts
fi

# Delete general schema
rm $path/graphql.schema.json
