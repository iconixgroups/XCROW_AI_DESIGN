import assert from 'assert';
import db from '../../backend/utils/db.js';
import { ProjectSchema, DisciplineSchema, QuantitySchema } from '../../backend/models';

describe('Database Queries', function() {
  describe('#Project Queries', function() {
    it('should return project details when queried with valid project code', async function() {
      const projectCode: string = 'P1234';
      const project: ProjectSchema = await db.query(ProjectSchema, { code: projectCode });
      assert.equal(project.code, projectCode);
    });
  });

  describe('#Discipline Queries', function() {
    it('should return discipline details when queried with valid discipline id', async function() {
      const disciplineId: string = 'D1234';
      const discipline: DisciplineSchema = await db.query(DisciplineSchema, { id: disciplineId });
      assert.equal(discipline.id, disciplineId);
    });
  });

  describe('#Quantity Queries', function() {
    it('should return quantity details when queried with valid quantity id', async function() {
      const quantityId: string = 'Q1234';
      const quantity: QuantitySchema = await db.query(QuantitySchema, { id: quantityId });
      assert.equal(quantity.id, quantityId);
    });
  });
});