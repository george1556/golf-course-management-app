const request = require("supertest");
const { app } = require("../../server");
const knex = require("../../db/knex");

describe("the tee_times entity routes", () => {
  beforeEach(done => {
    return knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        knex.seed.run().then(() => {
          done();
        });
      });
    });
  });

  //   afterEach(done => {
  //     return knex.migrate.rollback().then(() => {
  //       done();
  //     });
  //   });

  //*******TEE TIMES TESTS*******

  describe("get all tee times", () => {
    it("should fetch all tee times successfully", async () => {
      const res = await request(app).get("/teetimes");

      expect(res.status).toEqual(200);
    });
  });

  describe("get one tee time", () => {
    it("should fetch one tee time successfully", async () => {
      const id = 1;
      const res = await request(app).get(`/teetimes/${id}`);

      expect(res.status).toEqual(200);
    });
  });

  describe("add one teetime", () => {
    it("should add one teetime successfully", async () => {
      const newTeetime = {
        time: "2019-12-27T02:07:56.000Z",
        players: [3, 5, 7]
      };
      const res = await request(app)
        .post("/teetimes")
        .send(newTeetime);

      // Test the response
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty("message");
    });
  });

  describe("remove one teetime", () => {
    it("should remove one teetime successfully", async () => {
      const id = 1;
      const res = await request(app).delete(`/teetimes/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body[0].id).toEqual(id);
    });
  });

  //*******CUSTOMERS TESTS*******
  describe("get all customers", () => {
    it("should get all the customers", async () => {
      // Arrange

      // Act
      const res = await request(app).get("/customers");

      // Assert
      expect(res.status).toEqual(200);
      expect(res.body).toHaveLength(300);
    });
  });

  describe("get one customer", () => {
    it("should get one customer", async () => {
      // Arrange
      const id = 2;

      // Act
      const res = await request(app).get(`/customers/${id}`);

      // Assert
      // Testing the response
      expect(res.status).toEqual(200);
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("name");
      expect(res.body[0]).toHaveProperty("address");
      expect(res.body[0]).toHaveProperty("company");
      expect(res.body[0]).toHaveProperty("email");
      expect(res.body[0]).toHaveProperty("phone");
      expect(res.body[0]).toHaveProperty("created_at");
      expect(res.body[0]).toHaveProperty("updated_at");
      expect(res.body[0].name).toEqual("Lucas Duke");
    });
  });

  describe("add one customer", () => {
    it("should add one customer successfully", async () => {
      const newCustomer = {
        name: "blah",
        company: "BLAH",
        email: "blah@blah.com",
        phone: "+1 (978) 466-3835",
        address: "580 Court Square, Blandburg, Arizona, 597"
      };
      const res = await request(app)
        .post("/customers")
        .send(newCustomer);

      expect(res.status).toEqual(200);
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("created_at");
      expect(res.body[0]).toHaveProperty("updated_at");
    });
  });

  describe("update one customer", () => {
    it("should update one customer successfully", async () => {
      // Setup
      const id = 1;
      const updatedCustomer = { name: "Jimmy Buffett" };

      // Do the work
      const res = await request(app)
        .patch(`/customers/${id}`)
        .send(updatedCustomer);

      // Test the response
      expect(res.status).toEqual(200);
      expect(res.body[0].name).toEqual("Jimmy Buffett");

      // Test the database
      const customers = await knex("customers");
      const expectedCustomer = customers.find(cust => cust.id === id);
      expect(expectedCustomer.name).toEqual("Jimmy Buffett");
    });
  });

  describe("remove one customer", () => {
    it("should remove one customer successfully", async () => {
      const id = 1;
      const res = await request(app).delete(`/customers/${id}`);

      expect(res.status).toEqual(200);
      expect(res.body[0].name).toEqual("Margie Barber");

      const customers = await knex("customers");
      expect(customers[0].id).toEqual(2);
    });
  });
});
