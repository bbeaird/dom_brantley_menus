class ItemsController < ApplicationController
  def create
    @item = Item.new params[:menu]
    if @item.save
    end
  end

end
