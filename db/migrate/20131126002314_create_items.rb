class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :item_name, :null => false
      t.integer :item_price, :null => false
      t.integer :menu_id, :null => false
    end
  end
end
