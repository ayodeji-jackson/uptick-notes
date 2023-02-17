```
POST /notes
Content-Type: application/json

{
  "title": "note title", 
  "content": "note content"
}

201 Created
Content-Type: application/json

{
  "id": "1"
}
```
```
GET /notes

200 OK
Content-Type: application/json

[
  { "title": "note 1 title", "content": "note 1 content" }, 
  { "title": "note 2 title", "content": "note 2 content" }
]
```
```
GET /notes/1

200 OK
Content-Type: application/json

{
  "title": "note 1 title", "content": "note 1 content"
}
```
```
PUT /notes/1
Content-Type: application/json

{
  "content": "note 1 content updated"
}

204 No Content
```
```
DELETE /notes/1

204 No Content
```
```
POST /auth/register
Content-Type: application/json

{
  "name": "user", 
  "email": "user@example.com", 
  "password": "abc123"
}

201 Created
Content-Type: application/json

{
  "id": "1"
}
```
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com", 
  "password": "abc123"
}

200 OK
Content-Type: application/json

{
  "id": "1"
}
```
```
GET /auth/logout

```