# product-gallery-summary
A component replica of an Amazon Product Page's top product summary and gallery section.

## API Reference

Get Single Product Data: 
<br>GET: '/api/products/:id'

```javascript
{
  "id": int,
  "unique_id": int,
  "name": "",
  "category": "",
  "manufacturer": "",
  "primary_image": "",
  "review_one_star_count": int,
  "review_two_star_count": int,
  "review_three_star_count": int,
  "review_four_star_count": int,
  "review_five_star_count": int,
  "review_count": int,
  "question_count": int,
  "price": int,
  "total_price": int,
  "stock": int,
  "is_prime":boolean,
  "description": ""
}
```

Create Single Product Data:
<br>POST: '/api/products/:id'

```javascript
{
  "id": int,
  "isSuccess": boolean
}
```

Update Single Product Data:
<br>PUT: '/api/products/:id'

```javascript
{
  "id": int,
  "isSuccess": boolean
}
```

Delete Single Product Data:
<br>GET: '/api/products/:id/delete'

```javascript
{
  "id": int,
  "isSuccess": boolean
}
```
