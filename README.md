# Repository for migrating flatwiseberlin.de

https://www.flatwiseberlin.de/

- recreated

Website available at

https://right2thecity.github.io/Flatwise-Migration/

## How to work with the Hugo site
1. Check out branch "seo-and-multilingual-with-hugo"
2. Install Hugo, follow the instructions in the [Hugo Documentation](https://gohugo.io/installation/)
3. Run 'Hugo Server' in the root directory of the site
4. The website is now available in localhost and will live-reload as you make changes

If you ever run into a fatal error (you'll see a black screen with the error message), the live-reloading stops and you have to restart the server after you fix the error.

## General Info about the site
### Content
All content lives in the content directory. It is grouped by language. To create a new page, you simply copy/paste a file or you run ['hugo new content'](https://gohugo.io/getting-started/quick-start/#add-content)

### Images
Images live in the 'static' folder (anything in static will be published to the site without processing).


## Deployment
The command 'hugo' deploys the site to a separate folder.

## To do
- add CMS for easier editing