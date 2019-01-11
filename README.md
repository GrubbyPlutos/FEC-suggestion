# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API] (#API)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## API METHODS

Get restaurant suggestions
  - route: GET /restaurants/:id/suggestions
  - input: path param 'id'
  - output: array of objects with the following structure:
      { 
        id (num),
        name (string),
        food (string),
        maxWaitTime (num),
        priceRange (num),
        reviewNo (num),
        stars (num),
        good (num),
        onTime (num),
        accurate (num),
        reviewUsername (string),
        review (string),
        picture (url string),
      }

Add a new restaurant
  - route: POST /restaurants
  - input: obj with restaurant info in above structure
  - output: none
  
Add/Update suggestions to/of a restaurant
  - route: PUT /restaurants/:id/suggestions
  - input: path param 'id' and id(s) of suggestion(s)
  - output: none
  
Update restaurant info
  - route: PUT /restaurants/:id
  - input: path param 'id' and updated info in object format
  - output: none

Delete a restaurant
  - route: DELETE /restaurants/:id 
  - input: path param 'id'
  - output: none

