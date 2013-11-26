class Item < ActiveRecord::Base
  attr_accessible :item_name, :item_price, :menu_id
  validates :item_name, :presence => true
  belongs_to :menu
end
