import 'mocha';
import {Controllers} from "./controllers";

let contrl = new Controllers();
let chai = require('chai');
let should = chai.should();

describe ("----- Testing uploading of the file to DropBox ----- ", async () => {
    it("file shoul be uploaded", async () => {
        const res = await contrl.upload();
        res.status.should.equal(200);
    }).timeout(5000);
})

 describe ("----- Testing getting metadata of the file in DropBox ----- ", async () => {
    it("Metadata of the file should be got", async () => {
        const promise = await contrl.getMetadata();
        promise.status.should.equal(200);
    }).timeout(5000);
})

describe ("----- Testing deleting the file from DropBox ----- ", async () => {
    it("The file should be deleted", async () => {
        const promise = await contrl.deleteF();
        promise.status.should.equal(200);
    }).timeout(5000);
})
