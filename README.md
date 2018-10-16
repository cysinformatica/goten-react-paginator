# Goten Paginator for React

Generally when we developing a search we have:
- Searcher. Wich has the filters of the search.
- List. Wich shows the result of search.

But if we have a lot elements on the result, the search becomes uncomfortable:
- Heavy payloads.
- Scrolling page.

We need a Paginator.

## Installation

```npm install -s goten-react-paginator```

## Requirements

- The response of your api-backend or soruce must include the total elements, offset and limit.
- Your Searcher must have a method that make the search.
- In this method add two optional parameters: offset and limit.
- To visualize styles default you must have bootstrap.

## Usage

``` jsx
const GotenPaginator = require('goten-react-paginator') //ES5

import { GotenPaginator } from 'goten-react-paginator' //ES6
```

Wrap your Searcher and List components

``` jsx
<GotenPaginator
  totalElements={/*YouNeedManageTheStateOfTotalElements*/}
  offset={/*YouNeedManageTheStateOfOffset*/}
  limit={/*YouNeedManageTheStateOfLimit*/}
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
          buttonClassName={{
            active: "btn btn-success",
            default: "btn btn-warning",
          }}
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
|  totalElements (Required)| number  | Totality of elements to calculate the max number of pages |
|  offset (Required)| number  | the offset to calculate the current page |
|  limit (Required)| number  |  Quantity of elements to show|
|  searchMethod (Optional)| method |  Here link your Searcher's method. If you don't specify, the Goten's component take 'search' by default from your Searcher component|
|  buttonClassName (Optional)| object |  this object has two styles properties **active** for selected page and **default** for the others buttons. |

## Contributions

To contribute to this package, we propose the following workflow:
- Add an issue with related tags to describe the contribution (is it a bug?, a feature request?)
- Branch your solution from develop, with the name as ```#<issue_number>_<descriptive_name>```
- Send a pull request and wait for approval/corrections