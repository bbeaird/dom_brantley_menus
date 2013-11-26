class ItemsController < ApplicationController
  def create
    @item = Item.new params[:item]
    if @item.save
      render :json => { :item_template => render_to_string(:partial => 'item', :locals => {:item => @item}) }
    else
      render :json => {:error => @item.errors.full_messages.join(", ")}, :status => :unprocessable_entity
    end
  end

  def show
    @items = Item.all
    @item = Item.new
  end

  def index
    @items = Item.all
    @item = Item.new
  end

end
