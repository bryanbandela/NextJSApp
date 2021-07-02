[FOR_STATIC]

1. [pages]

- index.js file is the root of your route
- Creating a folder/file inside pages will be the routes of your app

2. [tools]

- Simple react snippets

3. [Layout]
   eg. When we want a component to feature in all our pages.

- Create a Layout component (importing your Nav & Footer) but accept a {children} parameter to place in-between nav & footer
- import Layout in \_app.js and wrap the component tag around Layout

4. [styling]
   For global styling : all css in global.css willapply to all pages rendered in \_app.js
   For specific page styling: Use CSS modules, we import that style sheet in the component file.

- IMPORTANT: selectors in the #.module.css must be pure "class" selectors (not element selectors)

5. [ERROR]

Name your error file as 404.js (special name) inside the pages folder. This is great in case someone goes to

6. [IMAGE_AND_METADATA]
   Notice the trend : import ... from "next/image ../head ../route"
   For image you can use the normal <image> tag or the <Image> from next/image
   which offers better option like height & width

   For metadata : import Head from "next/head"
   <Head>  
   <title>Ninja List | Home</title>
   <meta name="keywords" content="ninjas"/>
   </Head>

7. [FETCHING_DATA]
   There is a special function from next called getStaticProps:

export const getStaticProps = async () => {
...
}

8. [DYNAMIC_ROUTES]

For dynamic pages with the same format: create a template for all of them.
Dynamic route : [id].js => the [] shows it's a dynamic routes.

We use getStaticProps function to retrieve remote api and render ninjas list. But if we want to fetch a single ninja item, we have to apply both getStaticProps and getStaticPaths function inside dynamic route componet ([id].js/detail page component)
Q: Why do we need getStaticPaths function ? A: Because we need to tell Nextjs how many html page needed to be made base on our data (remote api)
Then in getStaticProps function we fetch the single item (id) and pass the data to detail page component to render the single item content

[DEPLOYMENT]

npm run build
