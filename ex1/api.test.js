const request = require("supertest");
const app = require("./app");

describe("Test api paths", () => {
  

  test("It should test the PUT user", done => {
  	var userData = {name:"test3", email:"test3@test.com" ,id:2 ,password: "123456"}
    request(app)
      .put("/users/")
      .send(userData)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  
  test("It should response the GET user method", done => {
    request(app)
      .get("/users/2")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response the GET all users method", done => {
    request(app)
      .get("/users/all")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should test the Delete method", done => {
    request(app)
      .delete("/users/2")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});