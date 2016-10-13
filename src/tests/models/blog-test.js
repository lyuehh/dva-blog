import expect from 'expect';
import blog from '../../models/blog';

describe('blog', () => {

  describe('reducer', () => {
    it('it should save', () => {
      expect(blog.reducers['example/save']({}, { payload: { a: 1 }})).toEqual({ a: 1 });
    });
  })
});
