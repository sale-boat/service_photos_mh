# product-gallery-summary
A component replica of an Amazon Product Page's top product summary and gallery section.

## API Reference

Get Single Product Data: 
<br>GET: '/api/products/:id'

```javascript
{
  "id": Number,
  "unique_id": Number,
  "name": String,
  "category": String,
  "manufacturer": String,
  "primary_image": String,
  "review_one_star_count": Number,
  "review_two_star_count": Number,
  "review_three_star_count": Number,
  "review_four_star_count": Number,
  "review_five_star_count": Number,
  "review_count": Number,
  "question_count": Number,
  "price": Number,
  "total_price": Number,
  "stock": Number,
  "is_prime": Boolean,
  "description": String
}
```

Create Single Product Data:
<br>POST: '/api/products/:id'

```javascript
{
  "id": Number,
  "isSuccess": Boolean
}
```

Update Single Product Data:
<br>PUT: '/api/products/:id'

```javascript
{
  "id": Number,
  "unique_id": Number,
  "name": String,
  "category": String,
  "manufacturer": String,
  "primary_image": String,
  "review_one_star_count": Number,
  "review_two_star_count": Number,
  "review_three_star_count": Number,
  "review_four_star_count": Number,
  "review_five_star_count": Number,
  "review_count": Number,
  "question_count": Number,
  "price": Number,
  "total_price": Number,
  "stock": Number,
  "is_prime": Boolean,
  "description": String
}
```

Delete Single Product Data:
<br>DELETE: '/api/products/:id'

```javascript
{
  "id": Number,
  "isSuccess": Boolean
}
```
