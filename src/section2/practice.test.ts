import { ShoppingList } from './practice';

let shoppingList: ShoppingList;
describe('演習問題', () => {
  beforeEach(() => {
    shoppingList = new ShoppingList();
  });
  describe('addItemメソッド', () => {
    it('アイテムをリストに追加できることを確認するテストケース', () => {
      const addItem = 'あいうえお';
      shoppingList.addItem(addItem);
      expect(shoppingList.list).toStrictEqual([addItem]);
    });
  });

  describe('removeItemメソッド', () => {
    beforeEach(() => {
      shoppingList.list = ['かきくけこ', 'さしすせそ'];
    });

    it('アイテムをリストから削除できることを確認するテストケース', () => {
      const removeItem = 'かきくけこ';
      shoppingList.removeItem(removeItem);
      expect(shoppingList.list).toStrictEqual(['さしすせそ']);
    });
    it('存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース', () => {
      const removeItem = 'なにぬねの';
      expect(() => shoppingList.removeItem(removeItem)).toThrow();
    });
  });
});
