# reasonable-gatsby-starter

## Limitations
- Gatsby uses filenames to generate urls and look up special pages like custom error pages. BuckleScript unfortunately does not support as wide a range of filenames due to filenames being used to generate module names. For the porting of this project specifically the consequences are:
  - Since `404.re` is not valid, the code for the custom error page has been put in `error404.re` and a `404.js` that simply re-exports `error404` has been aded as a bridge.
  - Dashes aren't valid in filenames, so `page-2.re` has been renamed to `page_2.re`, which of course causes the generated url to use an underscore instead of a dash too.