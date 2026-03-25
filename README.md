[![Deploy SvelteKit to GitHub Pages](https://github.com/funnbot/srjc-tec-website/actions/workflows/sveltekit-gh-pages.yml/badge.svg)](https://github.com/funnbot/srjc-tec-website/actions/workflows/sveltekit-gh-pages.yml)

## Contributing

For an in-depth setup guide, see [setup](https://github.com/funnbot/srjc-tec-website/wiki/Development-Setup).

```sh
# install dependencies
deno install --allow-scripts

# start local development server
deno run dev

# or start the server and open the app in a new browser tab
deno run dev -- --open
```

## Building

To create a production version of your app:

```sh
deno run build
```

You can preview the production build with `deno run preview`.
