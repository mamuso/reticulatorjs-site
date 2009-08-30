require 'rubygems'
require 'sinatra'
require 'lib/sinatra/content_for'

get '/' do
  erb :home
end

get '/example_simplegrid' do
  erb :example_simplegrid
end

get '/example_customgrid_extraguides' do
  erb :example_customgrid_extraguides
end

get '/example_twogrids' do
  erb :example_twogrids
end

get '/example_emptygrid' do
  erb :example_emptygrid
end

get '/example_horizontal' do
  erb :example_horizontal
end

get '/example_vertical' do
  erb :example_vertical
end