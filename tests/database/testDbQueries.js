const assert = require('assert');
const db = require('../../backend/utils/db.js');
const { ProjectSchema, DisciplineSchema, QuantitySchema } = require('../../backend/models');

describe('Database Queries', function() {
  describe('#Project Queries', function() {
    it('should return project details when queried with valid project code', async function() {
      const projectCode = 'P1234';
      const project = await db.query(ProjectSchema, { code: projectCode });
      assert.equal(project.code, projectCode);
    });
  });

  describe('#Discipline Queries', function() {
    it('should return discipline details when queried with valid discipline id', async function() {
      const disciplineId = 'D1234';
      const discipline = await db.query(DisciplineSchema, { id: disciplineId });
      assert.equal(discipline.id, disciplineId);
    });
  });

  describe('#Quantity Queries', function() {
    it('should return quantity details when queried with valid quantity id', async function() {
      const quantityId = 'Q1234';
      const quantity = await db.query(QuantitySchema, { id: quantityId });
      assert.equal(quantity.id, quantityId);
    });
  });
});