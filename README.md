# React pure pagination

- Show list data with Table View, Grid View
- Pagination with pure js
- UI Carbon components react
- Redux, Redux thunk
- style-components
- axios

Please install json-server first: yarn global add json-server

```
  - yarn start to run local
  - yarn run json-server to run mock json
```

## Pagination

<image src="./image-pagination.png" />
binding: `{offset + 1} - {offset + limit} of {totalItems}`

- page: currentPage. Start from number 1.
- pageSize: items of per page. Maybe call is "limit".
- offSet: index of first page at currentPage.
- totalItems: total items.

E.g:

totalItems: 50 item.

item per page (pageSize): x = 10.

page: 1.

Formula: n items per page.

start = (n - 1) \* x;

end = start + x;

items.slice(start, end);
