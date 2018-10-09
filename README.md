# Goten Paginator for React

Whenever we have some items we want to show, usually we create:
- A Searcher, which provides the filters for searching items.
- A List, which shows the result of said search.

For small data, this should be fine. But when working with bigger sets, we get:
- Heavy payloads.
- Endless scrolling.
- Huge requirements on our backend and database.

We need a Paginator.

## Installation

```npm install -s goten-react-paginator```

## Requirements

- Your API's response or source of data must include the total elements, offset and limit.
- Your Searcher must have a method that executes the search (whatever that means in your application).
    - The **search** method should have two parameters: offset and limit.
    - Example,
```jsx
    search(offset, limit) {
        getFromApi('/myApiURL', {offset, limit})
    }
```

## Usage

``` jsx
const GotenPaginator = require('goten-react-paginator') //ES5

import { GotenPaginator } from 'goten-react-paginator' //ES6
```

Wrap your Searcher and List components

``` jsx
<GotenPaginator
  totalElements={/*totalElements - a Redux variable, a state, or some other data controlling entity*/}
  offset={/*offset*/}
  limit={/*limit*/}
>
    <YourSearcher/>
    <YourList/>
</GotenPaginator>
```

## Example of use

### without goten-react-paginator

``` jsx
render() {
    return (
      <div className="App">
          <YourSearcher/>
          <YourList/>
      </div>
    );
  }
```

### with goten-react-paginator

``` jsx
render() {
    return (
      <div className="App">
        <GotenPaginator
          totalElements={this.state.totalElements}
          offset={this.state.offset}
          limit={this.state.limit}
        >
          <YourSearcher/>
          <YourList/>
        </GotenPaginator>
      </div>
    );
  }
```

## GotenPaginator's parameters

|Prop name | Type   | Description   |
|---|---|---|
|  totalElements (Required)| number  | Total elements. To compute the maximum number of pages |
|  offset (Required)| number  | Offset for working out the current page |
|  limit (Required)| number  |  Amount of elements to show|
|  searchMethod (Optional)| function |  You can pass any function (that receives two parameters, offset and limit) to GotenPaginator. This replaces the option of using the Searcher's method |
|  searcherMethodName (Optional)| string |  When not using the searchMethod prop, you can pass a string to specify which method from Searcher the GotenPaginator should use to search. If none passed, it defaults to 'search' |

## Contributions

To contribute to this package, we use the following workflow:
- Add an issue with related tags to describe the contribution (is it a bug? a feature request?).
- Branch your solution from develop, naming it like #<issue_number>-<descriptive_name>.
- Send a pull request and wait for approval/corrections.
