import { expect } from "chai";
import api from "../service.js";
import { expectedFields } from "../consts.js";

describe("Positive NeoWs API tests", function () {
    const asteroidId = "54292217";

    it("Search asteroid by id", async () => {
        const result = await api.get(`/${asteroidId}`);
        expect(result.status).to.equal(200);
        expect(result.data).to.have.property("id");
        expect(result.data.id).to.equal(asteroidId);
    });

    it("Expected fields", async () => {
        const result = await api.get(`/${asteroidId}`);
        expect(result.data).to.include.keys(expectedFields);
    });

});
describe("Negative NeoWs API tests", function () {
    it("Error 404 for non existed asteroid id", async() => {
        try{
            await api.get("/1111111");
            throw new Error("Expected 404 error. Asteroid is not found");
        } catch (error) {
            expect(error.response.status).to.equal(404); 
        }

    });
    
    


});


