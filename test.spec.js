const supertest = require("supertest")
const app = require("./app")

const server = supertest(app)

describe("SAMPLE unit test", ()=>{
    test("should return home page", (done)=>{
        server
        .get("/")
        .expect(200)
        .end(function(err,res){
            done();
        })
    })
})