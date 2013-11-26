AjaxOnRails::Application.routes.draw do
  root :to => 'menus#index'
  resources :menus, :only => [:index, :show, :create]
  resources :items, :only => [:create]
end
