Rails.application.routes.draw do
  get 'welcome/index'
  get 'articles/new'
  resources :articles
  #get 'articles/index'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end