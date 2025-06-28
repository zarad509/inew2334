import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

const assert = chai.assert;
chai.use(chaiHttp);

it('should return 404 for non-existent student', function () {
    return chai.request(app)
      .get('/9999')  // Non-existent student ID
      .then(function (res) {
        assert.strictEqual(res.status, 404);  // Should return 404 for not found
        assert.strictEqual(res.body.message, 'Student record not found');  // Message should match
      });
  });
  
  
