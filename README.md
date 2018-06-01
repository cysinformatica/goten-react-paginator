# Goten Paginator for React
Generally when we developing a search we have:
- Searcher. Wich has the filters of the search.
- List. Wich shows the result of search.

But if we have a lot elements on the result, the search becomes uncomfortable:
- Heavy payloads.
- Scrolling page.

We need a Paginator.
# Installation
```sh
$ npm install -s goten-paginator
```
# Use
```js
const GotenPaginator = require('goten-paginator')
```
Wrap your Searcher and List components
```js
<GotenPaginator
  totalPages={/*YouNeedManageTheStateOfTotalPages*/}
  currentPage={/*YouNeedManageTheStateOfCurrentPage*/}
>
    <YourSearcher/>
    <YourList elements={/*YourSourceOfTheElements*/}/>
</GotenPaginator>
```
# Requirements
- The response of your api-backend must include the total pages and current page.
- Your Searcher must have a method that make the search.
-- In this method add two optional parameters: nextPage and quantityElements
# GotenPaginator's parameters
- totalPages: Number (Required)
- currentPage: Number (Required)
- searchMethod: (Optional. Here link your Searcher's method.)
# Contribution
To contribute to this package, we propose the following workflow:
- Add an issue with related tags to describe the contribution (is it a bug?, a feature request?)
- Branch your solution from develop, with the name as #<issue_number>_<descriptive_name>
- Pull request and wait for approval/corrections