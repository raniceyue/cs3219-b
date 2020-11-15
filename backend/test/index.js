const chai = require("chai")
const chaiHttp = require("chai-http")
chai.use(chaiHttp)
const expect = chai.expect
const app = require('../index')
const Figure = require('../api/model');

describe("Figures", () => {

    // Test GET
    describe("GET /api/figures", () => {
        it("Should get all figures", (done) => {
            chai.request(app)
                .get('/api/figures')
                .end((err, res) => {
                    expect(res.status).to.eq(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    }).timeout(10000);

    // Test POST

    describe("POST /api/figures", () => {
        let id = "";
        it("Should create a figure", (done) => {
            let figure = new Figure({name: "Test API", price: 200, brand: "Goodsmile Company", toSell: false})
            chai.request(app)
                .post('/api/figures')
                .send(figure)
                .end((err, res) => {
                    id = figure._id;
                    expect(res.status).to.eq(200);
                    expect(res.body.data).to.be.a('object');
                    expect(res.body.data).to.have.property('name')
                    expect(res.body.data).to.have.property('price')
                    expect(res.body.data).to.have.property('brand')
                    expect(res.body.data).to.have.property('toSell')
                    done();
                });
        })
    });

    // Test DELETE

    describe("DELETE /api/figures/:id figure", () => {
        it("Should delete a figure", (done) => {
            let figure = new Figure({name: "Test Hatsune Miku v5 1/4 Scale Statue", price: 200, brand: "Goodsmile Company", toSell: false})
            figure.save((err, figure) => {
            chai.request(app)
                .delete('/api/figures/' + figure._id)
                .end((err, res) => {
                    expect(res.status).to.eq(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.message).to.eq('Figure deleted');
                    done();
                });
            });
        })
    });

    // Test PUT
    describe('PUT /api/figures/:id figure', () => {
        let id = "";
        it('It should UPDATE a figure given the id', (done) => {
            let figure = new Figure({name: "Test API1", price: 200, brand: "Goodsmile Company", toSell: false})
            figure.save((err, figure) => {
                chai.request(app)
                  .put('/api/figures/' + figure._id)
                  .send({ name: "Test API" })  // Change name to Test API
                  .end((err, res) => {
                        expect(res.status).to.eq(200);
                        expect(res.body).to.be.a('object');
                        expect(res.body.message).to.be.eq('Figure Info updated');
                        expect(res.body.data.name).to.be.eq("Test API");
                        done();
                  });
            });
        });
    });

    afterEach('Deleting test entities', (done) => {
        Figure.deleteMany({ name: "Test API"}, (err, res) => {
            done();
        })
    });

});

