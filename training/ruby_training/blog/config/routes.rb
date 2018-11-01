Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'
  get 'articles/new'
  resources :articles 
  resources :articles do
  	resources :comments
end	
root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end