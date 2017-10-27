# Using Postman to run Unit Tests

These solutions refer to the [`postman-testing`](https://github.com/kale-stew/devmtn-notes/tree/master/Unit-Testing/postman-testing) project in the [`Unit-Testing`](https://github.com/kale-stew/devmtn-notes/tree/master/Unit-Testing) directory of this git. 

When in doubt, check out [the docs](https://www.getpostman.com/docs/postman/scripts/test_scripts).

* Status code should always return (`200`). Syntax of our average status code test:
```
pm.test('status code is 200', () => {
    pm.response.to.have.status(200);
})
```

* Another good practice is to define the `json` response in a variable at the top:
```
const response = pm.response.json();
```


## Some examples:

### Setup
- `cd` into the `postman-testing` directory
- `npm i` to install neccessary dependencies
- Go to the Postman app, `import` in the top left corner > select the file inside of `endpoint_testing.json` from the `postman-testing` folder
- `nodemon` in the terminal to get the server up

### To start testing:
- click on the first request in the collection `GET - All Students` and click the blue `Send` in the upper righthand corner
- make sure you're receiving data in the `Body` below
- then, click on the `Tests` tab under the request URL. This is where the Postman requests go.

### 1. Test the endpoint to GET all students
- `localhost:4000/api/students`
- status code should return `200`
- check if all 20 student objects were returned

```
const response = pm.response.json()

pm.test('Status code is 200', () => {
    pm.response.to.have.status(200);
})

pm.test('All 20 students obj in response', () => {
    pm.expect(response.length).to.eql(20);
})
```


### 2. Test the endpoint to GET a student by Id
- `localhost:4000/api/students/9`
- status code should return `200`
- should return the following student object:
    ```
    {
        "id": 9,
        "student": "Patsy Daunay",
        "email_address": "pdaunary8@about.com",
        "phone": "(806) 2654555",
        "current_grade": "A"
    }
    ```

```
const response = pm.response.json();

pm.test('Status code is 200', () => {
    pm.response.to.have.status(200);
})

const student = {
    "id": 9,
    "student": "Patsy Daunay",
    "email_address": "pdaunary8@about.com",
    "phone": "(806) 2654555",
    "current_grade": "A"
}

pm.test('Response should include student with id: 9', () => {
    pm.expect(response[0]).to.eql(student);
})
```

### 3. Test the endpoint to GET a student by name
- `localhost:4000/api/students?name=la`
- status code should return `200`
- should return the following student with name `Abey Laynard`

```
const response = pm.response.json();

pm.test('Status code is 200', () => {
    pm.response.to.have.status(200);
})

pm.test('Abey Laynard in response', () => {
    let abeyObject = false;
    response.map( s => {
        if (s.student === 'Abey Laynard') abeyObject = true;
    })
    pm.expect(abeyObject).to.eql(true);
})
```


### 4. Test the endpoint to GET students by grade
- `localhost:4000/api/students?grade=c`
- status code should return `200`
- should return all student objects with a grade `C` as `current_grade`

```

```


### 5. Test the endpoint to GET a student by email
- `localhost:4000/api/students?email=gdee@clickbank.net`
- status code should return `200`
- given the search string `gdee@clickbank.net`, `Gilbert De Gouy`'s student object should be the only return
    - length of response should be `1`
    - object in response matches:
    ```
    {
        "id": 15,
        "student": "Gilbert de Gouy",
        "email_address": "gdee@clickbank.net",
        "phone": "(615) 2408518",
        "current_grade": "B"
    }

    ```

```

```


### 6. Test the endpoint to GET students by phone
- `localhost:4000/api/students?phone=608`
- status code should return `200`
- all object returned contain the numbers `608`, in that order

```
const res = pm.response.json();

pm.test('status code is 200', () => {
    pm.response.to.have.status(200);
})

pm.test('student phone number includes 608', () => {
    let responseCount = res.length;
    pm.expect(res.filter( s => s.phone.includes('608')).length).to.eql(responseCount);
})
```


### 7. Test the endpoint to PUT an update in `current_grade`
- `localhost:4000/api/students/15`
- status code should return `200`
- student's grade should have been updated to `A-`

```
const res = pm.response.json();

pm.test('Status code is 200', () => {
    pm.response.to.have.status(200);
})

pm.test('students grade can be changed', () => {
    pm.expect(res[0].current_grade).to.eql('A-');
})
```


### 8. Test the endpoint to POST a new student to the class
- `localhost:4000/api/students`
- status code should return `200`
- verify the new user object created contains the following:
    - `student`
    - `email_address`: `tim@homeimprovement.com`
    - `phone`: `(408) 8674530`

```

```


### 9. Test the endpoint to DELETE a student from the class
- `localhost:4000/api/students/18`
- status code should return `200`
- ID of object in response is `18`

```

```